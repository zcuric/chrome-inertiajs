document.addEventListener('DOMContentLoaded', () => {
    // Load saved settings
    chrome.storage.sync.get({ defaultOpenDepth: 2, theme: 'dracula' }, (items) => {
        document.querySelector('[name="depth"]').value = items.defaultOpenDepth;
        document.querySelector('[name="theme"]').value = items.theme;
    });
});

let timeoutId = null;

function showFeedback(message) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    const status = document.querySelector('#feedback');
    status.textContent = message;
    timeoutId = setTimeout(() => {
        status.textContent = '';
    }, 1500);
}

// Listen for changes to the depth setting
document.querySelector('[name="depth"]').addEventListener('change', (event) => {
    chrome.storage.sync.set({ defaultOpenDepth: event.target.value }, () => {
        showFeedback('Options saved.');
    });
});

// Listen for changes to the theme setting
document.querySelector('[name="theme"]').addEventListener('change', (event) => {
    chrome.storage.sync.set({ theme: event.target.value }, () => {
        showFeedback('Theme saved.');
    });
});
