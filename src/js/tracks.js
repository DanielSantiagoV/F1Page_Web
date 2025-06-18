import '../components/circuitos.js';
import { circuitos as circuitosData } from "../data/circuitos.js";

document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector(".hamburger-icon");
  if (icon) {
    icon.addEventListener("click", () => {
      const menu = document.querySelector(".menu-links");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    });
  }
}); 