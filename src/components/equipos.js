// ../components/equipos.js

// Estilos consolidados para ambos Custom Elements (EquiposCard y EquiposCardAdmin)
const cardStyles = `
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 2rem;
    }

    .card {
        background: #222;
        border: 1px solid #ff3c3c;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: fadeIn 0.4s ease-in-out;
        position: relative; /* Necesario para posicionar el botón de eliminar */
    }

    .card:hover {
        transform: translateY(-6px);
        box-shadow: 0 0 25px rgba(255, 60, 60, 0.4);
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

    .card img {
        width: 100%;
        height: 180px;
        object-fit: contain;
        display: block;
        background: linear-gradient(to bottom, #ffffff 10%, #222222 90%);
    }
    .info-section {
        padding: 1rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .info-section .title {
        font-size: 1.4rem;
        color: #ff1e00;
        font-weight: bold;
    }

    .info-section .country {
        font-size: 0.9rem;
        color:rgb(145, 145, 145);
    }

    .info-section .motor {
        background: rgba(255, 60, 60, 0.1);
        padding: 6px 12px;
        border-radius: 12px;
        display: inline-block;
        font-size: 0.9rem;
        border: 1px solid #ff3c3c;
        color: #ff1e00;
    }

    .pilotos-title {
        font-size: 0.85rem;
        color: #ff1e00;
        margin-top: 0.6rem;
    }

    .pilotos {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .chip {
        background: rgba(255, 60, 60, 0.1);
        color: #ff5c5c;
        padding: 5px 10px;
        border-radius: 16px;
        font-size: 0.75rem;
        border: 1px solid #ff5c5c;
    }

    /* Estilos de la barra de búsqueda */
    .input-box1 {
        display: flex;
        justify-content: center;
        width: 100%; /* Ajustable */
        max-width: 310px; /* Límite de ancho */
        margin: 20px auto; /* Centrar */
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
    
    /* Estilos específicos de la sección de administración */
    .button2 { /* Botón de eliminar */
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
    
    /* Estilos de Modal y Formulario */
    .input-box {
        position: relative;
        width: 310px;
        margin: 10px 0;
        border-bottom: 2px solid #000000;
    }
    .input-box label {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 1rem;
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
    .input-box input, .record input {
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
    h2 {
        font-weight: bold;
        font-size: 2rem;
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
`;

