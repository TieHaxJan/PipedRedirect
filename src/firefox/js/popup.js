async function redirect(newTab) {
  let tabs = await browser.tabs.query({ active: true, currentWindow: true })
  const currentTab = tabs[0]

  if (currentTab && currentTab.url && currentTab.url.startsWith('http')) {
    try {
      let data = await browser.storage.sync.get('pipedHostname')
      const hostname = data.pipedHostname || 'piped.kavin.rocks'
      const urlObj = new URL(currentTab.url)
      if (urlObj.hostname === 'www.youtube.com') {
        urlObj.hostname = hostname
        if (newTab) {
          browser.tabs.create({ url: urlObj.href })
        } else {
          browser.tabs.update(currentTab.id, { url: urlObj.href })
        }
      } else {
        alert('This is not a YouTube URL')
      }
    } catch (e) {
      console.error(e)
      alert('Invalid URL')
    }
  } else {
    alert('Not a valid URL')
  }
}

document
  .getElementById('openInThisTab')
  .addEventListener('click', () => redirect(false))
document
  .getElementById('openInNewTab')
  .addEventListener('click', () => redirect(true))
