!function(){function t(t){const e=window.location.href;document.querySelector("#app").textContent=t?e.includes("#")?e.replace(/#.*/,t):e+t:window.location.href}document.body.addEventListener("click",(e=>{e.target.matches("a")&&(e.preventDefault(),history.pushState(null,"",e.target.href),t())})),t()}();