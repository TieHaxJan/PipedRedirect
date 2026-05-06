const DEFAULT_PIPED_HOSTNAME = 'piped.video'

function isYouTubeHost(hostname) {
    return [
        'youtube.com',
        'www.youtube.com',
        'm.youtube.com',
        'music.youtube.com',
        'youtu.be',
        'www.youtube-nocookie.com',
    ].includes(hostname)
}

function isSupportedYouTubeUrl(url) {
    if (!isYouTubeHost(url.hostname)) return false

    if (url.hostname === 'youtu.be') {
        return url.pathname.length > 1
    }

    return (
        url.pathname === '/watch' ||
        url.pathname.startsWith('/shorts/')
    )
}

function toPipedUrl(inputUrl, pipedHostname) {
    const url = new URL(inputUrl)

    if (!isSupportedYouTubeUrl(url)) {
        return null
    }

    if (url.hostname === 'youtu.be') {
        const videoId = url.pathname.slice(1)
        return `https://${pipedHostname}/watch?v=${encodeURIComponent(videoId)}`
    }

    url.protocol = 'https:'
    url.hostname = pipedHostname
    return url.href
}

function normalizeHostname(input) {
    const trimmed = input.trim()

    if (!trimmed) {
        throw new Error('Hostname is required')
    }

    const withProtocol = trimmed.includes('://') ? trimmed : `https://${trimmed}`
    const url = new URL(withProtocol)

    if (!['http:', 'https:'].includes(url.protocol)) {
        throw new Error('Only http and https are supported')
    }

    if (!url.hostname) {
        throw new Error('Invalid hostname')
    }

    return url.hostname
}