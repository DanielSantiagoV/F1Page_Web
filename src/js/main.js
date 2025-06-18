// Este evento asegura que el código se ejecute solo cuando todo el contenido del DOM ha sido cargado.
window.addEventListener('DOMContentLoaded', function() {
  
    // Seleccionamos los elementos del DOM que necesitamos.
    const loader = document.getElementById('loader');
    const mainContent = document.querySelector('main'); // Usamos querySelector para seleccionar la etiqueta <main>
    const bgVideo = document.getElementById('main-bg-video');
    
    let videoLoaded = false;
    let loaderTimeout = null;
  
    /**
     * Función para ocultar la pantalla de carga y mostrar el contenido principal.
     * Añade una clase para una transición suave de desvanecimiento (fade-out).
     */
    function showContent() {
      if (loader) {
        loader.classList.add('fade-out');
        
        // Esperamos a que la animación de fade-out termine (500ms) para ocultar el loader.
        setTimeout(function() {
          loader.style.display = 'none';
          if (mainContent) {
            // Eliminamos el 'display' para que tome el valor por defecto del CSS.
            mainContent.style.display = ''; 
          }
        }, 500);
      }
    }
  
    // Si el video de fondo existe, esperamos a que pueda reproducirse sin interrupciones.
    if (bgVideo) {
      bgVideo.addEventListener('canplaythrough', function() {
        if (!videoLoaded) {
          videoLoaded = true;
          if (loaderTimeout) {
            clearTimeout(loaderTimeout); // Cancelamos el temporizador de respaldo si el video carga a tiempo.
          }
          // Damos un tiempo extra para una transición más suave.
          setTimeout(showContent, 3500); 
        }
      });
    }
  
    // Creamos un temporizador de respaldo. Si el video no carga en 3.5 segundos,
    // mostramos el contenido de todas formas para no dejar esperando al usuario.
    loaderTimeout = setTimeout(function() {
      if (!videoLoaded) {
        showContent();
      }
    }, 3500);
  
  });