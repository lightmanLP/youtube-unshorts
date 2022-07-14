// ==UserScript==
// @name         YouTube unshorts
// @description  Force youtube video viewer instead of shorts
// @version      1.0
// @author       lightmanLP

// @license      MIT
// @homepageURL  https://github.com/lightmanLP/youtube-unshorts
// @supportURL   https://github.com/lightmanLP/youtube-unshorts/issues
// @downloadURL  https://raw.githubusercontent.com/lightmanLP/youtube-unshorts/master/src/main.user.js
// @updateURL    https://raw.githubusercontent.com/lightmanLP/youtube-unshorts/master/src/main.user.js

// @match        https://*.youtube.com/*
// @run-at       document-start
// @grant        window.onurlchange
// ==/UserScript==

function redirectHandler() {
    let match = location.href.match(/^https:\/\/(?:www.)?youtube.com\/shorts\/(.+)$/);
    if (match !== null) {
        location.replace(`${window.location.origin}/watch?v=${match[1]}`);
    }
}

window.addEventListener("load", redirectHandler);
window.addEventListener("urlchange", redirectHandler);