browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: 'openInPiped',
    title: 'Open link in Piped',
    contexts: ['link'],
  })
})

browser.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId !== 'openInPiped' || !info.linkUrl) return

  try {
    const { pipedHostname } = await browser.storage.sync.get('pipedHostname')
    const hostname = pipedHostname || DEFAULT_PIPED_HOSTNAME
    const pipedUrl = toPipedUrl(info.linkUrl, hostname)

    if (pipedUrl) {
      await browser.tabs.create({ url: pipedUrl })
    }
  } catch (error) {
    console.error(error)
  }
})