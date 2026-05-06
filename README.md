# Piped Redirect Extension

Piped Redirect redirects supported YouTube video and Shorts links to a configurable [Piped](https://github.com/TeamPiped/Piped) instance.

You can redirect links in three ways:

- Automatically when opening supported YouTube videos or Shorts
- From the extension popup
- From the right-click context menu on YouTube links

This repository contains builds for Chromium-based browsers and Firefox.

The idea came from wanting to keep using the YouTube recommendation algorithm while opening videos through a Piped instance.

## Install

### Chrome / Chromium / Opera

> Store listing coming soon.

[Install from Chrome Web Store](https://chrome.google.com/webstore/detail/REPLACE_WITH_EXTENSION_ID)

Until the Chrome Web Store version is available, you can install a release build manually:

1. Go to the [Releases](../../releases) page.
2. Download the latest Chrome build.
3. Open `chrome://extensions/`.
4. Enable **Developer mode**.
5. Drag and drop the extension package into the browser window, or use **Load unpacked** for local development builds.

### Firefox

> Add-on listing coming soon.

[Install from Firefox Add-ons](https://addons.mozilla.org/firefox/addon/REPLACE_WITH_ADDON_SLUG)

Firefox Release and Firefox Beta do **not** allow permanent installation of unsigned extensions. Firefox add-ons must be signed by Mozilla before they can be installed permanently in normal Firefox versions. Signing happens through addons.mozilla.org, either for listed AMO distribution or unlisted self-distribution. Temporary installation through `about:debugging` is still possible for development. See Mozilla’s signing and distribution documentation for details.  
Sources: [Mozilla Extension Workshop — Signing and distribution](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/), [MozillaWiki — Extension Signing](https://wiki.mozilla.org/Add-ons/Extension_Signing)

After installing the signed Firefox add-on:

1. Open `www.youtube.com`.
2. Click the extension icon or open the extension permissions menu.
3. Allow the extension to run on YouTube if Firefox asks for site permission.
4. Automatic redirection will only work after the extension has permission to access YouTube pages.

## Temporary Development Installation

Use this when testing local builds from this repository.

### Chrome / Chromium / Opera

1. Clone or download this repository.
2. Build the extension.
3. Open `chrome://extensions/`.
4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the built Chrome folder, for example:

    ```txt
    build/chrome
    ```

Do not select only `src/chrome`, because the built extension also needs the shared `common` files.

### Firefox

1. Clone or download this repository.
2. Build the extension.
3. Open `about:debugging#/runtime/this-firefox`.
4. Click **Load Temporary Add-on...**.
5. Select:

   ```txt
   build/firefox/manifest.json
   ```

Temporary Firefox add-ons are removed when Firefox is restarted. For permanent installation in normal Firefox, the extension must be signed by Mozilla.

## Features

* Redirect supported YouTube videos to a Piped instance.
* Redirect supported YouTube Shorts to a Piped instance.
* Open the current YouTube video in Piped from the extension popup.
* Open the current YouTube video in the same tab or a new tab.
* Right-click a supported YouTube link and open it in Piped.
* Configure your preferred Piped hostname.
* Enable or disable automatic redirection.
* Supports common YouTube hosts such as:

  * `www.youtube.com`
  * `youtube.com`
  * `m.youtube.com`
  * `music.youtube.com`
  * `youtu.be`

## Supported Redirects

The extension redirects video and Shorts URLs only.

Examples:

```txt
https://www.youtube.com/watch?v=VIDEO_ID
https://youtube.com/watch?v=VIDEO_ID
https://m.youtube.com/watch?v=VIDEO_ID
https://music.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID
https://www.youtube.com/shorts/SHORT_ID
```

Unsupported pages such as the YouTube homepage, search results, channels, and playlists are not redirected automatically.

## Configuration

1. Click the extension icon in the toolbar.

2. Click the settings icon.

3. Enter your preferred Piped hostname.

## How to build

1. Install node and npm
2. Execute `npm install` to install packages
3. Execute `node build.js` to produce chrome and firefox extensions as zip, then import

## TODOs

   Example:

   ```txt
   piped.video
   ```

4. Enable or disable automatic redirection.

5. Click **Save**.

The default Piped instance is:

```txt
piped.video
```

## Build

Install dependencies:

```bash
npm install
```

Build the Chrome and Firefox packages:

```bash
node build.js
```

The build output should look like this:

```txt
build/
  chrome/
  chrome.zip
  firefox/
  firefox.zip
```

Use the unpacked folders for local testing:

```txt
build/chrome
build/firefox
```

Use the ZIP files for store submission.

## Publishing

### Chrome Web Store

The Chrome Web Store expects a ZIP package with `manifest.json` at the root of the archive. Upload the Chrome ZIP through the Chrome Developer Dashboard. Google’s publishing documentation describes the upload flow as choosing the ZIP file, uploading it, and then completing the store listing and privacy information.
Source: [Chrome for Developers — Publish in the Chrome Web Store](https://developer.chrome.com/docs/webstore/publish)

Planned listing:

```md
[Chrome Web Store](https://chrome.google.com/webstore/detail/REPLACE_WITH_EXTENSION_ID)
```

### Firefox Add-ons

Firefox add-ons must be submitted through addons.mozilla.org for signing. This is required for permanent installation in Firefox Release and Beta, even if the add-on is distributed outside AMO as an unlisted add-on.
Source: [Mozilla Extension Workshop — Signing and distribution](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

Planned listing:

```md
[Firefox Add-ons](https://addons.mozilla.org/firefox/addon/REPLACE_WITH_ADDON_SLUG)
```

## Privacy

Piped Redirect stores only the following settings using browser storage:

* Piped hostname
* Automatic redirection preference

The extension does not collect, sell, transmit, or share personal data.

The extension reads the active tab URL only when needed to determine whether the current page is a supported YouTube video or Shorts URL.

## Permissions

The extension uses the following permissions:

| Permission     | Reason                                                               |
| -------------- | -------------------------------------------------------------------- |
| `storage`      | Saves the selected Piped hostname and automatic redirect preference. |
| `activeTab`    | Reads the current tab URL when using the popup redirect buttons.     |
| `contextMenus` | Adds the right-click “Open link in Piped” menu item.                 |

## License

This project is open source and available under the [MIT License](LICENSE).