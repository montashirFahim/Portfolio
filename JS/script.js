// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");
// let navbar_home = document.querySelector(".navbar-home");

// // Toggle navbar on click
// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("fa-xmark"); // changes hamburger to cross
//   menuIcon.classList.toggle("fa-bars"); // toggle back to bars
//   navbar.classList.toggle("active");
//   navbar_home.classList.toggle("active");
// };

// // Sections and nav links
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");
// let nav_homeLinks = document.querySelectorAll(".navbar-home a");

// window.onscroll = () => {
//   let top = window.scrollY;

//   sections.forEach((sec) => {
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       // Main navbar links
//       navLinks.forEach((link) => {
//         link.classList.remove("active");
//         if (link.getAttribute("href").includes(id)) {
//           link.classList.add("active");
//         }
//       });

//       // Home navbar links
//       nav_homeLinks.forEach((link) => {
//         link.classList.remove("active");
//         if (link.getAttribute("href").includes(id)) {
//           link.classList.add("active");
//         }
//       });
//     }
//   });

//   // Sticky header
//   let header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 100);

//   // Auto close dropdown on scroll
//   menuIcon.classList.remove("fa-xmark");
//   menuIcon.classList.add("fa-bars");
//   navbar.classList.remove("active");
//   navbar_home.classList.remove("active");
// };
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navbar_home = document.querySelector(".navbar-home");

// Toggle navbar on click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark"); // changes hamburger to cross
  menuIcon.classList.toggle("fa-bars"); // toggle back to bars
  navbar.classList.toggle("active");
  if (navbar_home) {
    navbar_home.classList.toggle("active");
  }
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
  if (navbar_home) {
    navbar_home.classList.remove("active");
  }
};

// Read More functionality
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.querySelector(".about-content .btn");
  const aboutText = document.querySelector(".about-content p");

  if (readMoreBtn && aboutText) {
    // Store the original text
    const originalText = aboutText.textContent;
    const shortText = originalText.substring(0, 150) + "...";

    // Set initial state to shortened text
    aboutText.textContent = shortText;
    readMoreBtn.textContent = "Read More";

    let isExpanded = false;

    readMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();

      if (!isExpanded) {
        // Show full text
        aboutText.textContent =
          originalText +
          " I have experience working with various frameworks and technologies, always eager to tackle new challenges and contribute to innovative projects. My passion lies in solving complex problems through code and creating efficient solutions.";
        readMoreBtn.textContent = "Read Less";
        isExpanded = true;
      } else {
        // Show shortened text
        aboutText.textContent = shortText;
        readMoreBtn.textContent = "Read More";
        isExpanded = false;
      }
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Close mobile menu when clicking on nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    if (navbar_home) {
      navbar_home.classList.remove("active");
    }
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});

nav_homeLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    if (navbar_home) {
      navbar_home.classList.remove("active");
    }
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});

document.querySelectorAll(".slider-container").forEach((container) => {
  const slider = container.querySelector(".slider");
  const images = container.querySelectorAll("img");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");

  let index = 0;

  function showSlide(i) {
    if (i < 0) index = images.length - 1;
    else if (i >= images.length) index = 0;
    else index = i;

    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  // Each slider runs independently
  setInterval(() => showSlide(index + 1), 6000);
});
