(() => {
  // src/options.js
  document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get({ defaultOpenDepth: 2, theme: "dracula" }, (items) => {
      document.querySelector('[name="depth"]').value = items.defaultOpenDepth;
      document.querySelector('[name="theme"]').value = items.theme;
    });
  });
  var timeoutId = null;
  function showFeedback(message) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const status = document.querySelector("#feedback");
    status.textContent = message;
    timeoutId = setTimeout(() => {
      status.textContent = "";
    }, 1500);
  }
  document.querySelector('[name="depth"]').addEventListener("change", (event) => {
    chrome.storage.sync.set({ defaultOpenDepth: event.target.value }, () => {
      showFeedback("Options saved.");
    });
  });
  document.querySelector('[name="theme"]').addEventListener("change", (event) => {
    chrome.storage.sync.set({ theme: event.target.value }, () => {
      showFeedback("Theme saved.");
    });
  });
})();
