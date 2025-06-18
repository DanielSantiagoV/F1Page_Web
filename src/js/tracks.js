// js/tracks.js

// Importa los Custom Elements de circuitos
import '../components/circuitos.js'; // Asegúrate de que esta ruta sea correcta: 'components' o 'componentes'

// Define la URL de la API
const API_URL = "https://685150138612b47a2c09856e.mockapi.io/f1data";

document.addEventListener("DOMContentLoaded", async () => {
  const circuitoCardElement = document.querySelector('circuito-card');
  const circuitoCardAdminElement = document.querySelector('circuito-card-admin');

  if (!circuitoCardElement && !circuitoCardAdminElement) {
    console.error("ERROR: No se encontró el Custom Element <circuito-card> o <circuito-card-admin> en el HTML. Asegúrate de que uno esté presente en la sección de Tracks.");
  } else {
    console.log("Custom Element para circuitos encontrado en el DOM.");
    if (circuitoCardElement) console.log("Usando: <circuito-card>");
    if (circuitoCardAdminElement) console.log("Usando: <circuito-card-admin>");
  }

  // Función para obtener los circuitos de la API
  async function fetchCircuitos() {
    console.log("Iniciando fetch de circuitos desde:", API_URL);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error HTTP! estado: ${response.status} al fetchear ${API_URL}`);
      }
      const data = await response.json();
      console.log("Respuesta completa de la API (RAW):", data);

      // ¡IMPORTANTE! Acceder al array 'circuitos' que está anidado en el primer objeto de la respuesta
      if (data && data.length > 0 && data[0].circuitos) {
        console.log("Circuitos extraídos de la API (filtrados):", data[0].circuitos);
        return data[0].circuitos;
      } else {
        console.warn("La estructura de datos de la API no contiene el array 'circuitos' en el formato esperado o está vacío. Respuesta:", data);
        return [];
      }
    } catch (error) {
      console.error("ERROR CRÍTICO al obtener los circuitos:", error);
      alert("Error al cargar los circuitos. Por favor, intente más tarde. Revisa la consola para más detalles.");
      return [];
    }
  }

  const initialCircuitos = await fetchCircuitos();
  console.log("Datos de circuitos obtenidos y listos para pasar al componente:", initialCircuitos);
  
  if (circuitoCardElement) {
    circuitoCardElement.circuitos = initialCircuitos;
    console.log("Datos de circuitos pasados a <circuito-card>.");
  } else if (circuitoCardAdminElement) {
    circuitoCardAdminElement.circuitos = initialCircuitos;
    console.log("Datos de circuitos pasados a <circuito-card-admin>.");

    // --- Funciones de añadir/eliminar circuito (simuladas localmente) ---
    circuitoCardAdminElement.addEventListener('add-circuito', async (event) => {
      alert("AVISO: La función 'Añadir circuito' solo se aplica localmente. Para guardar en la API, se requiere una reestructuración.");
      const newCircuitoData = event.detail;
      const addedCircuito = { ...newCircuitoData, id: `temp-${Date.now()}` }; // Simular ID
      const currentCircuitos = circuitoCardAdminElement.circuitos;
      circuitoCardAdminElement.circuitos = [...currentCircuitos, addedCircuito];
      circuitoCardAdminElement.closeModal();
    });

    circuitoCardAdminElement.addEventListener('delete-circuito', async (event) => {
      alert("AVISO: La función 'Eliminar circuito' solo se aplica localmente. Para guardar en la API, se requiere una reestructuración.");
      const { id, cardElement } = event.detail;
      const currentCircuitos = circuitoCardAdminElement.circuitos;
      circuitoCardAdminElement.circuitos = currentCircuitos.filter(circuito => circuito.id !== id);
      cardElement.remove();
    });
  }
});