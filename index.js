import{S as c,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const u="https://pixabay.com/api/",m=s=>{const e=new URLSearchParams({key:"43952062-1ac9439355a7535a7f5f048fb",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${e}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})},d=s=>s.map(e=>`<li class="gallery-card">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img
        class="gallery-photo"
        src="${e.webformatURL}"
        data-source="${e.largeImageURL}"
        alt="${e.tags}"
      />
    </a>
    <div class="under-img-info">
      <ul class="list-info">
        <li class="item-info">
          <h3 class="title-info">Likes</h3>
          <p class="text-info">${e.likes}</p>
        </li>
        <li class="item-info">
          <h3 class="title-info">Views</h3>
          <p class="text-info">${e.views}</p>
        </li>
        <li class="item-info">
          <h3 class="title-info">Comments</h3>
          <p class="text-info">${e.comments}</p>
        </li>
        <li class="item-info">
          <h3 class="title-info">Downloads</h3>
          <p class="text-info">${e.downloads}</p>
        </li>
      </ul>
    </div>
  </li>`).join(""),o=document.querySelector(".gallery-list"),h=document.querySelector(".form"),n=document.querySelector(".loader");let g=new c(".gallery-list a",{captionsData:"alt",captionDelay:250});function y(s){s.preventDefault();const e=s.target.elements.query.value.trim();if(e===""){o.innerHTML="",s.target.reset();return}o.innerHTML="",n.classList.remove("is-hidden"),m(e).then(i=>{i.total===0&&(s.target.reset(),f.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,pauseOnHover:!0,color:"red"})),o.innerHTML=d(i.hits),g.refresh()}).catch(i=>console.log(i)).finally(()=>{s.target.reset(),n.classList.add("is-hidden")})}h.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
