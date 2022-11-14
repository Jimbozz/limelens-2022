//Mobile nav
//-------------------------------------------

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

// GSAP animations

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  gsap.utils.toArray(".btn").forEach((btn) => {
    let hover = gsap.to(btn, {
      backgroundColor: "#353535",
      duration: 0.3,
      paused: true,
      ease: "power1.inOut",
    });
    btn.addEventListener("mouseenter", () => hover.play());
    btn.addEventListener("mouseleave", () => hover.reverse());
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-heading", {
    duration: 0.9,
    opacity: 0,
    x: -200,
  });

  const horizontalSection = document.querySelector(".horizontal");

  gsap.to(".horizontal", {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
      trigger: ".horizontal",
      start: "center center",
      end: "+=1000",
      pin: ".animation-container",
      scrub: true,
      invalidateOnRefresh: true,
      scrub: 1.5,
    },
  });

  gsap.from(".about-sticky", {
    scrollTrigger: ".about-sticky",
    duration: 0.9,
    opacity: 0,
    x: -200,
  });
});
