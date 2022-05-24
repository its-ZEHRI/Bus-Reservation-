const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navbarwrapper = document.querySelector(".navbar-wrapper");
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    if (this.scrollY > 100) {
      navbar.classList.add("change");
    } else {
      navbar.classList.remove("change");
    }
  });
});
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change-hamburger");
  navbarwrapper.classList.toggle("change-navbar-wrapper");
});
