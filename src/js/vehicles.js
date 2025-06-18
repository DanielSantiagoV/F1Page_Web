// ../js/vehicles.js

// Importa los Custom Elements de vehículos
import '../components/vehiculos.js';

// Define la URL de la API
const API_URL = "https://685150138612b47a2c09856e.mockapi.io/f1data";

document.addEventListener("DOMContentLoaded", async () => {
  const vehiculoCardElement = document.querySelector('vehiculo-card');
  const vehiculoCardAdminElement = document.querySelector('vehiculo-card-admin');

  // Función para obtener los vehículos de la API
  async function fetchVehiculos() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error HTTP! estado: ${response.status}`);
      }
      const data = await response.json();
      
      // ¡IMPORTANTE! Acceder al array 'vehiculos' que está anidado en el primer objeto de la respuesta
      if (data && data.length > 0 && data[0].vehiculos) {
        return data[0].vehiculos;
      } else {
        console.warn("La estructura de datos de la API no contiene el array 'vehiculos' en el formato esperado.");
        return [];
      }
    } catch (error) {
      console.error("Error al obtener los vehículos de F1:", error);
      alert("Error al cargar los vehículos. Por favor, intente más tarde.");
      return []; // Devuelve un array vacío en caso de error
    }
  }

  // --- Funciones de añadir/eliminar vehículo (simuladas localmente) ---
  // IMPORTANTE: Con la estructura actual de tu API (un solo objeto que contiene arrays anidados),
  // MockAPI.io no permite operaciones POST/DELETE directamente en los elementos individuales
  // de los arrays anidados.
  //
  // Para que la funcionalidad de añadir/eliminar vehículos individuales funcionara realmente
  // contra la API, necesitarías reestructurar tu MockAPI.io para tener colecciones separadas.
  //
  // Por ahora, estas funciones simulan la adición/eliminación a nivel de la interfaz de usuario
  // (es decir, los cambios se verán en tu navegador, pero no se guardarán en la API remota).

  // Función simulada para añadir un vehículo
  async function addVehiculoLocally(newVehiculoData) {
    alert("AVISO: La función 'Añadir vehículo' solo se aplica localmente. Para guardar en la API, se requiere una reestructuración.");
    return newVehiculoData; // Devolvemos los datos tal cual, con el ID temporal ya incluido
  }

  // Función simulada para eliminar un vehículo
  async function deleteVehiculoLocally(vehiculoId) {
    alert("AVISO: La función 'Eliminar vehículo' solo se aplica localmente. Para guardar en la API, se requiere una reestructuración.");
    return true; // Siempre 'exitoso' a nivel local
  }

  // Cargar datos al inicio y pasarlos a los componentes
  const initialVehiculos = await fetchVehiculos();
  
  if (vehiculoCardElement) {
    vehiculoCardElement.vehiculos = initialVehiculos; // Pasa los datos a VehiculoCard
  }

  if (vehiculoCardAdminElement) {
    vehiculoCardAdminElement.vehiculos = initialVehiculos; // Pasa los datos a VehiculoCardAdmin

    // Escuchar evento 'add-vehiculo' desde VehiculoCardAdmin
    vehiculoCardAdminElement.addEventListener('add-vehiculo', async (event) => {
      const newVehiculoData = event.detail;
      const addedVehiculo = await addVehiculoLocally(newVehiculoData); // Llama a la función simulada
      if (addedVehiculo) {
        // Si se "agregó" correctamente localmente, actualiza la lista en el componente y cierra el modal
        const currentVehiculos = vehiculoCardAdminElement.vehiculos;
        vehiculoCardAdminElement.vehiculos = [...currentVehiculos, addedVehiculo];
        vehiculoCardAdminElement.closeModal(); // Cerrar el modal del Custom Element
      }
    });

    // Escuchar evento 'delete-vehiculo' desde VehiculoCardAdmin
    vehiculoCardAdminElement.addEventListener('delete-vehiculo', async (event) => {
      const { id, cardElement } = event.detail;
      const success = await deleteVehiculoLocally(id); // Llama a la función simulada
      if (success) {
        // Si se "eliminó" correctamente localmente, actualiza la lista en el componente
        const currentVehiculos = vehiculoCardAdminElement.vehiculos;
        vehiculoCardAdminElement.vehiculos = currentVehiculos.filter(vehiculo => vehiculo.id !== id);
        cardElement.remove(); // Eliminar la tarjeta del DOM
      }
    });
  }
});