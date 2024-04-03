import{i as l,S as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function g(s){d.classList.add("loader");const r="https://pixabay.com/api/",o=s.trim().split(",").join("+"),i=new URLSearchParams({key:"42946583-b9bd64904b8b2d582b051d84e",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${i}`;return fetch(e).then(t=>t.json()).catch(t=>iziToast.show({title:"ERROR:",titleColor:"red",message:"Server error!",messageColor:"red",color:"red",position:"topRight"}))}function y(s){const r=s.hits.map(o=>{const{id:i,webformatURL:e,largeImageURL:t,tags:a,likes:m,views:u,comments:f,downloads:h}=o;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" id=${i} src="${e}" alt="${a}"/>
        </a>
        <div class="gallery-item-info">
          <div class="item-info-atr">
          <h3>Likes</h3>
          <p>${m}</p>
          </div>
          <div class="item-info-atr">
          <h3>Views</h3>
          <p>${u}</p>
          </div>
          <div class="item-info-atr">
          <h3>Comments</h3>
          <p>${f}</p>
          </div>
          <div class="item-info-atr">
          <h3>Downloads</h3>
          <p>${h}</p>
          </div>
        </div>
    </li>
    `}).join("");c.insertAdjacentHTML("afterbegin",r)}const c=document.querySelector(".gallery"),n=document.querySelector("#search-form"),d=document.querySelector("#loader");n.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const r=s.target.elements.query.value;if(r==""){l.show({title:"Warning:",titleColor:"red",message:"The search field is empty. Please try again!",messageColor:"red",color:"yellow",position:"topRight"});return}r&&g(r).then(o=>{o.totalHits<=0?l.show({title:"ERROR:",titleColor:"red",message:"Sorry, there are no images matching your search query. Please try again.",messageColor:"red",color:"red",position:"topRight"}):(y(o),d.classList.remove("loader"))}).then(()=>{new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}).catch(o=>console.log(o)),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
