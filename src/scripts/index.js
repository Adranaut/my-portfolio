import "../styles/styles.css";
import "../styles/home/index.js"
import "../styles/responsives.css";
import "./components/index.js";
import "./pages/home/home-page.js";

import ScrollReveal from "scrollreveal";

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars-staggered");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars-staggered");
  }
});


const scrollRevealOption = {
  distance: window.matchMedia("(max-width: 650px)").matches ? "0px" : "40px",
  duration: 900,
  easing: "cubic-bezier(0.5, 1, 0.89, 1)",
  reset: false,
};

// Section Titles
ScrollReveal().reveal(".section-title", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 200,
});

// Summary
ScrollReveal().reveal(".photo-wrapper", {
  ...scrollRevealOption,
  origin: "left",
  delay: 300,
});

ScrollReveal().reveal(".info-box > *", {
  ...scrollRevealOption,
  origin: "right",
  delay: 400,
  interval: 150,
});

// Skill
ScrollReveal().reveal(".skill-card", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 300,
  interval: 100,
});

// Education
ScrollReveal().reveal(".education-content", {
  ...scrollRevealOption,
  origin: "left",
  delay: 300,
});

ScrollReveal().reveal(".education-visual", {
  ...scrollRevealOption,
  origin: "right",
  delay: 400,
});

// Training
ScrollReveal().reveal(".training-visual", {
  ...scrollRevealOption,
  origin: "left",
  delay: 300,
});

ScrollReveal().reveal(".training-content", {
  ...scrollRevealOption,
  origin: "right",
  delay: 400,
});

// Experience
ScrollReveal().reveal(".exp-card", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 300,
  interval: 200,
});

// Project
ScrollReveal().reveal(".project-card", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 300,
  interval: 150,
});

// Achievement
ScrollReveal().reveal(".achievement-item, .achievement-content", {
  ...scrollRevealOption,
  origin: "left",
  delay: 300,
  interval: 200,
});

ScrollReveal().reveal(".achievement-visual", {
  ...scrollRevealOption,
  origin: "right",
  delay: 450,
});

// Footer
ScrollReveal().reveal(".footer-col", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 250,
  interval: 150,
});