// Custom Element para mostrar los equipos (vista normal)
class EquiposCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    // Añadir los estilos al Shadow DOM
    const style = document.createElement("style");
    style.textContent = cardStyles;
    this.shadow.appendChild(style);

    // Barra de búsqueda
    const searchBox = document.createElement("div");
    searchBox.classList.add("input-box1");
    searchBox.innerHTML = `
      <div class="input-box2">
        <input id="searchInput" type="text" required placeholder=" ">
        <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar equipo...</label>
      </div>
    `;
    this.shadow.appendChild(searchBox);

    // Contenedor de las tarjetas de equipos
    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.shadow.appendChild(this.container);

    this._equiposData = []; // Propiedad interna para almacenar los datos
    this.searchInput = this.shadow.getElementById("searchInput");

    if (this.searchInput) {
      this.searchInput.addEventListener("input", () => {
        this.filterTeams(this.searchInput.value);
      });
    }
  }

  // Setter para la propiedad 'equipos'
  // Cuando se asigna un valor a .equipos, se ejecuta este código
  set equipos(data) {
    this._equiposData = data || []; // Asegura que sea un array
    this.renderTeams(this._equiposData); // Renderiza los equipos cuando se reciben
  }

  // Getter para acceder a los datos internos
  get equipos() {
    return this._equiposData;
  }

  // Función para renderizar las tarjetas de equipos
  renderTeams(teamsToRender) {
    this.container.innerHTML = ""; // Limpiar tarjetas existentes
    if (teamsToRender.length === 0) {
      this.container.innerHTML = `<p style="color: white; text-align: center;">No se encontraron equipos.</p>`;
    } else {
      teamsToRender.forEach(equipo => this.agregarTarjeta(equipo));
    }
  }

  // Función para añadir una tarjeta individual
  agregarTarjeta(equipo) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${equipo.imagen}" alt="${equipo.nombre}">
      <div class="info-section">
        <div class="title">${equipo.nombre}</div>
        <div class="country">${equipo.pais}</div>
        <div class="motor">Motor: ${equipo.motor}</div>
        <div class="pilotos-title">Pilotos:</div>
        <div class="pilotos">
          ${equipo.pilotos && equipo.pilotos.map(p => `<span class="chip">${p}</span>`).join('') || 'N/A'}
        </div>
      </div>
    `;
    this.container.appendChild(card);
  }

  // Función para filtrar equipos (búsqueda)
  filterTeams(searchValue) {
    const value = searchValue.toLowerCase();
    const filteredTeams = this._equiposData.filter(p =>
      p.nombre.toLowerCase().includes(value) ||
      p.pais.toLowerCase().includes(value) ||
      p.motor.toLowerCase().includes(value) ||
      (p.pilotos && p.pilotos.some(pilot => pilot.toLowerCase().includes(value)))
    );
    this.renderTeams(filteredTeams);
  }
}

// Definir el Custom Element
customElements.define('equipos-card', EquiposCard);


// Custom Element para la administración de equipos (añadir/eliminar)
class EquiposCardAdmin extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        
        // Añadir los estilos al Shadow DOM
        const style = document.createElement("style");
        style.textContent = cardStyles;
        this.shadow.appendChild(style);

        // Barra de búsqueda
        const searchBox = document.createElement("div");
        searchBox.classList.add("input-box1");
        searchBox.innerHTML = `
          <div class="input-box2">
            <input id="searchInput" type="text" required placeholder=" ">
            <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar equipo...</label>
          </div>
        `;
        this.shadow.appendChild(searchBox);
    
        this.container = document.createElement("div")
        this.container.classList.add("container")
        this.shadow.appendChild(this.container);

        this._equiposData = []; // Aquí se almacenarán los datos de los equipos

        // Botón para añadir equipo
        const buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('data-modal-target', '#modal');
        buttonAdd.id = 'buttonAdd';
        buttonAdd.textContent = 'Agregar Equipo';
        this.shadow.appendChild(buttonAdd);

        // Overlay para el modal
        const overlay = document.createElement('div');
        overlay.id = "overlay";
        this.shadow.appendChild(overlay);

        // Formulario de añadir equipo (modal)
        const formAdd = document.createElement('form');
        formAdd.classList.add("modal");
        formAdd.id = 'modal';
        formAdd.innerHTML = `
          <div class="modal-header">
            <h2>Nuevo Equipo</h2>
            <button data-close-button class="close-button">&times;</button>
          </div>
          <div class="modal-body">
            <div class="input-box"><input id="name" type="text" required><label>Nombre</label></div>
            <div class="input-box"><input type="text" required id="country"><label>Pais</label></div>
            <div class="input-box"><input type="text" required id="motor"><label>Motor</label></div>
            <div class="input-box"><input type="text" required id="pilots"><label>Pilotos (coma separadas)</label></div>
            <div class="input-box"><input type="text" required id="image"><label>Url Imagen</label></div>
            <button type="submit" class="button">Agregar</button>
          </div>
        `;
        this.shadow.appendChild(formAdd);
        
        // Event Listeners para búsqueda y modal
        this.searchInput = this.shadow.getElementById("searchInput");
        if (this.searchInput) {
            this.searchInput.addEventListener("input", () => {
                this.filterTeams(this.searchInput.value);
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

    // Setter para la propiedad 'equipos'
    set equipos(data) {
        this._equiposData = data || [];
        this.renderTeams(this._equiposData);
    }

    get equipos() {
        return this._equiposData;
    }

    renderTeams(teamsToRender) {
        this.container.innerHTML = "";
        if (teamsToRender.length === 0) {
          this.container.innerHTML = `<p style="color: white; text-align: center;">No se encontraron equipos.</p>`;
        } else {
          teamsToRender.forEach(equipo => this.agregarTarjeta(equipo));
        }
    }

    agregarTarjeta(equipo) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${equipo.imagen}" alt="${equipo.nombre}">
          <div class="info-section">
            <div class="title">${equipo.nombre}</div>
            <div class="country">${equipo.pais}</div>
            <div class="motor">Motor: ${equipo.motor}</div>
            <div class="pilotos-title">Pilotos:</div>
            <div class="pilotos">
              ${equipo.pilotos && equipo.pilotos.map(p => `<span class="chip">${p}</span>`).join('') || 'N/A'}
            </div>
          </div>
          <button class="button2" data-team-id="${equipo.id || Date.now()}">
            <box-icon name='trash' type='solid' color='#ffffff'></box-icon>
          </button>
        `;
        
        // Manejar el botón de eliminar
        const deleteButton = card.querySelector('.button2');
        deleteButton.addEventListener('click', (e) => {
            const teamId = e.currentTarget.dataset.teamId;
            // Disparar un evento personalizado para que teams.js lo maneje
            this.dispatchEvent(new CustomEvent('delete-team', {
                detail: { id: teamId, cardElement: card },
                bubbles: true,
                composed: true
            }));
        });
        
        this.container.appendChild(card);
    }

    // Manejador del submit del formulario, dispara un evento personalizado
    handleFormSubmit(event) {
        event.preventDefault();

        const newTeamData = {
            // Generar un ID temporal para el manejo local
            id: `temp-${Date.now()}`, 
            nombre: this.shadow.getElementById('name').value,
            pais: this.shadow.getElementById('country').value,
            motor: this.shadow.getElementById('motor').value,
            pilotos: this.shadow.getElementById('pilots').value.split(',').map(h => h.trim()),
            imagen: this.shadow.getElementById('image').value
        };

        // Disparar un evento personalizado para que teams.js lo maneje
        this.dispatchEvent(new CustomEvent('add-team', {
            detail: newTeamData,
            bubbles: true,
            composed: true
        }));

        // Limpiar campos del formulario
        this.shadow.getElementById('name').value = "";
        this.shadow.getElementById('country').value = "";
        this.shadow.getElementById('motor').value = "";
        this.shadow.getElementById('pilots').value = "";
        this.shadow.getElementById('image').value = "";
    }

    filterTeams(searchValue) {
        const value = searchValue.toLowerCase();
        const filteredTeams = this._equiposData.filter(p =>
            p.nombre.toLowerCase().includes(value) ||
            p.pais.toLowerCase().includes(value) ||
            p.motor.toLowerCase().includes(value) ||
            (p.pilotos && p.pilotos.some(pilot => pilot.toLowerCase().includes(value)))
        );
        this.renderTeams(filteredTeams);
    }

    // Método para cerrar el modal desde fuera (después de una operación de API simulada)
    closeModal() {
        const form = this.shadow.getElementById('modal');
        const overlayElement = this.shadow.getElementById('overlay');
        if (form && overlayElement) {
            form.classList.remove('active');
            overlayElement.classList.remove('active');
        }
    }
}

// Definir el Custom Element de administración
customElements.define('equipos-card-admin', EquiposCardAdmin);