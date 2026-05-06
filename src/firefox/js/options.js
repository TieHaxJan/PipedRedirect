document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('optionsForm')
  const hostnameInput = document.getElementById('hostname')
  const autoRedirectInput = document.getElementById('autoRedirect')
  const status = document.getElementById('status')

  function setStatus(message, type = '') {
    status.textContent = message
    status.className = `status ${type}`.trim()
  }

  try {
    const data = await browser.storage.sync.get([
      'pipedHostname',
      'autoRedirect',
    ])

    hostnameInput.value = data.pipedHostname || DEFAULT_PIPED_HOSTNAME
    autoRedirectInput.checked = data.autoRedirect ?? true
  } catch (error) {
    console.error(error)
    setStatus('Could not load options', 'error')
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    try {
      const pipedHostname = normalizeHostname(hostnameInput.value)
      const autoRedirect = autoRedirectInput.checked

      await browser.storage.sync.set({
        pipedHostname,
        autoRedirect,
      })

      hostnameInput.value = pipedHostname
      setStatus('Options saved', 'success')
    } catch (error) {
      console.error(error)
      setStatus(error.message || 'Could not save options', 'error')
    }
  })
})