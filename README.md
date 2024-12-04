# On-device Video Subtitle Translation with Gemini Nano

This sample showcases how to use the experimental Translator API in Chrome through [ai-video-subtitle-translator](https://www.npmjs.com/package/ai-video-subtitle-translator) package to get real-time video subtitle translations on any* webpage that plays video. 

*any webpage = any page that uses TextTracks on HtmlVideoElement.

## Overview

This extension appends a green sticky HTML DIV to the parent container of the video element to render the translated subtitle.
This is a proof-of-concept implementation, really rusty. 

## Running this extension

1. Clone this repository
1. Run `npm install` in this folder to install all dependencies.
1. Run `npm run build` to build the extension.
1. Load the newly created `dist` directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).
1. Click the extension icon to open the summary side panel.
1. Open any web page, the page's content summary will automatically be displayed in the side panel.

## Creating your own extension

If you use this sample as the foundation for your own extension, be sure to update the `"trial_tokens"` field [with your own origin trial token](https://developer.chrome.com/docs/web-platform/origin-trials#extensions) and to remove the `"key"` field in `manifest.json`.
