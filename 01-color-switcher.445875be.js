!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,timerID=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(timerID)}))}();
//# sourceMappingURL=01-color-switcher.445875be.js.map