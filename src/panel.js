import '@andypf/json-viewer'

// --- Main Function ---
function initializePanel() {
    let inertiaPage = {};
    let jsonViewer = null;
    let userSettings = {
        // Appearance
        theme: 'dracula',
        fontSize: 16,

        // Display Options
        showDataTypes: false,
        showToolbar: true,
        showCopy: true,
        showSize: true,

        // Structure
        defaultOpenDepth: 2,
        indent: 2,
        expandIconType: 'square'
    };

        // Theme mapping from extension themes to json-viewer themes
    const themeMapping = {
        // Dark themes
        'dracula': 'dracula',
        'monokai': 'monokai',
        'ambiance': 'tomorrow-night',
        'chaos': 'default-dark',
        'clouds_midnight': 'default-dark',
        'gob': 'default-dark',
        'gruvbox': 'gruvbox-dark',
        'idle_fingers': 'default-dark',
        'kr_theme': 'default-dark',
        'merbivore': 'default-dark',
        'merbivore_soft': 'default-dark',
        'mono_industrial': 'default-dark',
        'nord_dark': 'nord',
        'pastel_on_dark': 'default-dark',
        'solarized_dark': 'solarized-dark',
        'terminal': 'default-dark',
        'tomorrow_night': 'tomorrow-night',
        'tomorrow_night_blue': 'tomorrow-night-blue',
        'tomorrow_night_bright': 'tomorrow-night-bright',
        'tomorrow_night_eighties': 'tomorrow-night-eighties',
        'twilight': 'twilight',
        'vibrant_ink': 'default-dark',

        // Light themes
        'chrome': 'default-light',
        'clouds': 'default-light',
        'crimson_editor': 'default-light',
        'dawn': 'default-light',
        'dreamweaver': 'default-light',
        'eclipse': 'default-light',
        'github': 'github-light',
        'iplastic': 'default-light',
        'solarized_light': 'solarized-light',
        'sqlserver': 'default-light',
        'textmate': 'default-light',
        'tomorrow': 'tomorrow',
        'xcode': 'xcode'
    };

            // Initialize json-viewer
    const initializeJsonViewer = () => {
        const container = document.querySelector('#json-viewer-container');
        if (!container) return;

        // Clear existing viewer
        container.innerHTML = '';

        const viewerTheme = themeMapping[userSettings.theme] || 'default-dark';

        // Create the json-viewer web component
        jsonViewer = document.createElement('andypf-json-viewer');
        jsonViewer.setAttribute('theme', viewerTheme);
        jsonViewer.setAttribute('expanded', userSettings.defaultOpenDepth.toString());
        jsonViewer.setAttribute('show-toolbar', userSettings.showToolbar.toString());
        jsonViewer.setAttribute('show-data-types', userSettings.showDataTypes.toString());
        jsonViewer.setAttribute('show-copy', userSettings.showCopy.toString());
        jsonViewer.setAttribute('show-size', userSettings.showSize.toString());
        jsonViewer.setAttribute('expand-icon-type', userSettings.expandIconType);
        jsonViewer.setAttribute('indent', userSettings.indent.toString());

        // Apply font size styling
        jsonViewer.style.fontSize = `${userSettings.fontSize}px`;

        // Set initial data
        jsonViewer.data = { message: 'Refresh your page to see Inertia.js page json' };

        container.appendChild(jsonViewer);
    };

        // --- Load Settings and Apply Theme ---
    chrome.storage.sync.get(userSettings, (items) => {
        userSettings = items;

        const darkThemes = [
            'ambiance', 'chaos', 'clouds_midnight', 'dracula', 'gob',
            'gruvbox', 'idle_fingers', 'kr_theme', 'merbivore', 'merbivore_soft',
            'mono_industrial', 'monokai', 'nord_dark', 'pastel_on_dark',
            'solarized_dark', 'terminal', 'tomorrow_night', 'tomorrow_night_blue',
            'tomorrow_night_bright', 'tomorrow_night_eighties', 'twilight', 'vibrant_ink'
        ];

        if (darkThemes.includes(items.theme)) {
            document.body.classList.add('theme-dark');
            document.body.classList.remove('theme-light');
        } else {
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark');
        }

        // Initialize viewer after settings are loaded
        initializeJsonViewer();
    });

    const mergePage = (nextPage, isPartial = false) => {
        if (typeof nextPage !== 'object' || nextPage === null || !nextPage.component) {
            return inertiaPage;
        }
        if (isPartial && typeof inertiaPage === 'object' && inertiaPage !== null && inertiaPage.component === nextPage.component) {
            return inertiaPage = { ...nextPage, props: { ...inertiaPage.props, ...nextPage.props } };
        }
        return inertiaPage = nextPage;
    }

            let renderJson = (page, isPartial = false) => {
        const newPage = mergePage(page, isPartial);
        if (typeof newPage !== 'object' || newPage === null) return;

        if (jsonViewer) {
            jsonViewer.data = newPage;
            jsonViewer.setAttribute('expanded', userSettings.defaultOpenDepth.toString());
            // Ensure font size is maintained
            jsonViewer.style.fontSize = `${userSettings.fontSize}px`;
        }

        handleZiggy(newPage);
    }

    const sendJson = () => {
        if (jsonViewer && jsonViewer.data) {
            const jsonString = JSON.stringify(jsonViewer.data);
            chrome.devtools.inspectedWindow.eval(`dispatchEvent(new PopStateEvent("popstate", {state: ${jsonString}}))`);
        }
    }

    document.querySelector('#send').addEventListener('click', sendJson);

    // --- Communication & Event Handling ---
    const port = chrome.runtime.connect({ name: `panel-${chrome.devtools.inspectedWindow.tabId}` });
    port.onMessage.addListener(message => {
        if (message.type === 'INERTIA_SUCCESS') renderJson(message.page);
    });

    chrome.tabs.sendMessage(chrome.devtools.inspectedWindow.tabId, { type: 'GET_INERTIA_PAGE' }, page => {
        if (page) renderJson(page);
        else if (jsonViewer) jsonViewer.data = { message: "This page doesn't seem to be using Inertia.js" };
    });

    chrome.devtools.network.onRequestFinished.addListener(request => {
        if (request.response.status === 200 && request.response.headers.find(h => h.name.toLowerCase() === 'x-inertia')) {
            const isPartial = request.request.headers.some(h => h.name.toLowerCase() === 'x-inertia-partial-data');
            request.getContent(content => {
                try {
                    if (content) renderJson(JSON.parse(content), isPartial);
                } catch (e) {
                    console.error("Inertia Devtools: Error parsing X-Inertia response.", e);
                }
            });
        }
    });

    // --- UI Logic: Tab Switching & Ziggy ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const routesTab = document.querySelector('[data-tab="routes"]');
    const routeListContainer = document.querySelector('#route-list');
    const routeSearchInput = document.querySelector('#route-search');
    let allRoutes = [];

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');

            // Re-render json viewer when switching to props tab
            if (button.dataset.tab === 'props' && jsonViewer) {
                // The json-viewer automatically handles re-rendering
                // No manual refresh needed
            }
        });
    });

    function handleZiggy(page) {
        if (page && page.props && page.props.ziggy && page.props.ziggy.routes) {
            routesTab.style.display = 'block';
            allRoutes = Object.entries(page.props.ziggy.routes).map(([name, route]) => ({ name, ...route }));
            renderRoutes(allRoutes);
        } else {
            routesTab.style.display = 'none';
        }
    }

    function renderRoutes(routes) {
        routeListContainer.innerHTML = '';
        routes.forEach(route => {
            const routeItem = document.createElement('div');
            routeItem.className = 'route-item';
            const methods = route.methods.map(m => `<span class="route-method route-method-${m.toLowerCase()}">${m}</span>`).join('');
            const bindings = route.bindings ? Object.entries(route.bindings).map(([k, v]) => `${k}: ${v}`).join('<br>') : '<em>none</em>';
            const wheres = route.wheres ? JSON.stringify(route.wheres, null, 2) : '<em>none</em>';
            routeItem.innerHTML = `<div class="route-name">${route.name}</div><div class="route-details"><div class="route-detail-label">URI:</div><div class="route-detail-value">${route.uri}</div><div class="route-detail-label">Methods:</div><div class="route-detail-value route-methods">${methods}</div><div class="route-detail-label">Bindings:</div><div class="route-detail-value">${bindings}</div><div class="route-detail-label">Wheres:</div><div class="route-detail-value">${wheres}</div></div>`;
            routeListContainer.appendChild(routeItem);
        });
    }

    routeSearchInput.addEventListener('input', e => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRoutes = allRoutes.filter(r => r.name.toLowerCase().includes(searchTerm) || r.uri.toLowerCase().includes(searchTerm));
        renderRoutes(filteredRoutes);
    });
}

// Initialize the panel when the DOM is ready
document.addEventListener('DOMContentLoaded', initializePanel);


