// Elementos del DOM
const btnLogin = document.getElementById('btnLogin');
const btnRegister = document.getElementById('btnRegister');
const mainApp = document.getElementById('main-app');
const audioToggle = document.getElementById('audioToggle');
const volumeControl = document.getElementById('volumeControl');
const backgroundAudio = document.getElementById('backgroundAudio');
const loader = document.getElementById('loader');

// Estado del audio
let isAudioMuted = true;

// Función para manejar el loader
function handleLoader() {
  // Simular tiempo de carga
  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1500);
}

// Función para manejar el login
function handleLogin(e) {
  e.preventDefault();
  // Animación de salida
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 500);
}

// Función para manejar el registro
function handleRegister(e) {
  e.preventDefault();
  // Animación de salida
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = 'register.html';
  }, 500);
}

// Función para manejar el audio
function toggleAudio() {
  isAudioMuted = !isAudioMuted;
  backgroundAudio.muted = isAudioMuted;
  audioToggle.textContent = isAudioMuted ? '🔇' : '🔊';
  audioToggle.classList.toggle('active');
}

// Función para manejar el volumen
function handleVolumeChange(e) {
  backgroundAudio.volume = e.target.value;
  // Actualizar el ícono según el volumen
  if (e.target.value > 0) {
    audioToggle.textContent = '🔊';
    isAudioMuted = false;
  } else {
    audioToggle.textContent = '🔇';
    isAudioMuted = true;
  }
}

// Función para animar elementos al hacer hover
function setupHoverAnimations() {
  const buttons = document.querySelectorAll('.f1-nav-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });
}

// Event Listeners
btnLogin.addEventListener('click', handleLogin);
btnRegister.addEventListener('click', handleRegister);
audioToggle.addEventListener('click', toggleAudio);
volumeControl.addEventListener('input', handleVolumeChange);

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  // Manejar el loader
  handleLoader();

  // Configurar animaciones de hover
  setupHoverAnimations();

  // Asegurarse de que el audio esté muteado al inicio
  backgroundAudio.muted = true;
  audioToggle.textContent = '🔇';

  // Agregar transición suave al body
  document.body.style.transition = 'opacity 0.5s ease';
  document.body.style.opacity = '1';
}); 