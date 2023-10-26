(async function() {
  let data = await browser.storage.sync.get(['pipedHostname', 'autoRedirect']);
  const hostname = data.pipedHostname || 'piped.kavin.rocks';
  const autoRedirect = data.autoRedirect !== undefined ? data.autoRedirect : true;
  if (autoRedirect && window.location.hostname === 'www.youtube.com' && window.location.pathname === '/watch') {
      const newUrl = window.location.href.replace('www.youtube.com', hostname);
      window.location.replace(newUrl);
  }
})();
