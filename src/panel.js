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

    const jsonContainer = document.querySelector('#json');
    ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl);
    const editor = ace.edit(jsonContainer);
    editor.getSession().setMode("ace/mode/json");
    editor.setTheme("ace/theme/dracula");
    editor.getSession().setTabSize(tabSize);

    let inertiaPage = {};
    const mergePage = (nextPage, isPartial = false) => {
        if (isPartial && inertiaPage.component === nextPage.component) {
            return inertiaPage = {
                ...nextPage,
                props: { ...inertiaPage.props, ...nextPage.props },
            }
        }
        return inertiaPage = nextPage;
    }

    const renderJson = (page, isPartial = false) => {
        const newPage = mergePage(page, isPartial);
        const value = JSON.stringify(newPage, null, '\t')
        editor.setValue(value)
        editor.getSession().foldToLevel(defaultOpenDepth);
    }

    const sendJson = () => {
        chrome.devtools.inspectedWindow.eval(`dispatchEvent(new PopStateEvent("popstate", {state: ${editor.getValue()}}))`)
    }

    editor.commands.addCommand({
        name: "Send",
        exec: sendJson,
        bindKey: { mac: "cmd-return", win: "ctrl-return" }
    })

    document.querySelector('#send').addEventListener('click', sendJson)

    const port = chrome.runtime.connect({ name: `panel-${chrome.devtools.inspectedWindow.tabId}` });

    port.onMessage.addListener((message) => {
        if (message.type === 'INERTIA_SUCCESS') {
            renderJson(message.page);
        }
    });

    // on panel open get current page data
    chrome.tabs.sendMessage(chrome.devtools.inspectedWindow.tabId, { type: 'GET_INERTIA_PAGE' }, (page) => {
        if (page) {
            renderJson(page);
        } else {
            editor.setValue(`/* This page doesn’t seem to be using Inertia.js */`)
        }
    });

    // listen for changes
    chrome.devtools.network.onRequestFinished.addListener(
        (request) => {
            if (request.response.headers.find((header) => header.name.toLowerCase() === 'x-inertia')) {
                const isPartial = request.request.headers.some(
                    (header) => header.name.toLowerCase() === 'x-inertia-partial-data'
                );
                request.getContent((content) => renderJson(JSON.parse(content), isPartial));
                return
            }
        }
    );
});


