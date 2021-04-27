// ==UserScript==
// @name           H28
// @namespace    https://www.sehuatang.net/forum-103-1.html
// @description  直接把帖子列表转成图片浏览,点击图片可以进入帖子.
// @author       123
// @include        https://www.sehuatang.net/forum-*
// @include        https://www.sehuatang.net/forum.php?mod=forumdisplay&fid=103&page=*
// @grant          GM_xmlhttpRequest
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @version 3
// ==/UserScript==
$(document).ready(function () {
  $('.icn').each(function () {
    var urls = "https://www.sehuatang.net/";
    urls += $(this).find("a").attr("href");
    var imgg = $(this).find("img");
    var icn_td = $(this);
    GM_xmlhttpRequest({
      method: 'GET',
      url: urls,
      headers: {
        'User-agent': 'Mozilla/5.0  Chrome/70. Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
      },
      onload: function (result) {
        var doc = result.responseText;
        var img01 = $(doc).find(".zoom").attr("file");
        $(imgg).attr("src", img01);
        var dvi01 = $(doc).find(".blockcode");
        var dvi02 = $(doc).find("#thread_subject");
        //console.log($(dvi02).html());
        var magnet = $(dvi01).find("li").text();
        //console.log(magnet);
        $(icn_td).css("width", "100%")
        $(icn_td).append("<p style='margin-top: 20px;font-size: 2em;'>" + $(dvi02).html() + "</p><br/>");
        $(icn_td).append("<p style='margin-top: 20px;font-size: 2em;'>" + magnet + "</p><br/>");
      }
    });
  });
  $('.common').each(function () {
    $(this).remove();
  });
  $('.by').each(function () {
    $(this).remove();
  });
  $('.num').each(function () {
    $(this).remove();
  });
});