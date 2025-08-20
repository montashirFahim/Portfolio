let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navbar_home = document.querySelector(".navbar-home");

// Toggle navbar on click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark"); // changes hamburger to cross
  menuIcon.classList.toggle("fa-bars"); // toggle back to bars
  navbar.classList.toggle("active");
  navbar_home.classList.toggle("active");
};

// Sections and nav links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let nav_homeLinks = document.querySelectorAll(".navbar-home a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Main navbar links
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });

      // Home navbar links
      nav_homeLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });

  // Sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Auto close dropdown on scroll
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars");
  navbar.classList.remove("active");
  navbar_home.classList.remove("active");
};
