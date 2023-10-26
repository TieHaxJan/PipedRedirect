chrome.storage.sync.get(["pipedHostname", "autoRedirect"], function (data) {
  const hostname = data.pipedHostname || "video.quantentoast.de";
  const autoRedirect =
    data.autoRedirect !== undefined ? data.autoRedirect : true;
  if (
    autoRedirect &&
    window.location.hostname === "www.youtube.com" &&
    window.location.pathname === "/watch"
  ) {
    const newUrl = window.location.href.replace("www.youtube.com", hostname);
    window.location.replace(newUrl);
  }
});
