function redirect(newTab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentTab = tabs[0];

      if (currentTab && currentTab.url && currentTab.url.startsWith('http')) {
          try {
              chrome.storage.sync.get('pipedHostname', function(data) {
                  const hostname = data.pipedHostname || 'piped.kavin.rocks';
                  const urlObj = new URL(currentTab.url);
                  if (urlObj.hostname === "www.youtube.com") {
                      urlObj.hostname = hostname;
                      if (newTab) {
                          chrome.tabs.create({ url: urlObj.href });
                      } else {
                          chrome.tabs.update(currentTab.id, { url: urlObj.href });
                      }
                  } else {
                      alert("This is not a YouTube URL");
                  }
              });
          } catch (e) {
              console.error(e);
              alert("Invalid URL");
          }
      } else {
          alert("Not a valid URL");
      }
  });
}

document.getElementById('openInThisTab').addEventListener('click', () => redirect(false));
document.getElementById('openInNewTab').addEventListener('click', () => redirect(true));
