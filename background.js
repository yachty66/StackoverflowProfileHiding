//listener for tabs 
/*chrome.tabs.onUpdated.addListener((tabId, tab) => {
  //if url from curr tab that is updated is stackoverflow
  if (tab.url && tab.url.includes("stackoverflow.com")) {
    //tab.url.split("?")[1] is splitting the url by the ? and taking the second part of the array
    const queryParameters = tab.url.split;
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters,
    });
  }
});*/



/*let state = false;

//function sets state in local storage true if tab with url stackoverflow is active
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url && tab.url.includes("stackoverflow.com")) {
      chrome.storage.sync.set({ state: true });
    }
    else {
      chrome.storage.sync.set({ state: false });
    }
  })});*/

chrome.tabs.onUpdated.addListener((tabId, tab) => {
  //if url from curr tab that is updated is stackoverflow
  if (tab.url && tab.url.includes("stackoverflow.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['contentScript.js']
    })
  }
});



/*chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['contentScript.js']
  });
});*/