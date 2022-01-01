const btn_menu_hamburger = document.querySelector(".header-button-nav");
const btn_menu_hamburger_close = document.querySelector(".menu-button-close");
const nav_mobile = document.querySelector(".nav-mobile");
btn_menu_hamburger.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  nav_mobile.style.visibility = "visible";
  nav_mobile.style.opacity = "1";
});
btn_menu_hamburger_close.addEventListener("click", () => {
  nav_mobile.style.visibility = "hidden";
  nav_mobile.style.opacity = "0";
  document.body.style.overflow = "auto";
});
