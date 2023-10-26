browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "openInPiped",
    title: "Open link in Piped",
    contexts: ["link"],
  });
});

browser.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "openInPiped") {
    let data = await browser.storage.sync.get('pipedHostname');
    const hostname = data.pipedHostname || 'piped.kavin.rocks';
    const url = new URL(info.linkUrl);
    if (url.hostname === "www.youtube.com") {
        url.hostname = hostname;
        browser.tabs.create({ url: url.href });
    }
  }
});
