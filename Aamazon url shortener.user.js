// ==UserScript==
// @name         Aamazon url shortener
// @namespace    http://yamashita109.pw/
// @version      0.1
// @description  It makes an amazon url shot as that is too long to put it in chat.
// @author       Boarnasia
// @match        https://www.amazon.co.jp/*dp/*
// @require  https://code.jquery.com/jquery-3.2.1.slim.min.js
// ==/UserScript==

$(function() {
    'use strict';

    var matches = location.href.match(/^(https?:\/\/[^\/]+).*(\/dp\/[^\/]+\/).*/);
    if (matches) {
        $('#productTitle').prepend(`<a href="${matches[1]}${matches[2]}">[Short Link]</a>`);
    }
});