
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_INERTIA_PAGE') {
    const el = document.querySelector('[data-page]');
    if (el && el.dataset.page) {
      sendResponse(JSON.parse(el.dataset.page));
    }
  }
});

document.addEventListener('inertia:success', (event) => {
  chrome.runtime.sendMessage({
    type: 'INERTIA_SUCCESS',
    page: event.detail.page,
  });
});
