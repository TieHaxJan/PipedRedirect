document.getElementById('redirectButton').addEventListener('click', async function() {
    let tabs = await browser.tabs.query({active: true, currentWindow: true});
    var currentTab = tabs[0];
    if (currentTab && currentTab.url && currentTab.url.startsWith('http')) {
        try {
            let data = await browser.storage.sync.get('pipedHostname');
            const hostname = data.pipedHostname || 'piped.kavin.rocks';
            var url = new URL(currentTab.url);
            if (url.hostname === "www.youtube.com") {
                url.hostname = hostname;
                browser.tabs.update(currentTab.id, {url: url.href});
            } else {
                alert("This is not a YouTube URL");
            }
        } catch (e) {
            console.error(e);
            alert("Invalid URL");
        }
    } else {
        alert("Not a valid URL");
    }
});
