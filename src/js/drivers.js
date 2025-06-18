// src/js/drivers.js

// Importa los Custom Elements de pilotos desde la RUTA CORRECTA
import '../components/pilotos.js'; // Ruta corregida: 'componentes' y 'pilotos.js'

// Define la URL de la API
const API_URL = "https://685150138612b47a2c09856e.mockapi.io/f1data";

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM content loaded. Starting drivers script.");

  const pilotoCardElement = document.querySelector('piloto-card');
  const pilotoCardAdminElement = document.querySelector('piloto-card-admin');

  if (!pilotoCardElement && !pilotoCardAdminElement) {
    console.error("ERROR: No se encontró el Custom Element <piloto-card> o <piloto-card-admin> en el HTML. Asegúrate de que uno esté presente en la sección de Drivers.");
  } else {
    console.log("Custom Element para pilotos encontrado en el DOM.");
    if (pilotoCardElement) console.log("Usando: <piloto-card>");
    if (pilotoCardAdminElement) console.log("Usando: <piloto-card-admin>");
  }

  // Función para obtener los pilotos de la API
  async function fetchPilotos() {
    console.log("Iniciando fetch de pilotos desde:", API_URL);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error HTTP! estado: ${response.status} al fetchear ${API_URL}`);
      }
      const data = await response.json();
      console.log("Respuesta completa de la API (RAW):", data); // Muestra la respuesta completa

      // ¡IMPORTANTE! Acceder al array 'pilotos' que está anidado en el primer objeto de la respuesta
      if (data && data.length > 0 && data[0].pilotos) {
        console.log("Pilotos extraídos de la API (filtrados):", data[0].pilotos);
        return data[0].pilotos;
      } else {
        console.warn("La estructura de datos de la API no contiene el array 'pilotos' en el formato esperado o está vacío. Respuesta:", data);
        return [];
      }
    } catch (error) {
      console.error("ERROR CRÍTICO al obtener los pilotos:", error);
      alert("Error al cargar los pilotos. Por favor, intente más tarde. Revisa la consola para más detalles.");
      return [];
    }
  }

  const initialPilotos = await fetchPilotos();
  console.log("Datos de pilotos obtenidos y listos para pasar al componente:", initialPilotos);
  
  if (pilotoCardElement) {
    pilotoCardElement.pilotos = initialPilotos; // Pasa los datos a PilotoCard
    console.log("Datos de pilotos pasados a <piloto-card>.");
  } else if (pilotoCardAdminElement) {
    pilotoCardAdminElement.pilotos = initialPilotos; // Pasa los datos a PilotoCardAdmin
    console.log("Datos de pilotos pasados a <piloto-card-admin>.");

    // --- Funciones de añadir/eliminar piloto (simuladas localmente) ---
    pilotoCardAdminElement.addEventListener('add-piloto', async (event) => {
      alert("AVISO: La función 'Añadir piloto' solo se aplica localmente. Para guardar en la API, se requiere una reestructuración.");
      const newPilotoData = event.detail;
      const addedPiloto = { ...newPilotoData, id: `temp-${Date.now()}` }; // Simular ID
      const currentPilotos = pilotoCardAdminElement.pilotos; // Acceder al getter
      pilotoCardAdminElement.pilotos = [...currentPilotos, addedPiloto]; // Usar el setter
      pilotoCardAdminElement.closeModal();
    });

    pilotoCardAdminElement.addEventListener('delete-piloto', async (event) => {
      alert("AVISO: La función 'Eliminar piloto' solo se aplica localmente. Para guardar en la API, se requiere una reestructuración.");
      const { id, cardElement } = event.detail;
      const currentPilotos = pilotoCardAdminElement.pilotos; // Acceder al getter
      pilotoCardAdminElement.pilotos = currentPilotos.filter(piloto => piloto.id !== id); // Usar el setter
      cardElement.remove();
    });
  }
});