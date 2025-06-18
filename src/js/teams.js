// ../js/teams.js

// Importa los componentes Custom Elements
import '../components/equipos.js';

// Define la URL de la API
const API_URL = "https://685150138612b47a2c09856e.mockapi.io/f1data";

document.addEventListener("DOMContentLoaded", async () => {
  // --- Manejo del menú hamburguesa (sin cambios) ---
  const icon = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");

  if (icon && menu) {
    icon.addEventListener("click", () => {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    });
  }

  // --- Lógica principal de consumo de API y manejo de Custom Elements ---

  const equiposCardElement = document.querySelector('equipos-card');
  const equiposCardAdminElement = document.querySelector('equipos-card-admin');

  // Función para obtener los equipos de la API
  async function fetchTeams() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error HTTP! estado: ${response.status}`);
      }
      const data = await response.json();
      
      // ¡IMPORTANTE! Acceder al array 'equipos' que está anidado en el primer objeto de la respuesta
      if (data && data.length > 0 && data[0].equipos) {
        return data[0].equipos;
      } else {
        console.warn("La estructura de datos de la API no contiene el array 'equipos' en el formato esperado.");
        return [];
      }
    } catch (error) {
      console.error("Error al obtener los equipos de F1:", error);
      alert("Error al cargar los equipos. Por favor, intente más tarde.");
      return []; // Devuelve un array vacío en caso de error
    }
  }

  // --- Funciones de añadir/eliminar equipo (simuladas localmente) ---
  // IMPORTANTE: Con la estructura actual de la API (un solo objeto que contiene arrays anidados),
  // MockAPI.io no permite operaciones POST/DELETE directamente en los elementos individuales
  // de los arrays anidados.
  //
  // Para que la funcionalidad de añadir/eliminar equipos individuales funcionara realmente
  // contra la API, necesitarías reestructurar tu MockAPI.io para tener colecciones separadas,
  // por ejemplo:
  // - https://685150138612b47a2c09856e.mockapi.io/equipos
  // - https://685150138612b47a2c09856e.mockapi.io/pilotos
  // ... donde cada 'equipo' o 'piloto' sería un recurso de nivel superior con su propio ID.
  //
  // Por ahora, estas funciones simulan la adición/eliminación a nivel de la interfaz de usuario
  // (es decir, los cambios se verán en tu navegador, pero no se guardarán en la API remota).

  // Función simulada para añadir un equipo
  async function addTeamLocally(newTeamData) {
    alert("AVISO: La función 'Añadir equipo' solo se aplica localmente. Para guardar en la API, se requiere una reestructuración.");
    return newTeamData; // Devolvemos los datos tal cual, con el ID temporal ya incluido
  }

  // Función simulada para eliminar un equipo
  async function deleteTeamLocally(teamId) {
    alert("AVISO: La función 'Eliminar equipo' solo se aplica localmente. Para guardar en la API, se requiere una reestructuración.");
    return true; // Siempre 'exitoso' a nivel local
  }

  // Cargar datos al inicio y pasarlos a los componentes
  const initialTeams = await fetchTeams();
  
  if (equiposCardElement) {
    equiposCardElement.equipos = initialTeams; // Pasa los datos a EquiposCard
  }

  if (equiposCardAdminElement) {
    equiposCardAdminElement.equipos = initialTeams; // Pasa los datos a EquiposCardAdmin

    // Escuchar evento 'add-team' desde EquiposCardAdmin
    equiposCardAdminElement.addEventListener('add-team', async (event) => {
      const newTeamData = event.detail;
      const addedTeam = await addTeamLocally(newTeamData); // Llama a la función simulada
      if (addedTeam) {
        // Si se "agregó" correctamente localmente, actualiza la lista en el componente y cierra el modal
        const currentTeams = equiposCardAdminElement.equipos;
        equiposCardAdminElement.equipos = [...currentTeams, addedTeam];
        equiposCardAdminElement.closeModal(); // Cerrar el modal del Custom Element
      }
    });

    // Escuchar evento 'delete-team' desde EquiposCardAdmin
    equiposCardAdminElement.addEventListener('delete-team', async (event) => {
      const { id, cardElement } = event.detail;
      const success = await deleteTeamLocally(id); // Llama a la función simulada
      if (success) {
        // Si se "eliminó" correctamente localmente, actualiza la lista en el componente
        const currentTeams = equiposCardAdminElement.equipos;
        equiposCardAdminElement.equipos = currentTeams.filter(team => team.id !== id);
        cardElement.remove(); // Eliminar la tarjeta del DOM
      }
    });
  }
});