const ports = {};

chrome.runtime.onConnect.addListener((port) => {
  // Only listen for connections from content scripts
  if (!port.sender || !port.sender.tab || !port.sender.tab.id) {
    return;
  }

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
