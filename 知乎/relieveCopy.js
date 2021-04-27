// ==UserScript==
// @name         RelieveCopy
// @namespace    
// @version      0.1
// @description  复制知乎问题文本
// @author       gxr
// @match        https://www.zhihu.com/question/*
// @grant        none
// ==/UserScript==
(function () {
  'use strict';
  console.log('RelieveCopy: copy事件已被阻止');
  var firstChild = document.firstElementChild;
  firstChild.addEventListener('copy', function (e) {
    e.stopPropagation();
    return false;
  })
})();