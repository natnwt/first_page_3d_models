import './style.css';


const primaryNav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=>{
    const Vis = primaryNav.getAttribute("data-visible");

    if(Vis==="false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else{
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})