# Piped Redirect Extension

The Piped Redirect extension allows users to redirect YouTube links to a Piped instance either through a context menu option, a popup button, or automatically based on their preferences. This project contains the implementation for both Chrome (also compatible with Opera) and Firefox.

## Installation (Permanent)

To install this extension on your browser, follow these steps:

### Chrome/Opera

1. Goto Releases and download the newest version.
2. Open the Chrome/Opera browser and navigate to `chrome://extensions/`.
3. Click on the gear icon and select `Install Add-On From File...` and select the `.xpi` file.

### Firefox

1. Goto Releases and download the newest version.
2. Open Firefox and navigate to `about:addons`.
3. Click `Load Temporary Add-on...` and select the `manifest.json` within the `firefox` folder from the extracted project files.

## Installation (Temporary Only)

To install this extension on your browser, follow these steps:

### Chrome/Opera

1. Download the project files and extract the zip file.
2. Open the Chrome/Opera browser and navigate to `chrome://extensions/`.
3. Enable `Developer mode` by toggling the switch on the top right corner.
4. Click `Load unpacked` and select the `chrome` folder from the extracted project files.

### Firefox

1. Download the project files and extract the zip file.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click `Load Temporary Add-on...` and select the `manifest.json` within the `firefox` folder from the extracted project files.

## Features

- Right-click context menu option to open YouTube links in a Piped instance.
- Browser action popup button to redirect the current YouTube video page to a Piped instance.
- Automatic redirection of YouTube video pages if opend in new tab to a Piped instance based on user preference.
- Options page to configure the Piped hostname and enable/disable automatic redirection.

## Configuration

To configure the extension:

1. Click on the extension icon in the toolbar.
2. Click on `Options`.
3. Enter the desired Piped hostname (default is `video.quantentoast.de`).
4. Toggle the `Enable Automatic Redirection` checkbox to enable or disable automatic redirection of YouTube video pages.
5. Click `Save` to save your preferences.

## TODOs

- When opening a YouTube video in the same window, the page does not automatically get redirected.

## License

This project is open-source and available under the [MIT License](LICENSE).
