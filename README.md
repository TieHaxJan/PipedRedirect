# Piped Redirect Extension

The Piped Redirect extension allows users to redirect YouTube links to a [Piped](https://github.com/TeamPiped/Piped) instance either through a context menu option, a popup button, or automatically based on their preferences. This project contains the implementation for both Chrome (also compatible with Opera) and Firefox.
The idea came, because I wanted to enjoy the YouTube recommendation algorithm but bypass the new AdBlock Warning.

# INFORMATION

On newer chrome versions, it is no longer possible to install `.crx` files, to install please rename the `.crx` file into an `.zip` file extract and load the file as unpacked.
Maybe I will come around to publishing on the web store in the future.

## Installation (Permanent)

To install this extension on your browser, follow these steps:

### Chrome/Opera

1. Goto Releases and download the newest version.
2. Open the Chrome/Opera browser and navigate to `chrome://extensions/`.
3. Drag and Drop the `.crx` file into the browser window.
4. Click on Install.


### Firefox

1. Goto Releases and download the newest version.
2. Open Firefox and navigate to `about:addons`.
3. Click on the gear icon and select `Install Add-On From File...` and select the `.xpi` file.
4. Naviagte to `www.youtube.com`, click on `Manage Extension` and `Always allow on youtube.com`. Otherwise the automatic redirection does not work.

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
3. Enter the desired Piped hostname (default is `piped.kavin.rocks`).
4. Toggle the `Enable Automatic Redirection` checkbox to enable or disable automatic redirection of YouTube video pages when opening a new tab.
5. Click `Save` to save your preferences.

## How to build

1. Install node and npm
2. Execute `npm install` to install packages
3. Execute `node build.js` to produce chrome and firefox extensions as zip, then import

## TODOs

- When opening a YouTube video in the same window, the page does not automatically get redirected.

## License

This project is open-source and available under the [MIT License](LICENSE).
