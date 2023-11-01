chrome.storage.sync.get(['pipedHostname', 'autoRedirect'], function (data) {
  const hostname = data.pipedHostname || 'piped.kavin.rocks'
  const autoRedirect =
    data.autoRedirect !== undefined ? data.autoRedirect : true
  const location = window.location
  if (
    autoRedirect &&
    location.hostname === 'www.youtube.com' &&
    (location.pathname === '/watch' || location.pathname.startsWith('/shorts'))
  ) {
    const url = location.href.replace('www.youtube.com', hostname)
    window.location.replace(url)
  }
})
