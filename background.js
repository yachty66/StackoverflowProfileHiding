//add icon
//add to google chrome extension store
//readme


function changeBackgroundColor() {
  [].forEach.call(document.querySelectorAll('.user-info '), function (el) {
    el.style.visibility = 'hidden';
  });
}

chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url) {
    if (tab.url.includes("stackoverflow.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: changeBackgroundColor,
      })
    }
  }
});
