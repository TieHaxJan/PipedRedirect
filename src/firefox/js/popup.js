function setStatus(message, type = '') {
  const status = document.getElementById('status')

  if (!status) return

  status.textContent = message
  status.className = `status ${type}`.trim()
}

async function redirect(newTab) {
  try {
    const tabs = await browser.tabs.query({
      active: true,
      currentWindow: true,
    })

    const currentTab = tabs[0]

    if (!currentTab?.id || !currentTab?.url || !currentTab.url.startsWith('http')) {
      setStatus('Not a valid URL', 'error')
      return
    }

    const data = await browser.storage.sync.get('pipedHostname')
    const hostname = data.pipedHostname || DEFAULT_PIPED_HOSTNAME
    const pipedUrl = toPipedUrl(currentTab.url, hostname)

    if (!pipedUrl) {
      setStatus('Not a supported YouTube video or Shorts URL', 'error')
      return
    }

    if (newTab) {
      await browser.tabs.create({ url: pipedUrl })
      setStatus('Opened in new tab', 'success')
    } else {
      await browser.tabs.update(currentTab.id, { url: pipedUrl })
      setStatus('Opened in this tab', 'success')
    }
  } catch (error) {
    console.error(error)
    setStatus('Could not open URL', 'error')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('openInThisTab')
    .addEventListener('click', () => redirect(false))

  document
    .getElementById('openInNewTab')
    .addEventListener('click', () => redirect(true))

  document
    .getElementById('openOptions')
    ?.addEventListener('click', () => {
      browser.runtime.openOptionsPage()
    })
})