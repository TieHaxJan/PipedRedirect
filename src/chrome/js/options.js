document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('optionsForm')
  const hostnameInput = document.getElementById('hostname')
  const autoRedirectInput = document.getElementById('autoRedirect')
  const status = document.getElementById('status')

  let statusTimeoutId = null

  function setStatus(message, type = '') {
    if (statusTimeoutId) {
      clearTimeout(statusTimeoutId)
    }

    status.textContent = message
    status.className = `status ${type}`.trim()

    statusTimeoutId = setTimeout(() => {
      status.textContent = ''
      status.className = 'status'
    }, 3000)
  }

  chrome.storage.sync.get(['pipedHostname', 'autoRedirect'], (data) => {
    if (chrome.runtime.lastError) {
      setStatus(chrome.runtime.lastError.message, 'error')
      return
    }

    hostnameInput.value = data.pipedHostname || DEFAULT_PIPED_HOSTNAME
    autoRedirectInput.checked = data.autoRedirect ?? true
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    try {
      const pipedHostname = normalizeHostname(hostnameInput.value)
      const autoRedirect = autoRedirectInput.checked

      chrome.storage.sync.set({ pipedHostname, autoRedirect }, () => {
        if (chrome.runtime.lastError) {
          setStatus(chrome.runtime.lastError.message, 'error')
          return
        }

        hostnameInput.value = pipedHostname
        setStatus('Options saved', 'success')
      })
    } catch (error) {
      setStatus(error.message || 'Could not save options', 'error')
    }
  })
})