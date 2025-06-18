// ../components/vehiculos.js

// Estilos consolidados para ambos Custom Elements de vehículos
const vehiculoCardStyles = `
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Ajustado para mejor responsividad */
      gap: 2rem;
      padding: 2rem;
      font-family: "Bruno Ace SC"; /* Considera mover font-family a un stylesheet global */
    }

    .card {
      background-color: #1c1c1e;
      color:rgb(255, 0, 0);
      border: 2px solidrgb(255, 5, 5);
      border-radius: 16px;
      padding: 1.2rem;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
      animation: fadeIn 0.4s ease-in-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
    }

    .card h2 {
      font-size: 1.5rem;
      margin: 0;
      color: #ff3c3c;
    }

    .card .subtitulo {
      font-size: 1rem;
      color: #bbb;
      font-style: italic;
      margin-bottom: 0.8rem;
    }

    .card img {
      width: 100%;
      height: 180px; /* Altura fija para consistencia */
      border-radius: 10px;
      border: 2px solid #ff3c3c;
      object-fit: contain; /* Cambiado a 'contain' para mostrar logos/coches completos */
      margin-bottom: 1rem;
    }

    .card .stats p {
      font-size: 0.95rem;
      margin: 0.3rem 0;
      color:white;
    }

    .card hr {
      border: none;
      border-top: 1px solid #444;
      margin: 0.8rem 0;
    }

    .card .modo {
      margin-top: 0.8rem;
      color: #ff3c3c;
      font-weight: bold;
    }

    .card p {
      font-size: 0.9rem;
      line-height: 1.4;
      margin: 0.2rem 0;
      color:white;
    }

    /* Estilos del botón de eliminar */
    .button2 {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 35px;
      height: 35px;
      background: #d32f2f;
      border: 2px solid #b71c1c;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.2s, background 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button2:hover {
      background: #b71c1c;
      transform: scale(1.1);
    }

    .button2:active {
      transform: scale(0.9);
      background: #880e4f;
    }
    
    /* Estilos de la barra de búsqueda */
    .input-box1 {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 310px;
      margin: 20px auto;
    }

    .input-box2 {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .input-box2 input {
      width: 100%;
      height: 40px;
      padding: 10px 15px;
      background: transparent;
      border: 2px solid #fff;
      border-radius: 30px;
      color: white;
      font-size: 16px;
      outline: none;
      transition: 0.3s ease;
    }

    .input-box2 input:focus {
      border-color: #ff1f1f;
      box-shadow: 0 0 10px #ff1f1f;
    }

    .input-box2 label {
      position: absolute;
      left: 15px;
      display: flex;
      align-items: center;
      top: 50%;
      transform: translateY(-50%);
      color: #ccc;
      pointer-events: none;
      transition: 0.3s ease;
      font-size: 14px;
    }

    .input-box2 input:focus + label,
    .input-box2 input:not(:placeholder-shown) + label {
      top: 0;
      left: 12px;
      font-size: 12px;
      background: #b60000;
      padding: 0 6px;
      border-radius: 12px;
      color: #fff;
    }

    /* Estilos de Modal y Formulario */
    .input-box {
      position: relative;
      width: 350px;
      margin: 10px 0;
      border-bottom: 2px solid #000000;
    }
    .input-box label {
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      font-size: .9rem;
      color: #000000;
      pointer-events: none;
      transition: .5s;
    }
    .input-box input:focus~label,
    .input-box input:valid~label {
      top: -5px;
      background-color: #fff;
      padding: 0 5px;
      color: #ff1f1f;
    }
    .input-box input {
      width: 100%;
      height: 40px;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
      color: #000000;
      padding: 0 0px 0 5px;
    }
    .button {
      width: 100%;
      height: 40px;
      background: rgb(225, 6, 0);
      border: none;
      outline: none;
      border-radius: 40px;
      cursor: pointer;
      font-size: 1em;
      color: #ffffff;
      font-weight: 500;
      font-family: "Bruno Ace SC";
    }
    .modal {
      position: fixed;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 50%) scale(0);
      transition: 200ms ease-in-out;
      background-color: #ffffff;
      border-radius: 10px;
      z-index: 50000;
      width: 500px;
      max-width: 80%;
    }
    .modal.active {
      transform: translate(-50%, 50%) scale(1);
    }
    .modal-header {
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e4dddd;
    }
    .modal-header h2 {
      font-weight: bold;
      font-size: 1.5rem; /* Ajustado el tamaño de fuente para el h2 del modal */
      color: #000000;
      margin: 0;
      text-align: center;
    }

    .modal-header .close-button {
      cursor: pointer;
      border: none;
      outline: none;
      background: none;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .modal-body {
      display: flex;
      flex-direction: column; 
      justify-content: center;
      align-items: center;
      padding: 10px 15px;
    }
    #overlay {
      position: fixed;
      opacity: 0;
      transition: 200ms ease-in-out;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 30000;
      background-color: rgba(0, 0, 0, 0.54);
      pointer-events: none;
    }
    #overlay.active {
      pointer-events: all;
      opacity: 1;
    }
    
    /* Media queries */
    @media screen and (max-width: 1500px) {
      .container {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
    
    #buttonAdd {
      padding: 10px 10px;
      position: fixed; 
      bottom: 5%;
      font-family: "Bruno Ace SC";
      right: 10px;
      box-shadow: 0px 3px 20px rgba(255, 255, 255, 0.4);
      background-color: rgb(0, 0, 0);
      z-index: 20000;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 40px;
      cursor: pointer;
      font-size: 1em;
      color: #ffffff;
      font-weight: 500;
    }
    .record { /* Contenedor para inputs en línea en el modal */
        display: flex;
        flex-wrap: wrap; /* Permite que los elementos se envuelvan en pantallas pequeñas */
        width: 100%; /* Ajuste a 100% del contenedor del modal-body */
        justify-content: center;
        gap: 10px; /* Espacio entre los input-box */
        margin-bottom: 15px; /* Espacio debajo de cada grupo de inputs */
    }
    .record .input-box {
        flex-grow: 1; /* Permite que los input-box se expandan */
        min-width: 150px; /* Ancho mínimo para cada input-box */
        width: auto; /* Ancho automático para flexibilidad */
    }
    .record label {
        font-size: .8rem;
        color:rgba(0, 0, 0, 0.51);
        position: absolute; /* Mantiene el posicionamiento relativo al input-box */
        top:50%;
        left: 5px;
        transform: translateY(-50%);
        pointer-events: none;
        transition: .5s;
    }

    @media(max-width: 428px){
        .input-box{
            width: 90%; /* Ajustado para pantallas muy pequeñas */
            margin: 7px auto;
        }
        .record{
            width: 100%;
            flex-direction: column; /* Apila los inputs en pantallas pequeñas */
            gap: 10px;
            align-items: center;
        }
        .record .input-box {
            width: 100%;
            max-width: 290px; /* Límite para que no sean demasiado anchos */
        }
    }
`;

