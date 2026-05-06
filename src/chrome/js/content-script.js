chrome.storage.sync.get(['pipedHostname', 'autoRedirect'], (data) => {
  const hostname = data.pipedHostname || DEFAULT_PIPED_HOSTNAME
  const autoRedirect = data.autoRedirect ?? true

  if (!autoRedirect) return

  const pipedUrl = toPipedUrl(window.location.href, hostname)

  if (pipedUrl && pipedUrl !== window.location.href) {
    window.location.replace(pipedUrl)
  }
})