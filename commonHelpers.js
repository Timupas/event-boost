(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(e){if(e.ep)return;e.ep=!0;const c=a(e);fetch(e.href,c)}})();const P="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",N=document.querySelector(".events-list"),I=document.getElementById("pagination"),Y=document.querySelector("[data-modal]"),f=document.querySelector(".modal__wrap");document.querySelector("[data-close]");const G=document.body,S=document.querySelector('.header__input[placeholder="Start searching"]'),_=document.querySelector(".country"),$=document.getElementById("countryInput"),h=document.querySelector(".country-list");let x="",b="US",z=0,O=0,w;const B=[{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"United Kingdom",code:"GB"},{name:"France",code:"FR"},{name:"Spain",code:"ES"},{name:"Italy",code:"IT"},{name:"Australia",code:"AU"},{name:"Canada",code:"CA"},{name:"Argentina",code:"AR"},{name:"Austria",code:"AT"},{name:"Belgium",code:"BE"},{name:"Brazil",code:"BR"},{name:"Netherlands",code:"NL"},{name:"Poland",code:"PL"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Ukraine",code:"UA"},{name:"Denmark",code:"DK"},{name:"Finland",code:"FI"},{name:"Norway",code:"NO"},{name:"Portugal",code:"PT"},{name:"Ireland",code:"IE"},{name:"Mexico",code:"MX"},{name:"New Zealand",code:"NZ"},{name:"Czech Republic",code:"CZ"},{name:"Hungary",code:"HU"}];function Q(){const t=B.map(s=>`<li data-code="${s.code}">${s.name}</li>`).join("");h.innerHTML=t}Q();$.addEventListener("click",()=>{_.classList.toggle("open"),h.classList.toggle("open")});h.addEventListener("click",t=>{if(t.target.tagName!=="LI")return;const s=t.target.dataset.code,a=t.target.textContent;$.value=a,b=s,h.classList.remove("open"),_.classList.remove("open"),v(0)});document.addEventListener("click",t=>{t.target.closest(".country")||(h.classList.remove("open"),_.classList.remove("open"))});S.addEventListener("input",()=>{clearTimeout(w),w=setTimeout(()=>{x=S.value.trim(),v(0)},500)});async function v(t=0){var c,o;const s=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${P}&countryCode=${b}&keyword=${x}&size=20&page=${t}`,n=await(await fetch(s)).json(),e=((c=n._embedded)==null?void 0:c.events)||[];if(O=Math.min(((o=n.page)==null?void 0:o.totalPages)||0,29),z=t,e.length===0){Z(),I.innerHTML="";return}K(e),q()}function Z(){N.classList.add("no-events"),N.innerHTML=`
    <div class="zero-matches">
      <img class="zero-matches__img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMTYyIDEzOS4yMWg0Mjh2NDczLjU4aC00Mjh6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTM4My42NSAyNDguNzNjLTczLjgxMi0yNC44ODctMTM1LjAyLTY0Ljc0Mi0xNzUtMTA5LjUyLTEyOC40IDM5Mi42MSA1My40MjYgNDcwLjAzIDUzLjQyNiA0NzAuMDNzMTg2Ljg0IDYzIDMyNy4xOC0zNDEuNjdjLTU4LjkzOCAxMS40MS0xMzEuNzkgNi4wNTA4LTIwNS42LTE4Ljg0NHptLTExMC41OSA3NC44ODNjMTkuMjAzIDYuNDcyNyAzMS4xMDIgMjYuNDQ1IDMyLjc5NyA1MC42NDggMCAwLTE4LjM5NS0yNi0zOC43ODUtMzIuODc1LTIwLjM5MS02Ljg3NS01MC43NzcgMi42NzE5LTUwLjc3NyAyLjY3MTkgMTYuMDA0LTE4LjIzOCAzNy41NjYtMjYuOTI2IDU2Ljc2Ni0yMC40NDV6bTM2Ljg3NSAxNDMuNzFjLTQ4LjA1NS0xNi4yMDctMTE1Ljg5LTQuODM1OS0xMTUuODktNC44MzU5IDMzLjIzLTI5LjY5NSA4MS4wMi00MS4xODQgMTI2LjI3LTI1LjkzIDQ1LjI0NiAxNS4yNjIgNzYuMzA5IDUzLjM0OCA4NC43NzcgOTcuMDk4IDAuMDAzOTA3IDAuMDA3ODEyLTQ3LjA5NC01MC4xMjUtOTUuMTQ4LTY2LjMzMnptMTEwLjM4LTc0LjI1NGMtMjAuMzk4LTYuODc1LTUwLjc3NyAyLjY3MTktNTAuNzc3IDIuNjcxOSAxNi4wMDQtMTguMjM4IDM3LjU3LTI2LjkyMiA1Ni43Ny0yMC40NDUgMTkuMjAzIDYuNDcyNyAzMS4xMDIgMjYuNDQ1IDMyLjc4OSA1MC42NDggMC4wMDc4MTIgMC0xOC4zODMtMjYtMzguNzgxLTMyLjg3NXoiIGZpbGw9IiNkYzU1YzUiLz4KIDwvZz4KPC9zdmc+Cg==" alt="Drama Theatre Of Ancient Greece Comedy Mask - Theatre Masks">
      <p class="zero-matches__text">Sorry. We couldn't find any matches</p>
    </div>
  `}function K(t){N.classList.remove("no-events");const s=t.map(a=>{var r,m,u,M,p,g,C,E;const n=((m=(r=a.images)==null?void 0:r[0])==null?void 0:m.url)||"",e=a.name||"",c=((M=(u=a.dates)==null?void 0:u.start)==null?void 0:M.localDate)||"",o=((g=(p=a._embedded)==null?void 0:p.venues)==null?void 0:g[0])||{},i=o.name||"",l=((C=o.location)==null?void 0:C.latitude)||"",d=((E=o.location)==null?void 0:E.longitude)||"";return`
      <li class="event-card" data-id="${a.id}">
        <img class="event-img" src="${n}" alt="${e}">
        <h3 class="event-title">${e}</h3>
        <p class="event-date">${c}</p>
        <p class="event-place"
           data-lat="${l}"
           data-lng="${d}"
           data-place="${i}">
          ${i}
          <svg class="event-svg" width="7" height="10" viewBox="0 0 7 10">
            <path d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0Z" fill="white"/>
          </svg>
        </p>
      </li>
    `}).join("");N.innerHTML=s,document.querySelectorAll(".event-place").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.lat,e=a.dataset.lng,c=a.dataset.place;f.innerHTML="",Y.classList.remove("is-hidden"),G.style.overflow="hidden",n&&e?f.innerHTML=`
          <h3>${c}</h3>
          <iframe
            width="100%"
            height="400"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${n},${e}">
          </iframe>
        `:f.innerHTML=`
          <h3>${c}</h3>
          <p style="color:#fff; padding:20px;">No map available for this location.</p>
        `})})}function q(){I.innerHTML="";const t=5;let s=Math.max(0,z-2),a=Math.min(O,s+t);a-s<t&&(s=Math.max(0,a-t));for(let n=s;n<a;n++){const e=document.createElement("button");e.className="page-btn",e.textContent=n+1,n===z&&e.classList.add("active"),e.addEventListener("click",()=>v(n)),I.appendChild(e)}}v();const k="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",H=document.querySelector(".events-list"),y=document.getElementById("pagination"),D=document.querySelector("[data-modal]"),R=document.querySelector(".modal__wrap"),V=document.querySelector("[data-close]"),U=document.body;let T=0,L=0;async function j(t=0){var c,o;const s=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${k}&countryCode=US&size=20&page=${t}`,n=await(await fetch(s)).json(),e=((c=n._embedded)==null?void 0:c.events)||[];L=Math.min(((o=n.page)==null?void 0:o.totalPages)||0,29),T=t,W(e),F()}function W(t){const s=t.map(a=>{var n,e,c,o,i,l,d;return`
    <li class="event-card" data-id="${a.id}">
      <img class="event-img" src="${((e=(n=a.images)==null?void 0:n[0])==null?void 0:e.url)||""}" alt="${a.name}">
      <h3 class="event-title">${a.name}</h3>
      <p class="event-date">${((o=(c=a.dates)==null?void 0:c.start)==null?void 0:o.localDate)||""}</p>
      <p class="event-place">${((d=(l=(i=a._embedded)==null?void 0:i.venues)==null?void 0:l[0])==null?void 0:d.name)||""}</p>
    </li>
  `}).join("");H.innerHTML=s}function F(){y.innerHTML="";const t=5;let s=Math.max(0,T-2),a=Math.min(L,s+t);a-s<t&&(s=Math.max(0,a-t));for(let n=s;n<a;n++){const e=document.createElement("button");e.className="page-btn",e.textContent=n+1,n===T&&e.classList.add("active"),e.addEventListener("click",()=>j(n)),y.appendChild(e)}if(a<L){const n=document.createElement("span");n.textContent="...",n.className="dots",y.appendChild(n);const e=document.createElement("button");e.className="page-btn",e.textContent=L,e.addEventListener("click",()=>j(L-1)),y.appendChild(e)}}H.addEventListener("click",async t=>{const s=t.target.closest(".event-card");if(!s)return;const a=s.dataset.id,e=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${a}.json?apikey=${k}`)).json();R.innerHTML=J(e),D.classList.remove("backdrop-hidden"),U.classList.add("no-scroll")});V.addEventListener("click",A);D.addEventListener("click",t=>{t.target.closest(".modal")||A()});document.addEventListener("keydown",t=>{t.code==="Escape"&&A()});function A(){D.classList.add("backdrop-hidden"),U.classList.remove("no-scroll")}function J(t){var s,a,n,e,c,o,i,l,d,r,m,u,M,p,g;return`
    <img class="modal__preview" src="${((a=(s=t.images)==null?void 0:s[0])==null?void 0:a.url)||""}" />

    <div class="content">
      <img class="content__image" src="${((e=(n=t.images)==null?void 0:n[0])==null?void 0:e.url)||""}" />

      <ul class="content__list">

        <li>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${t.info||"No information"}</p>
        </li>

        <li>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${((o=(c=t.dates)==null?void 0:c.start)==null?void 0:o.localDate)||""}</p>
          <p class="modal__text">${((l=(i=t.dates)==null?void 0:i.start)==null?void 0:l.localTime)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${((u=(m=(r=(d=t._embedded)==null?void 0:d.venues)==null?void 0:r[0])==null?void 0:m.city)==null?void 0:u.name)||""}</p>
          <p class="modal__text">${((g=(p=(M=t._embedded)==null?void 0:M.venues)==null?void 0:p[0])==null?void 0:g.name)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text">${t.name||""}</p>
        </li>

        <li class="modal__pric">
          <h2 class="modal__title">PRICES</h2>

          <div class="price__wrap">
          <svg class="price__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 20"><path d="M3.22 0H0v19.33h3.22zm8.11 0H8.1v19.33h3.23zm4.88 0h-3.22v19.33h3.22zM29 0h-4.78v19.33H29zM6.44 0H4.88v19.33h1.56zm12.89 0h-1.56v19.33h1.56zm3.23 0h-1.57v19.33h1.57z" fill="#0E0E0E"/></svg>
            <p class="modal__text">Standart 300-500 UAH</p>
            
          </div>

          <a class="modal__btn" href="${t.url||"#"}" target="_blank">
            BUY TICKETS
          </a>

          <div class="price__wrap">
            <svg class="price__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 20"><path d="M3.22 0H0v19.33h3.22zm8.11 0H8.1v19.33h3.23zm4.88 0h-3.22v19.33h3.22zM29 0h-4.78v19.33H29zM6.44 0H4.88v19.33h1.56zm12.89 0h-1.56v19.33h1.56zm3.23 0h-1.57v19.33h1.57z" fill="#0E0E0E"/></svg>
            <p class="modal__text">VIP 1000-1500 UAH</p>
          </div>

          <a class="modal__btn" href="${t.url||"#"}" target="_blank">
            BUY TICKETS
          </a>

        </li>

      </ul>
    </div>

    <a class="btn-info" href="${t.url||"#"}" target="_blank">
      MORE FROM THIS AUTHOR
    </a>
  `}j();
//# sourceMappingURL=commonHelpers.js.map
