// Default settings
const DEFAULT_SETTINGS = {
    // Appearance
    theme: 'dracula',
    fontSize: 16,

    // Display Options
    showDataTypes: false,  // Off by default as requested
    showToolbar: true,
    showCopy: true,
    showSize: true,

    // Structure
    defaultOpenDepth: 2,
    indent: 2,
    expandIconType: 'square'
};

// Theme previews
const THEME_PREVIEWS = {
    // Dark themes
    'dracula': { type: 'dark', preview: '{\n  "name": "Inertia.js",\n  "version": "1.0.0",\n  "active": true\n}' },
    'monokai': { type: 'dark', preview: '{\n  "theme": "monokai",\n  "syntax": "JSON",\n  "highlighted": true\n}' },
    'gruvbox': { type: 'dark', preview: '{\n  "colorScheme": "gruvbox",\n  "retro": true,\n  "warm": false\n}' },
    'nord_dark': { type: 'dark', preview: '{\n  "arctic": "nord",\n  "temperature": "cold",\n  "beauty": "minimal"\n}' },
    'solarized_dark': { type: 'dark', preview: '{\n  "precision": "solarized",\n  "balance": "perfect",\n  "eyes": "comfortable"\n}' },
    'tomorrow_night': { type: 'dark', preview: '{\n  "time": "tomorrow",\n  "mood": "night",\n  "coding": "peaceful"\n}' },

    // Light themes
    'github': { type: 'light', preview: '{\n  "platform": "GitHub",\n  "style": "clean",\n  "readable": true\n}' },
    'solarized_light': { type: 'light', preview: '{\n  "precision": "solarized",\n  "variant": "light",\n  "comfort": "high"\n}' },
    'tomorrow': { type: 'light', preview: '{\n  "brightness": "tomorrow",\n  "clarity": "excellent",\n  "focus": "sharp"\n}' },
    'xcode': { type: 'light', preview: '{\n  "editor": "Xcode",\n  "apple": "design",\n  "professional": true\n}' }
};

let timeoutId = null;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    setupEventListeners();
    setupThemePreview();
    setupRadioGroups();
});

// Load all settings from chrome storage
function loadSettings() {
    chrome.storage.sync.get(DEFAULT_SETTINGS, (items) => {
        // Appearance
        document.querySelector('[name="theme"]').value = items.theme;
        document.querySelector('[name="fontSize"]').value = items.fontSize;

        // Display Options
        document.querySelector('[name="showDataTypes"]').checked = items.showDataTypes;
        document.querySelector('[name="showToolbar"]').checked = items.showToolbar;
        document.querySelector('[name="showCopy"]').checked = items.showCopy;
        document.querySelector('[name="showSize"]').checked = items.showSize;

        // Structure
        document.querySelector('[name="defaultOpenDepth"]').value = items.defaultOpenDepth;
        document.querySelector('[name="indent"]').value = items.indent;
        document.querySelector(`[name="expandIconType"][value="${items.expandIconType}"]`).checked = true;

        // Update UI states
        updateThemePreview(items.theme);
        updateRadioSelection('expandIconType', items.expandIconType);
    });
}

// Save setting to chrome storage
function saveSetting(key, value, feedbackMessage = 'Settings saved!') {
    chrome.storage.sync.set({ [key]: value }, () => {
        showFeedback(feedbackMessage);
    });
}

// Show feedback message
function showFeedback(message) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    const feedback = document.querySelector('#feedback');
    feedback.textContent = message;
    feedback.classList.add('show');

    timeoutId = setTimeout(() => {
        feedback.classList.remove('show');
    }, 2000);
}

// Setup all event listeners
function setupEventListeners() {
    // Appearance settings
    document.querySelector('[name="theme"]').addEventListener('change', (e) => {
        saveSetting('theme', e.target.value, 'Theme updated!');
        updateThemePreview(e.target.value);
    });

    document.querySelector('[name="fontSize"]').addEventListener('change', (e) => {
        const fontSize = parseInt(e.target.value);
        saveSetting('fontSize', fontSize, 'Font size updated!');
    });

    // Display options
    document.querySelector('[name="showDataTypes"]').addEventListener('change', (e) => {
        saveSetting('showDataTypes', e.target.checked, 'Data types setting updated!');
    });

    document.querySelector('[name="showToolbar"]').addEventListener('change', (e) => {
        saveSetting('showToolbar', e.target.checked, 'Toolbar setting updated!');
    });

    document.querySelector('[name="showCopy"]').addEventListener('change', (e) => {
        saveSetting('showCopy', e.target.checked, 'Copy button setting updated!');
    });

    document.querySelector('[name="showSize"]').addEventListener('change', (e) => {
        saveSetting('showSize', e.target.checked, 'Size display setting updated!');
    });

    // Structure settings
    document.querySelector('[name="defaultOpenDepth"]').addEventListener('change', (e) => {
        const depth = parseInt(e.target.value);
        saveSetting('defaultOpenDepth', depth, 'Default depth updated!');
    });

    document.querySelector('[name="indent"]').addEventListener('change', (e) => {
        const indent = parseInt(e.target.value);
        saveSetting('indent', indent, 'Indentation updated!');
    });

    // Expand icon type
    document.querySelectorAll('[name="expandIconType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                saveSetting('expandIconType', e.target.value, 'Icon style updated!');
                updateRadioSelection('expandIconType', e.target.value);
            }
        });
    });
}

// Setup theme preview functionality
function setupThemePreview() {
    const themeSelect = document.querySelector('[name="theme"]');
    updateThemePreview(themeSelect.value);
}

// Update theme preview
function updateThemePreview(themeName) {
    const preview = document.querySelector('#theme-preview');
    const themeInfo = THEME_PREVIEWS[themeName] || THEME_PREVIEWS['dracula'];

    preview.textContent = themeInfo.preview;
    preview.className = `theme-preview preview-${themeInfo.type}`;
}

// Setup radio button group interactions
function setupRadioGroups() {
    document.querySelectorAll('.radio-group').forEach(group => {
        const options = group.querySelectorAll('.radio-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                const radio = option.querySelector('input[type="radio"]');
                if (radio && !radio.checked) {
                    radio.checked = true;
                    radio.dispatchEvent(new Event('change'));
                }
            });
        });
    });
}

// Update radio button visual selection
function updateRadioSelection(groupName, selectedValue) {
    document.querySelectorAll(`[name="${groupName}"]`).forEach(radio => {
        const option = radio.closest('.radio-option');
        if (option) {
            if (radio.value === selectedValue) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        }
    });
}
