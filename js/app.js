const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

// tiny slider js
let slider = tns({
  container: ".skills-center",
  loop: true,
  speed: 300,
  items: 3,
  slideBy: 3,
  nav: false,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  gutter: 280,
  responsive: {
    1024: {
      items: 2,
    },
    768: {
      items: 1,
    },
  },
});