// Custom Element para mostrar los vehículos (vista normal)
class VehiculoCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  
    const style = document.createElement("style");
    style.textContent = vehiculoCardStyles;
    this.shadow.appendChild(style);
  
    const searchBox = document.createElement("div");
    searchBox.classList.add("input-box1");
    searchBox.innerHTML = `
      <div class="input-box2">
        <input id="searchInput" type="text" required placeholder=" ">
        <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar vehículo...</label>
      </div>
    `;
    this.shadow.appendChild(searchBox);
  
    this.container = document.createElement("div")
    this.container.classList.add("container")
    this.shadow.appendChild(this.container);

    this._vehiculosData = []; // Propiedad interna para almacenar los datos
    this.searchInput = this.shadow.getElementById("searchInput");

    if (this.searchInput) {
      this.searchInput.addEventListener("input", () => {
        this.filterVehiculos(this.searchInput.value);
      });
    }
  }

  // Setter para la propiedad 'vehiculos'
  set vehiculos(data) {
    this._vehiculosData = data || []; // Asegura que sea un array
    this.renderVehiculos(this._vehiculosData); // Renderiza los vehículos cuando se reciben
  }

  // Getter para acceder a los datos internos
  get vehiculos() {
    return this._vehiculosData;
  }

  // Función para renderizar las tarjetas de vehículos
  renderVehiculos(vehiculosToRender) {
    this.container.innerHTML = ""; // Limpiar tarjetas existentes
    if (vehiculosToRender.length === 0) {
      this.container.innerHTML = `<p style="color: white; text-align: center;">No se encontraron vehículos.</p>`;
    } else {
      vehiculosToRender.forEach(vehiculo => this.agregarTarjeta(vehiculo));
    }
  }

  // Función para añadir una tarjeta individual de vehículo
  agregarTarjeta(vehiculo) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    // Asegurarse de que las propiedades anidadas existen antes de acceder a ellas
    // Usamos optional chaining (?.) para evitar errores si la propiedad no existe
    const normalConduccion = vehiculo.rendimiento?.conduccion_normal;
    const agresivaConduccion = vehiculo.rendimiento?.conduccion_agresiva;
    const ahorroCombustible = vehiculo.rendimiento?.ahorro_combustible;

    card.innerHTML = `
      <h2>${vehiculo.equipo || 'N/A'}</h2>
      <div class="subtitulo">${vehiculo.modelo || 'N/A'} – ${vehiculo.motor || 'N/A'}</div>
      <img src="${vehiculo.imagen || ''}" alt="Vehículo ${vehiculo.equipo || 'N/A'}">
      <div class="stats">
        <p><strong>Velocidad máx:</strong> ${vehiculo.velocidad_maxima_kmh || 'N/A'} km/h</p>
        <p><strong>0-100 km/h:</strong> ${vehiculo.aceleracion_0_100 || 'N/A'} s</p>
      </div>
      <hr>
      <div>
        <p class="modo">Conducción Normal</p>
        <p>Vel. promedio: ${normalConduccion?.velocidad_promedio_kmh || 'N/A'} km/h</p>
        <p>Combustible (seco): ${normalConduccion?.consumo_combustible?.seco || 'N/A'} L/km</p>
        <p>Neumáticos (extremo): ${normalConduccion?.desgaste_neumaticos?.extremo || 'N/A'} %</p>
  
        <p class="modo">Conducción Agresiva</p>
        <p>Vel. promedio: ${agresivaConduccion?.velocidad_promedio_kmh || 'N/A'} km/h</p>
  
        <p class="modo">Ahorro Combustible</p>
        <p>Vel. promedio: ${ahorroCombustible?.velocidad_promedio_kmh || 'N/A'} km/h</p>
      </div>
    `;
    this.container.appendChild(card);
  }
  
  // Función para filtrar vehículos (búsqueda)
  filterVehiculos(searchValue) {
    const value = searchValue.toLowerCase();
  
    const resultados = this._vehiculosData.filter(v =>
      (v.equipo && v.equipo.toLowerCase().includes(value)) ||
      (v.modelo && v.modelo.toLowerCase().includes(value)) ||
      (v.motor && v.motor.toLowerCase().includes(value))
    );
    this.renderVehiculos(resultados);
  }
}

