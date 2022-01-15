// ==UserScript==
// @name         Stickorz
// @namespace    https://stickorz.studio/
// @version      0.2
// @description  Vite, mon sticker
// @author       Haz
// @match        https://www.jeuxvideo.com/*
// @match        https://m.jeuxvideo.com/*
// @icon         https://stickorz.studio/favicon.png
// @downloadURL  https://github.com/hazae41/stickorz-gm/raw/master/dist/stickorz.user.js
// @updateURL    https://github.com/hazae41/stickorz-gm/raw/master/dist/stickorz.user.js
// @grant        none
// ==/UserScript==

const style = document.createElement('style');
style.type = "text/css";
style.textContent = `TEMPLATE_STYLE`;
document.head.appendChild(style);

