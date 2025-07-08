import ace from 'ace-builds'
import jsonWorkerUrl from "ace-builds/src-noconflict/worker-json";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-dracula";

console.log = (...args) => {
    chrome.devtools.inspectedWindow.eval('console.log(' + args.map(arg => JSON.stringify(arg)) + ');');
}

const tabSize = 2

chrome.storage.sync.get({ defaultOpenDepth: 2 }, (items) => {
    const defaultOpenDepth = items.defaultOpenDepth;

    // --- ACE Editor Setup ---
    const jsonContainer = document.querySelector('#json');
    ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl);
    const editor = ace.edit(jsonContainer);
    editor.getSession().setMode("ace/mode/json");
    editor.setTheme("ace/theme/dracula");
    editor.getSession().setTabSize(tabSize);

    let inertiaPage = {};

    const mergePage = (nextPage, isPartial = false) => {
        // A valid Inertia page is an object with a 'component' property.
        if (typeof nextPage !== 'object' || nextPage === null || !nextPage.component) {
            return inertiaPage;
        }

        if (isPartial && typeof inertiaPage === 'object' && inertiaPage !== null && inertiaPage.component === nextPage.component) {
            return inertiaPage = {
                ...nextPage,
                props: { ...inertiaPage.props, ...nextPage.props },
            }
        }
        return inertiaPage = nextPage;
    }

    const renderJson = (page, isPartial = false) => {
        const newPage = mergePage(page, isPartial);
        if (typeof newPage !== 'object' || newPage === null) {
            return;
        }
        const value = JSON.stringify(newPage, null, '\t')
        editor.setValue(value, -1);
        editor.getSession().foldToLevel(defaultOpenDepth);
        handleZiggy(newPage); // Call Ziggy handler
    }

    const sendJson = () => {
        chrome.devtools.inspectedWindow.eval(`dispatchEvent(new PopStateEvent("popstate", {state: ${editor.getValue()}}))`);
    }

    editor.commands.addCommand({
        name: "Send",
        exec: sendJson,
        bindKey: { mac: "cmd-return", win: "ctrl-return" }
    })

    document.querySelector('#send').addEventListener('click', sendJson)

    // --- Communication with other scripts ---
    const port = chrome.runtime.connect({ name: `panel-${chrome.devtools.inspectedWindow.tabId}` });

    port.onMessage.addListener((message) => {
        if (message.type === 'INERTIA_SUCCESS') {
            renderJson(message.page);
        }
    });

    chrome.tabs.sendMessage(chrome.devtools.inspectedWindow.tabId, { type: 'GET_INERTIA_PAGE' }, (page) => {
        if (page) {
            renderJson(page);
        }
    });

    chrome.devtools.network.onRequestFinished.addListener(
        (request) => {
            if (request.response.status === 200 && request.response.headers.find((header) => header.name.toLowerCase() === 'x-inertia')) {
                const isPartial = request.request.headers.some(
                    (header) => header.name.toLowerCase() === 'x-inertia-partial-data'
                );
                request.getContent((content) => {
                    try {
                        if (content) {
                            renderJson(JSON.parse(content), isPartial);
                        }
                    } catch (e) {
                        console.error("Inertia Devtools: Error parsing X-Inertia response.", e);
                    }
                });
            }
        }
    );

    // --- Tab Switching Logic ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate the clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');

            // Crucially, resize the ACE editor if the props tab is activated
            if (button.dataset.tab === 'props') {
                editor.resize();
            }
        });
    });

    // --- Ziggy Routes Feature ---
    const routesTab = document.querySelector('[data-tab="routes"]');
    const routeListContainer = document.querySelector('#route-list');
    const routeSearchInput = document.querySelector('#route-search');
    let allRoutes = [];

    function handleZiggy(page) {
        if (page && page.props && page.props.ziggy && page.props.ziggy.routes) {
            routesTab.style.display = 'block';
            // Transform the routes object into an array
            allRoutes = Object.entries(page.props.ziggy.routes).map(([name, route]) => ({ name, ...route }));
            renderRoutes(allRoutes);
        } else {
            routesTab.style.display = 'none';
        }
    }

    function renderRoutes(routes) {
        routeListContainer.innerHTML = ''; // Clear previous results
        routes.forEach(route => {
            const routeItem = document.createElement('div');
            routeItem.className = 'route-item';

            const methods = route.methods.map(method => `<span class="route-method route-method-${method.toLowerCase()}">${method}</span>`).join('');
            const bindings = route.bindings ? Object.entries(route.bindings).map(([key, value]) => `${key}: ${value}`).join('<br>') : '<em>none</em>';
            const wheres = route.wheres ? JSON.stringify(route.wheres, null, 2) : '<em>none</em>';

            routeItem.innerHTML = `
                <div class="route-name">${route.name}</div>
                <div class="route-details">
                    <div class="route-detail-label">URI:</div>
                    <div class="route-detail-value">${route.uri}</div>
                    <div class="route-detail-label">Methods:</div>
                    <div class="route-detail-value route-methods">${methods}</div>
                    <div class="route-detail-label">Bindings:</div>
                    <div class="route-detail-value">${bindings}</div>
                    <div class="route-detail-label">Wheres:</div>
                    <div class="route-detail-value">${wheres}</div>
                </div>
            `;
            routeListContainer.appendChild(routeItem);
        });
    }

    routeSearchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRoutes = allRoutes.filter(route =>
            route.name.toLowerCase().includes(searchTerm) ||
            route.uri.toLowerCase().includes(searchTerm)
        );
        renderRoutes(filteredRoutes);
    });
});


