(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const O="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",r=document.querySelector(".events-list"),m=document.getElementById("pagination"),E=document.querySelector("[data-modal]"),l=document.querySelector(".modal__wrap");document.querySelector("[data-close]");const x=document.body,A=document.querySelector('.header__input[placeholder="Start searching"]'),M=document.querySelector(".country"),h=document.getElementById("countryInput"),s=document.querySelector(".country-list");let f="",C="US",u=0,v=0,z;const U=[{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"United Kingdom",code:"GB"},{name:"France",code:"FR"},{name:"Spain",code:"ES"},{name:"Italy",code:"IT"},{name:"Australia",code:"AU"},{name:"Canada",code:"CA"},{name:"Argentina",code:"AR"},{name:"Austria",code:"AT"},{name:"Belgium",code:"BE"},{name:"Brazil",code:"BR"},{name:"Netherlands",code:"NL"},{name:"Poland",code:"PL"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Ukraine",code:"UA"},{name:"Denmark",code:"DK"},{name:"Finland",code:"FI"},{name:"Norway",code:"NO"},{name:"Portugal",code:"PT"},{name:"Ireland",code:"IE"},{name:"Mexico",code:"MX"},{name:"New Zealand",code:"NZ"},{name:"Czech Republic",code:"CZ"},{name:"Hungary",code:"HU"}];function b(){const a=U.map(c=>`<li data-code="${c.code}">${c.name}</li>`).join("");s.innerHTML=a}b();h.addEventListener("click",()=>{M.classList.toggle("open"),s.classList.toggle("open")});s.addEventListener("click",a=>{if(a.target.tagName!=="LI")return;const c=a.target.dataset.code,t=a.target.textContent;h.value=t,C=c,s.classList.remove("open"),M.classList.remove("open"),d(0)});document.addEventListener("click",a=>{a.target.closest(".country")||(s.classList.remove("open"),M.classList.remove("open"))});A.addEventListener("input",()=>{clearTimeout(z),z=setTimeout(()=>{f=A.value.trim(),d(0)},500)});async function d(a=0){var n,i;const c=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${O}&countryCode=${C}&keyword=${f}&size=20&page=${a}`,o=await(await fetch(c)).json(),e=((n=o._embedded)==null?void 0:n.events)||[];if(v=Math.min(((i=o.page)==null?void 0:i.totalPages)||0,29),u=a,e.length===0){Y(),m.innerHTML="";return}k(e),P()}function Y(){r.classList.add("no-events"),r.innerHTML=`
    <div class="zero-matches">
      <img class="zero-matches__img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMTYyIDEzOS4yMWg0Mjh2NDczLjU4aC00Mjh6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTM4My42NSAyNDguNzNjLTczLjgxMi0yNC44ODctMTM1LjAyLTY0Ljc0Mi0xNzUtMTA5LjUyLTEyOC40IDM5Mi42MSA1My40MjYgNDcwLjAzIDUzLjQyNiA0NzAuMDNzMTg2Ljg0IDYzIDMyNy4xOC0zNDEuNjdjLTU4LjkzOCAxMS40MS0xMzEuNzkgNi4wNTA4LTIwNS42LTE4Ljg0NHptLTExMC41OSA3NC44ODNjMTkuMjAzIDYuNDcyNyAzMS4xMDIgMjYuNDQ1IDMyLjc5NyA1MC42NDggMCAwLTE4LjM5NS0yNi0zOC43ODUtMzIuODc1LTIwLjM5MS02Ljg3NS01MC43NzcgMi42NzE5LTUwLjc3NyAyLjY3MTkgMTYuMDA0LTE4LjIzOCAzNy41NjYtMjYuOTI2IDU2Ljc2Ni0yMC40NDV6bTM2Ljg3NSAxNDMuNzFjLTQ4LjA1NS0xNi4yMDctMTE1Ljg5LTQuODM1OS0xMTUuODktNC44MzU5IDMzLjIzLTI5LjY5NSA4MS4wMi00MS4xODQgMTI2LjI3LTI1LjkzIDQ1LjI0NiAxNS4yNjIgNzYuMzA5IDUzLjM0OCA4NC43NzcgOTcuMDk4IDAuMDAzOTA3IDAuMDA3ODEyLTQ3LjA5NC01MC4xMjUtOTUuMTQ4LTY2LjMzMnptMTEwLjM4LTc0LjI1NGMtMjAuMzk4LTYuODc1LTUwLjc3NyAyLjY3MTktNTAuNzc3IDIuNjcxOSAxNi4wMDQtMTguMjM4IDM3LjU3LTI2LjkyMiA1Ni43Ny0yMC40NDUgMTkuMjAzIDYuNDcyNyAzMS4xMDIgMjYuNDQ1IDMyLjc4OSA1MC42NDggMC4wMDc4MTIgMC0xOC4zODMtMjYtMzguNzgxLTMyLjg3NXoiIGZpbGw9IiNkYzU1YzUiLz4KIDwvZz4KPC9zdmc+Cg==" alt="Drama Theatre Of Ancient Greece Comedy Mask - Theatre Masks">
      <p class="zero-matches__text">Sorry. We couldn't find any matches</p>
    </div>
  `}function k(a){r.classList.remove("no-events");const c=a.map(t=>{var g,y,N,p,I,D,j,T;const o=((y=(g=t.images)==null?void 0:g[0])==null?void 0:y.url)||"",e=t.name||"",n=((p=(N=t.dates)==null?void 0:N.start)==null?void 0:p.localDate)||"",i=((D=(I=t._embedded)==null?void 0:I.venues)==null?void 0:D[0])||{},L=i.name||"",S=((j=i.location)==null?void 0:j.latitude)||"",w=((T=i.location)==null?void 0:T.longitude)||"";return`
      <li class="event-card" data-id="${t.id}">
        <img class="event-img" src="${o}" alt="${e}">
        <h3 class="event-title">${e}</h3>
        <p class="event-date">${n}</p>
        <p class="event-place"
           data-lat="${S}"
           data-lng="${w}"
           data-place="${L}">
          ${L}
          <svg class="event-svg" width="7" height="10" viewBox="0 0 7 10">
            <path d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0Z" fill="white"/>
          </svg>
        </p>
      </li>
    `}).join("");r.innerHTML=c,document.querySelectorAll(".event-place").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.lat,e=t.dataset.lng,n=t.dataset.place;l.innerHTML="",E.classList.remove("is-hidden"),x.style.overflow="hidden",o&&e?l.innerHTML=`
          <h3>${n}</h3>
          <iframe
            width="100%"
            height="400"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${o},${e}">
          </iframe>
        `:l.innerHTML=`
          <h3>${n}</h3>
          <p style="color:#fff; padding:20px;">No map available for this location.</p>
        `})})}function P(){m.innerHTML="";const a=5;let c=Math.max(0,u-2),t=Math.min(v,c+a);t-c<a&&(c=Math.max(0,t-a));for(let o=c;o<t;o++){const e=document.createElement("button");e.className="page-btn",e.textContent=o+1,o===u&&e.classList.add("active"),e.addEventListener("click",()=>d(o)),m.appendChild(e)}}d();
//# sourceMappingURL=commonHelpers.js.map
