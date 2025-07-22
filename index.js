import{a as c,S as d,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const f="/api/";function u(e){const o={q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get(f,{params:o}).then(t=>t.data).catch(t=>{throw console.error("Error fetching images via proxy:",t),new Error("Failed to fetch images from Pixabay via proxy.")})}const m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function p(e){const o=document.querySelector(".gallery");if(!o){console.error("Gallery container not found.");return}const t=e.map(s=>`
        <li class="gallery-item">
            <a href="${s.largeImageURL}">
                <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}">
                <div class="image-info">
                    <div class="info-item">
                        <b>Likes</b>
                        <p>${s.likes}</p>
                    </div>
                    <div class="info-item">
                        <b>Views</b>
                        <p>${s.views}</p>
                    </div>
                    <div class="info-item">
                        <b>Comments</b>
                        <p>${s.comments}</p>
                    </div>
                    <div class="info-item">
                        <b>Downloads</b>
                        <p>${s.downloads}</p>
                    </div>
                </div>
            </a>
        </li>
    `).join("");o.insertAdjacentHTML("beforeend",t),m.refresh()}function y(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function g(){const e=document.querySelector(".loader");e&&e.classList.add("is-visible")}function h(){const e=document.querySelector(".loader");e&&e.classList.remove("is-visible")}const l=document.querySelector(".form"),b=l.elements["search-text"];l.addEventListener("submit",async e=>{e.preventDefault();const o=b.value.trim();if(o===""){n.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}y(),g();try{const t=await u(o);t.hits.length===0?n.info({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:!1,close:!1,backgroundColor:"#ef4040",maxWidth:"432px",minHeight:"88px",html:!0}):p(t.hits)}catch(t){n.error({title:"Error",message:t.message||"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{h(),l.reset()}});
//# sourceMappingURL=index.js.map
