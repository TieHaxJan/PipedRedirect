document.getElementById('save').addEventListener('click', async function () {
  const hostname = document.getElementById('hostname').value
  const autoRedirect = document.getElementById('autoRedirect').checked
  await browser.storage.sync.set({
    pipedHostname: hostname,
    autoRedirect: autoRedirect,
  })
  alert('Options saved')
})

document.addEventListener('DOMContentLoaded', async function () {
  let data = await browser.storage.sync.get(['pipedHostname', 'autoRedirect'])
  document.getElementById('hostname').value =
    data.pipedHostname || 'piped.kavin.rocks'
  document.getElementById('autoRedirect').checked =
    data.autoRedirect !== undefined ? data.autoRedirect : true
})
