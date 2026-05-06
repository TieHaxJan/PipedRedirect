importScripts('../common/js/url-utils.js')

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'openInPiped',
    title: 'Open link in Piped',
    contexts: ['link'],
  })
})

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== 'openInPiped' || !info.linkUrl) return

  chrome.storage.sync.get('pipedHostname', ({ pipedHostname }) => {
    const hostname = pipedHostname || DEFAULT_PIPED_HOSTNAME
    const pipedUrl = toPipedUrl(info.linkUrl, hostname)

    if (pipedUrl) {
      chrome.tabs.create({ url: pipedUrl })
    }
  })
})