const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const logo = document.querySelector("#navbar__logo");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
  navbar.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);
