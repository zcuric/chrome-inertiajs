(() => {
  // src/background.js
  var ports = {};
  chrome.runtime.onConnect.addListener((port) => {
    ports[port.sender.tab.id] = port;
    port.onDisconnect.addListener(() => {
      delete ports[port.sender.tab.id];
    });
  });
  chrome.runtime.onMessage.addListener((request, sender) => {
    if (sender.tab && sender.tab.id in ports) {
      ports[sender.tab.id].postMessage(request);
    }
  });
})();
