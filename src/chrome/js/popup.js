document
  .getElementById("redirectButton")
  .addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var currentTab = tabs[0];
      if (currentTab && currentTab.url && currentTab.url.startsWith("http")) {
        try {
          chrome.storage.sync.get("pipedHostname", function (data) {
            const hostname = data.pipedHostname || "piped.kavin.rocks"; // Use a default value if none is set
            var url = new URL(currentTab.url);
            if (url.hostname === "www.youtube.com") {
              url.hostname = hostname;
              chrome.tabs.update(currentTab.id, { url: url.href }); // Update the active tab's URL
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
  });
