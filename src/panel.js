import ace from 'ace-builds'
import jsonWorkerUrl from "ace-builds/src-noconflict/worker-json";
import "ace-builds/src-noconflict/mode-json";

// Import all themes
import 'ace-builds/src-noconflict/theme-ambiance';
import 'ace-builds/src-noconflict/theme-chaos';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-gob';
import 'ace-builds/src-noconflict/theme-gruvbox';
import 'ace-builds/src-noconflict/theme-idle_fingers';
import 'ace-builds/src-noconflict/theme-kr_theme';
import 'ace-builds/src-noconflict/theme-merbivore';
import 'ace-builds/src-noconflict/theme-merbivore_soft';
import 'ace-builds/src-noconflict/theme-mono_industrial';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-nord_dark';
import 'ace-builds/src-noconflict/theme-pastel_on_dark';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/theme-tomorrow_night_blue';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-vibrant_ink';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/theme-clouds';
import 'ace-builds/src-noconflict/theme-crimson_editor';
import 'ace-builds/src-noconflict/theme-dawn';
import 'ace-builds/src-noconflict/theme-dreamweaver';
import 'ace-builds/src-noconflict/theme-eclipse';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-iplastic';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-sqlserver';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-xcode';

// --- Main Function ---
function initializePanel() {
    // --- ACE Editor Setup ---
    const jsonContainer = document.querySelector('#json');
    ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl);
    const editor = ace.edit(jsonContainer);
    editor.getSession().setMode("ace/mode/json");

    // --- Load Settings and Apply Theme ---
    chrome.storage.sync.get({ defaultOpenDepth: 2, theme: 'dracula' }, (items) => {
        editor.getSession().foldToLevel(items.defaultOpenDepth);
        editor.setTheme(`ace/theme/${items.theme}`);

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
    });

    let inertiaPage = {};

    const mergePage = (nextPage, isPartial = false) => {
        if (typeof nextPage !== 'object' || nextPage === null || !nextPage.component) {
            return inertiaPage;
        }
        if (isPartial && typeof inertiaPage === 'object' && inertiaPage !== null && inertiaPage.component === nextPage.component) {
            return inertiaPage = { ...nextPage, props: { ...inertiaPage.props, ...nextPage.props } };
        }
        return inertiaPage = nextPage;
    }

    const renderJson = (page, isPartial = false) => {
        const newPage = mergePage(page, isPartial);
        if (typeof newPage !== 'object' || newPage === null) return;
        const value = JSON.stringify(newPage, null, '\t');
        editor.setValue(value, -1);
        editor.getSession().foldAll(1); // Fold all JSON by default
        handleZiggy(newPage);
    }

    const sendJson = () => {
        chrome.devtools.inspectedWindow.eval(`dispatchEvent(new PopStateEvent("popstate", {state: ${editor.getValue()}}))`);
    }

    editor.commands.addCommand({
        name: "Send",
        exec: sendJson,
        bindKey: { mac: "cmd-return", win: "ctrl-return" }
    });

    document.querySelector('#send').addEventListener('click', sendJson);

    // --- Communication & Event Handling ---
    const port = chrome.runtime.connect({ name: `panel-${chrome.devtools.inspectedWindow.tabId}` });
    port.onMessage.addListener(message => {
        if (message.type === 'INERTIA_SUCCESS') renderJson(message.page);
    });

    chrome.tabs.sendMessage(chrome.devtools.inspectedWindow.tabId, { type: 'GET_INERTIA_PAGE' }, page => {
        if (page) renderJson(page);
        else editor.setValue(`/* This page doesn’t seem to be using Inertia.js */`);
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
            if (button.dataset.tab === 'props') editor.resize();
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


