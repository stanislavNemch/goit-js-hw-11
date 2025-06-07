import{a as l,S as d,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();async function f(r){const o="50678696-ed6f097088bf5690dd98584b9",s="https://pixabay.com/api/",t={key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await l.get(s,{params:t})).data}catch(e){throw console.error("Error fetching images:",e),new Error("Failed to fetch images from Pixabay.")}}const u=new d(".gallery a",{captionsData:"alt",captionDelay:250});function m(r){const o=document.querySelector(".gallery");if(!o){console.error("Gallery container not found.");return}const s=r.map(t=>`
        <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
                <div class="image-info">
                    <div class="info-item">
                        <b>Likes</b>
                        <p>${t.likes}</p>
                    </div>
                    <div class="info-item">
                        <b>Views</b>
                        <p>${t.views}</p>
                    </div>
                    <div class="info-item">
                        <b>Comments</b>
                        <p>${t.comments}</p>
                    </div>
                    <div class="info-item">
                        <b>Downloads</b>
                        <p>${t.downloads}</p>
                    </div>
                </div>
            </a>
        </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),u.refresh()}function p(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}function y(){const r=document.querySelector(".loader");r&&r.classList.add("is-visible")}function g(){const r=document.querySelector(".loader");r&&r.classList.remove("is-visible")}const c=document.querySelector(".form"),h=c.elements["search-text"];c.addEventListener("submit",async r=>{r.preventDefault();const o=h.value.trim();if(o===""){n.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}p(),y();try{const s=await f(o);s.hits.length===0?n.info({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:!1,close:!1,backgroundColor:"#ef4040",maxWidth:"432px",minHeight:"88px",html:!0}):m(s.hits)}catch(s){n.error({title:"Error",message:s.message||"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{g(),c.reset()}});
//# sourceMappingURL=index.js.map