// Definir el Custom Element
customElements.define("vehiculo-card", VehiculoCard);

// Custom Element para la administración de vehículos (añadir/eliminar)
class VehiculoCardAdmin extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  
    const style = document.createElement("style");
    style.textContent = vehiculoCardStyles;
    this.shadow.appendChild(style);
  
    const searchBox = document.createElement("div");
    searchBox.classList.add("input-box1");
    searchBox.innerHTML = `
      <div class="input-box2">
        <input id="searchInput" type="text" required placeholder=" ">
        <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar vehículo...</label>
      </div>
    `;
    this.shadow.appendChild(searchBox);
  
    this.container = document.createElement("div")
    this.container.classList.add("container")
    this.shadow.appendChild(this.container);

    this._vehiculosData = []; // Propiedad interna para almacenar los datos

    // Botón para añadir vehículo
    const buttonAdd = document.createElement('button')
    buttonAdd.setAttribute('data-modal-target', '#modal')
    buttonAdd.id = 'buttonAdd'
    buttonAdd.textContent = 'Agregar Vehiculo'
    this.shadow.appendChild(buttonAdd);

    // Overlay y Formulario de añadir vehículo (modal)
    const overlay = document.createElement('div')
    overlay.id = "overlay"
    const formAdd = document.createElement('form')
    formAdd.classList.add("modal")
    formAdd.id = 'modal'
    formAdd.innerHTML = `
      <div class="modal-header">
        <h2>Nuevo Vehículo</h2>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        <div class="input-box">
          <input id="equipo" type="text" required>
          <label>Equipo</label>
        </div>
        <div class="input-box">
          <input id="modelo" type="text" required>
          <label>Modelo</label>
        </div>
        <div class="input-box">
          <input id="motor" type="text" required>
          <label>Motor</label>
        </div>

        <div class="record-container"> 
          <p>Rendimiento General</p>
          <div class="record">
            <div class="input-box">    
              <input type="number" required id="vel_max" step="any">
              <label>Velocidad Máxima (km/h)</label>
            </div>
            <div class="input-box">    
              <input type="number" required id="aceleracion" step="0.01">
              <label>Aceleración 0-100 km/h (s)</label>
            </div>
          </div>
        </div>
        
        <div class="input-box">
          <input id="pilotos_ids" type="text" required>
          <label>ID pilotos (comas separadas)</label>
        </div>

        <div class="record-container"> 
            <p>Conducción Normal</p>
            <div class="record">
                <div class="input-box">    
                <input type="number" required id="vel_cn" step="any">
                <label>Vel. promedio</label>
                </div>
                <div class="input-box">    
                <input type="number" required id="comb_seco_cn" step="any">
                <label>Combustible seco</label>
                </div>
                <div class="input-box">    
                <input type="number" required id="desg_extremo_cn" step="any">
                <label>Desgaste neumáticos extremo</label>
                </div>
            </div>
        </div>

        <div class="record-container"> 
                <p>Conducción Agresiva</p>
                <div class="record">
                    <div class="input-box">    
                    <input type="number" required id="vel_ca" step="any">
                    <label>Vel. promedio</label>
                    </div>
                    </div>
        </div>
        <div class="record-container"> 
                <p>Ahorro Combustible</p>
                <div class="record">
                    <div class="input-box">    
                    <input type="number" required id="vel_ah" step="any">
                    <label>Vel. promedio</label>
                    </div>
                    </div>
        </div>

        <div class="input-box">
          <input id="imagen" type="text" required>
          <label>URL Imagen</label>
        </div>

        <button type="submit" class="button">Agregar</button>
      </div>
    `;
    this.shadow.appendChild(overlay);
    this.shadow.appendChild(formAdd);
      
    // Event Listeners para búsqueda y modal
    this.searchInput = this.shadow.getElementById("searchInput");
    if (this.searchInput) {
      this.searchInput.addEventListener("input", () => {
        this.filterVehiculos(this.searchInput.value);
      });
    }
  
    const openModalButtons = this.shadow.querySelectorAll('[data-modal-target]');
    const closeModalButtons = this.shadow.querySelectorAll('[data-close-button]');
    const overlayElement = this.shadow.getElementById('overlay');
  
    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = this.shadow.querySelector(button.dataset.modalTarget);
        if (modal) {
          modal.classList.add('active');
          overlayElement.classList.add('active');
        }
      });
    });
  
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
          overlayElement.classList.remove('active');
        }
      });
    });

    const form = this.shadow.getElementById('modal');
    if (form) {
      form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }
  }

  // Setter para la propiedad 'vehiculos'
  set vehiculos(data) {
    this._vehiculosData = data || [];
    this.renderVehiculos(this._vehiculosData);
  }

  get vehiculos() {
    return this._vehiculosData;
  }

  renderVehiculos(vehiculosToRender) {
    this.container.innerHTML = "";
    if (vehiculosToRender.length === 0) {
      this.container.innerHTML = `<p style="color: white; text-align: center;">No se encontraron vehículos.</p>`;
    } else {
      vehiculosToRender.forEach(vehiculo => this.agregarTarjeta(vehiculo));
    }
  }

  agregarTarjeta(vehiculo) {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const normalConduccion = vehiculo.rendimiento?.conduccion_normal;
    const agresivaConduccion = vehiculo.rendimiento?.conduccion_agresiva;
    const ahorroCombustible = vehiculo.rendimiento?.ahorro_combustible;

    card.innerHTML = `
      <h2>${vehiculo.equipo || 'N/A'}</h2>
      <div class="subtitulo">${vehiculo.modelo || 'N/A'} – ${vehiculo.motor || 'N/A'}</div>
      <img src="${vehiculo.imagen || ''}" alt="Vehículo ${vehiculo.equipo || 'N/A'}">
      <div class="stats">
        <p><strong>Velocidad máx:</strong> ${vehiculo.velocidad_maxima_kmh || 'N/A'} km/h</p>
        <p><strong>0-100 km/h:</strong> ${vehiculo.aceleracion_0_100 || 'N/A'} s</p>
      </div>
      <hr>
      <div>
        <p class="modo">Conducción Normal</p>
        <p>Vel. promedio: ${normalConduccion?.velocidad_promedio_kmh || 'N/A'} km/h</p>
        <p>Combustible (seco): ${normalConduccion?.consumo_combustible?.seco || 'N/A'} L/km</p>
        <p>Neumáticos (extremo): ${normalConduccion?.desgaste_neumaticos?.extremo || 'N/A'} %</p>
  
        <p class="modo">Conducción Agresiva</p>
        <p>Vel. promedio: ${agresivaConduccion?.velocidad_promedio_kmh || 'N/A'} km/h</p>
  
        <p class="modo">Ahorro Combustible</p>
        <p>Vel. promedio: ${ahorroCombustible?.velocidad_promedio_kmh || 'N/A'} km/h</p>
      </div>
      <button class="button2" data-vehiculo-id="${vehiculo.id || Date.now()}">
        <box-icon name='trash' type='solid' color='#ffffff'></box-icon>
      </button>
    `;
    
    const deleteButton = card.querySelector(".button2");
    deleteButton.addEventListener("click", (e) => {
      const vehiculoId = e.currentTarget.dataset.vehiculoId;
      this.dispatchEvent(new CustomEvent('delete-vehiculo', {
          detail: { id: vehiculoId, cardElement: card },
          bubbles: true,
          composed: true
      }));
    });
  
    this.container.appendChild(card);
  }

  // Manejador del submit del formulario, dispara un evento personalizado
  handleFormSubmit(event) {
    event.preventDefault();
  
    const nuevoVehiculoData = {
      // Generar un ID temporal para el manejo local
      id: `temp-${Date.now()}`,
      equipo: this.shadow.getElementById("equipo").value,
      modelo: this.shadow.getElementById("modelo").value,
      motor: this.shadow.getElementById("motor").value,
      velocidad_maxima_kmh: Number(this.shadow.getElementById("vel_max").value),
      aceleracion_0_100: Number(this.shadow.getElementById("aceleracion").value),
      // Es importante que pilotos sea un array de números o strings, según lo esperes
      pilotos: this.shadow.getElementById("pilotos_ids").value.split(',').map(p => parseInt(p.trim()) || p.trim()), 
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: Number(this.shadow.getElementById("vel_cn").value),
          consumo_combustible: {
            seco: Number(this.shadow.getElementById("comb_seco_cn").value),
            lluvioso: 0, // Puedes añadir inputs si los necesitas
            extremo: 0
          },
          desgaste_neumaticos: {
            seco: 0,
            lluvioso: 0,
            extremo: Number(this.shadow.getElementById("desg_extremo_cn").value)
          }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: Number(this.shadow.getElementById("vel_ca").value),
          consumo_combustible: { seco: 0, lluvioso: 0, extremo: 0 },
          desgaste_neumaticos: { seco: 0, lluvioso: 0, extremo: 0 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: Number(this.shadow.getElementById("vel_ah").value),
          consumo_combustible: { seco: 0, lluvioso: 0, extremo: 0 },
          desgaste_neumaticos: { seco: 0, lluvioso: 0, extremo: 0 }
        }
      },
      imagen: this.shadow.getElementById("imagen").value
    };

    this.dispatchEvent(new CustomEvent('add-vehiculo', {
        detail: nuevoVehiculoData,
        bubbles: true,
        composed: true
    }));

    // Limpiar campos y cerrar modal
    event.target.reset(); // Resetea el formulario
    this.closeModal();
  }
  
  filterVehiculos(searchValue) {
    const value = searchValue.toLowerCase();
  
    const resultados = this._vehiculosData.filter(v =>
      (v.equipo && v.equipo.toLowerCase().includes(value)) ||
      (v.modelo && v.modelo.toLowerCase().includes(value)) ||
      (v.motor && v.motor.toLowerCase().includes(value))
    );
    this.renderVehiculos(resultados);
  }

  // Método para cerrar el modal desde fuera
  closeModal() {
      const form = this.shadow.getElementById('modal');
      const overlayElement = this.shadow.getElementById('overlay');
      if (form && overlayElement) {
          form.classList.remove('active');
          overlayElement.classList.remove('active');
      }
  }
}

customElements.define("vehiculo-card-admin", VehiculoCardAdmin);