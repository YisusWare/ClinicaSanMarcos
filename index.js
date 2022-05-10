const bMenu = document.querySelector("#menu-button");
const menuMobile = document.querySelector(".links");



bMenu.addEventListener("click",(e)=>{
    e.preventDefault();
    menuMobile.classList.toggle("show");
});

