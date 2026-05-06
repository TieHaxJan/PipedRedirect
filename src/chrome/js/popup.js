function redirect(newTab) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0]

    if (!currentTab?.id || !currentTab?.url || !currentTab.url.startsWith('http')) {
      setStatus('Not a valid URL')
      return
    }

    chrome.storage.sync.get('pipedHostname', (data) => {
      try {
        const hostname = data.pipedHostname || DEFAULT_PIPED_HOSTNAME
        const pipedUrl = toPipedUrl(currentTab.url, hostname)

        if (!pipedUrl) {
          setStatus('This is not a supported YouTube video or Shorts URL')
          return
        }

        if (newTab) {
          chrome.tabs.create({ url: pipedUrl })
        } else {
          chrome.tabs.update(currentTab.id, { url: pipedUrl })
        }
      } catch (error) {
        console.error(error)
        setStatus('Invalid URL')
      }
    })
  })
}

function setStatus(message) {
  const status = document.getElementById('status')
  if (status) status.textContent = message
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('openInThisTab')
    .addEventListener('click', () => redirect(false))

  document
    .getElementById('openInNewTab')
    .addEventListener('click', () => redirect(true))

  document.getElementById('openOptions').addEventListener('click', () => {
    chrome.runtime.openOptionsPage()
  })
})