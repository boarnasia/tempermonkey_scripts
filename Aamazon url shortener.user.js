// ==UserScript==
// @name         Aamazon url shortener
// @namespace    http://yamashita109.pw/
// @version      0.1
// @description  It makes an amazon url shot as that is too long to put it in chat.
// @author       Boarnasia
// @match        http*://www.amazon.com/*
// @match        http*://www.amazon.co.jp/*
// @match        http*://www.amazon.co.uk/*
// @match        http*://www.amazon.de/*
// @match        http*://www.amazon.fr/*
// @match        http*://www.amazon.it/*
// @match        http*://www.amazon.ca/*
// @match        http*://www.amazon.es/*
// @match        http*://www.amazon.cn/*
// @match        http*://www.amazon.in/*
// @require      https://code.jquery.com/jquery-3.2.1.slim.min.js
// ==/UserScript==

$(function() {
    'use strict';

    var matches = location.href.match(/^(https?:\/\/[^\/]+).*(\/dp\/[^\/]+\/|\/gp\/product\/[^\/]+\/).*/);
    if (matches) {
        $('#productTitle').prepend(`<a href="${matches[1]}${matches[2]}">[Short Link]</a>`);
    }
});