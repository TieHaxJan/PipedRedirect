chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openInPiped",
    title: "Open link in Piped",
    contexts: ["link"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openInPiped") {
    chrome.storage.sync.get("pipedHostname", function (data) {
      const hostname = data.pipedHostname || "video.quantentoast.de";
      const url = new URL(info.linkUrl);
      if (url.hostname === "www.youtube.com") {
        url.hostname = hostname;
        chrome.tabs.create({ url: url.href });
      }
    });
  }
});
