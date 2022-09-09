//receive message from background.js listener


//receive message from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "NEW") {
        var url = request.url;
        console.log(url);
    }
});


chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;

    if (type === "NEW") {
        currentVideo = videoId;
        newVideoLoaded();
    }
});
