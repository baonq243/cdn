"use strict";!function(){var t=/mobile/i.test(window.navigator.userAgent);fetch("https://v1.hitokoto.cn/?max_length="+(t?10:20)).then(function(t){return t.json()}).then(function(t){window.hitokoto=t.hitokoto;try{document.getElementById("hitokoto").innerText=window.hitokoto}catch(t){}}).catch(function(t){console.error(t)})}();const grt=new Date("03/24/2020 00:00:00"),sitetime=document.getElementById("sitetime");function createtime(){var t=new Date,e=Math.floor((t-grt)/864e5),n=a(t.getHours()-grt.getHours(),"h"),o=a(t.getMinutes()-grt.getMinutes()),i=a(t.getSeconds()-grt.getSeconds());function a(t,e){return t<0&&(t="h"==e?t+24:t+60),t<10?"0"+t:t}sitetime.innerHTML=e+" day "+n+" hour "+o+" minute "+i+" second"}function loadJs(t,e){var n=document.createElement("script");n.defer=!0,n.src=t,"function"==typeof e&&(n.onload=n.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(e(),n.onload=n.onreadystatechange=null)}),document.head.appendChild(n)}setInterval("createtime()",1e3),/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&(window.onload=function(){document.addEventListener("touchstart",function(t){t.touches.length>1&&t.preventDefault()});var t=0;document.addEventListener("touchend",function(e){var n=(new Date).getTime();n-t<=300&&e.preventDefault(),t=n},!1)}),/mobile/i.test(window.navigator.userAgent)||loadJs("https://cdn.jsdelivr.net/gh/heson525/heson-demo@main/click/js/click.js");