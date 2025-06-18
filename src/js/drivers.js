import '../components/pilotos.js';
import { pilotos as pilotosData } from "../data/pilotos.js";

// function ShowHide(){
//     var container = document.getElementsByClassName("estadisticas1")[0];

//     if(container.style.visibility == "hidden"){
//         container.style.visibility = "visible";
//     }else{
//         container.style.visibility = "hidden";
//     }
// }
function selectDriver(button, estadisticaId) {
    // Primero ocultamos todas las estadísticas
    const allStats = document.querySelectorAll('.estadistica');
    allStats.forEach(stat => {
        stat.style.display = 'none';
    });

    // Luego mostramos la estadística correspondiente al botón presionado
    const selectedStat = document.getElementById(estadisticaId);
    if (selectedStat) {
        selectedStat.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", () => {
  // Manejo del menú hamburguesa
  const icon = document.querySelector(".hamburger-icon");
  if (icon) {
    icon.addEventListener("click", () => {
      const menu = document.querySelector(".menu-links");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    });
  }

  // Manejo de la selección de pilotos
  function selectDriver(button, estadisticaId) {
    const allStats = document.querySelectorAll('.estadistica');
    allStats.forEach(stat => {
      stat.style.display = 'none';
    });

    const selectedStat = document.getElementById(estadisticaId);
    if (selectedStat) {
      selectedStat.style.display = 'block';
    }
  }

  // Inicializar partículas
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.5, random: false, anim: { enable: false } },
        size: { value: 3, random: true, anim: { enable: false } },
        line_linked: { enable: true, distance: 150, color: "#ff1e00", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 3, direction: "none", random: false, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 200, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }
});
