// src/components/circuitos.js

// Estilos consolidados para ambos Custom Elements de circuitos
const circuitoCardStyles = `
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Ajustado para responsividad */
      gap: 2rem;
      padding: 2rem;
    }

    .card {
      background: #222;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position:relative;
      border: 2px solid #ff3c3c; /* Añadido borde de la versión admin */
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
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); /* Sombra mejorada en hover */
    }

    .card .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #ff3c3c; /* Borde inferior para separar de imagen */
      background: #1f1f1f;
      padding: 0.75rem 1rem;
      border-radius: 10px 10px 0 0;
      font-weight: bold;
      color: #fff;
    }

    .track-img {
      width: 100%;
      height: 180px;
      object-fit: contain;
      border-bottom: 2px solid #ff1e00;
      background-color:white;
    }

    .info, .record, .winners, .description {
      padding: 1rem;
      color: #ddd;
    }

    .info {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
    }

    .section-title {
      color: #ff1e00;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .description {
      font-size: 0.95rem;
      line-height: 1.4;
      color: #bbb;
    }

    .winners ul {
      list-style: none;
      padding-left: 0;
      font-size: 0.85rem;
    }

    .winners li {
      margin-bottom: 0.3rem;
    }

    /* Estilos del botón de eliminar (Admin) */
    .button2 {
        position: absolute;
        bottom: 5px; /* Ajustado a bottom para no tapar el header */
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
    .input-box1{
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

    /* Estilos de Modal y Formulario (Admin) */
    .input-box{
      position: relative;
      width: 310px;
      margin: 10px 0;
      border-bottom: 2px solid #000000;
    }
    .input-box label{
      position: absolute;
      top:50%;
      left: 5px;
      transform: translateY(-50%);
      font-size: 1rem;
      color: #000000;
      pointer-events: none;
      transition: .5s;
    }
    .input-box input:focus~label,
    .input-box input:valid~label{
      top: -5px;
      background-color: #fff;
      padding: 0 5px;
      color: #ff1f1f;
    }
    .input-box input, .record input{
      width: 100%;
      height: 40px;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
      color: #000000;
      padding: 0 0px 0 5px;
    }
    .button{
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
    .modal{
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
    .modal.active{
      transform: translate(-50%, 50%) scale(1);
    }
    .modal-header{
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e4dddd;
    }
    .modal-header h2{
      font-weight: bold;
      font-size: 2rem;
      color: #000000;
      margin: 0;
      text-align: center;
    }

    .modal-header .close-button{
      cursor: pointer;
      border: none;
      outline: none;
      background: none;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .modal-body{
      display: flex;
      flex-direction: column; 
      justify-content: center;
      align-items: center;
      padding: 10px 15px;
    }
    #overlay{
      position: fixed;
      opacity: 0;
      transition: 200ms ease-in-out;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 30000;
      background-color:rgba(0, 0, 0, 0.54);
      pointer-events: none
    }
    #overlay.active{
      pointer-events: all;
      opacity: 1;
    }
    
    @media screen and (max-width: 1500px) {
      .container {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
    
    #buttonAdd{
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
    .record{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        gap: 10px;
        margin-bottom: 15px;
    }
    .record .input-box {
        flex-grow: 1;
        min-width: 150px;
        width: auto;
    }
    .record label{
        font-size: .8rem;
        color:rgba(0, 0, 0, 0.51);
        position: absolute;
        top:50%;
        left: 5px;
        transform: translateY(-50%);
        pointer-events: none;
        transition: .5s;
    }
    @media(max-width: 428px){
        .input-box{
            width: 90%;
            margin: 7px auto;
        }
        .record{
            width: 100%;
            flex-direction: column;
            gap: 10px;
            align-items: center;
        }
        .record .input-box {
            width: 100%;
            max-width: 290px;
        }
    }
`;

// Custom Element para mostrar los circuitos (vista normal)
class CircuitoCard extends HTMLElement {
  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    
    const style = document.createElement("style");
    style.textContent = circuitoCardStyles;
    this.shadow.appendChild(style);

    const searchBox = document.createElement("div");
    searchBox.classList.add("input-box1");
    searchBox.innerHTML = `
      <div class="input-box2">
        <input id="searchInput" type="text" required placeholder=" ">
        <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar circuito...</label>
      </div>
    `;
    this.shadow.appendChild(searchBox);

    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.shadow.appendChild(this.container);

    this._circuitosData = []; // Propiedad interna para almacenar los datos
    this.searchInput = this.shadow.getElementById("searchInput");

    if (this.searchInput) {
      this.searchInput.addEventListener("input", () => {
        this.filterCircuitos(this.searchInput.value);
      });
    }
  }

  // Setter para la propiedad 'circuitos'
  set circuitos(data) {
    this._circuitosData = data || []; // Asegura que sea un array
    this.renderCircuitos(this._circuitosData); // Renderiza los circuitos cuando se reciben
  }

  // Getter para acceder a los datos internos
  get circuitos() {
    return this._circuitosData;
  }

  // Función para renderizar las tarjetas de circuitos
  renderCircuitos(circuitosToRender) {
    this.container.innerHTML = ""; // Limpiar tarjetas existentes
    if (circuitosToRender.length === 0) {
      this.container.innerHTML = `<p style="color: white; text-align: center;">No se encontraron circuitos.</p>`;
    } else {
      circuitosToRender.forEach(circuito => this.agregarTarjeta(circuito));
    }
  }

  // Función para añadir una tarjeta individual de circuito
  agregarTarjeta(circuito) {
    const winnersList = circuito.ganadores?.map(g => `<li>${g.temporada || 'N/A'}: ${g.piloto || 'N/A'}</li>`).join('') || '';
    const recordVuelta = circuito.record_vuelta;

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute('data-id', circuito.id || ''); // Asegurarse de que haya un ID para admin si es necesario
    card.innerHTML = `
      <div class="header">
        <div class="title">${circuito.nombre || 'N/A'}</div>
        <div class="country">${circuito.pais || 'N/A'}</div>
      </div>
      <img class="track-img" src="${circuito.imagen || ''}" alt="${circuito.nombre || 'Circuito'}">
      <div class="info">
        <div><strong>Longitud:</strong><br>${circuito.longitud_km || 'N/A'} km</div>
        <div><strong>Vueltas:</strong><br>${circuito.vueltas || 'N/A'}</div>
      </div>
      <div class="description">${circuito.descripcion || 'N/A'}</div>
      <div class="record">
        <div class="section-title">Récord de Vuelta:</div>
        ${recordVuelta?.tiempo || 'N/A'} - ${recordVuelta?.piloto || 'N/A'} (${recordVuelta?.año || 'N/A'})
      </div>
      <div class="winners">
        <div class="section-title">Ganadores recientes:</div>
        <ul>${winnersList || 'N/A'}</ul>
      </div>
    `;
    this.container.appendChild(card);
  }

  // Función para filtrar circuitos (búsqueda)
  filterCircuitos(searchValue) {
    const value = searchValue.toLowerCase();
    const filteredCircuitos = this._circuitosData.filter(c =>
      (c.nombre && c.nombre.toLowerCase().includes(value)) ||
      (c.pais && c.pais.toLowerCase().includes(value))
    );
    this.renderCircuitos(filteredCircuitos);
  }
}

// Definir el Custom Element
customElements.define('circuito-card', CircuitoCard);


// Custom Element para la administración de circuitos (añadir/eliminar)
class CircuitoCardAdmin extends HTMLElement {
  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    
    const style = document.createElement("style");
    style.textContent = circuitoCardStyles; // Aplicar estilos consolidados
    this.shadow.appendChild(style);

    const searchBox = document.createElement("div");
    searchBox.classList.add("input-box1");
    searchBox.innerHTML = `
      <div class="input-box2">
        <input id="searchInput" type="text" required placeholder=" ">
        <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar circuito...</label>
      </div>
    `;
    this.shadow.appendChild(searchBox);

    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.shadow.appendChild(this.container);

    this._circuitosData = []; // Propiedad interna para almacenar los datos

    // Botón para añadir circuito
    const buttonAdd = document.createElement('button');
    buttonAdd.setAttribute('data-modal-target', '#modal');
    buttonAdd.id = 'buttonAdd';
    buttonAdd.textContent = 'Agregar Circuito';
    this.shadow.appendChild(buttonAdd);

    // Overlay y Formulario de añadir circuito (modal)
    const overlay = document.createElement('div');
    overlay.id = "overlay";
    const formAdd = document.createElement('form');
    formAdd.classList.add("modal");
    formAdd.id = 'modal';
    formAdd.innerHTML = `
      <div class="modal-header">
        <h2>Nuevo Circuito</h2>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        <div class="input-box">
          <input id="name" type="text" required>
          <label>Nombre</label>
        </div>
        <div class="input-box">    
          <input type="text" required id="country">
          <label>País</label>
        </div>
        <div class="input-box">    
          <input type="number" required id="lenght" step="any">
          <label>Longitud (Km)</label>
        </div>
        <div class="input-box">    
          <input type="number" required id="laps">
          <label>Vueltas</label>
        </div>
        <div class="input-box">    
          <input type="text" required id="description">
          <label>Descripción</label>
        </div>
        <div class="input-box">    
          <input type="text" required id="track">
          <label>Condiciones de pista</label>
        </div>
        <div class="record-container"> 
          <p>Récord vuelta</p>
          <div class="record">
            <div class="input-box">    
              <input type="text" required id="time">
              <label>Tiempo</label>
            </div>
            <div class="input-box">    
              <input type="text" required id="pilot">
              <label>Piloto</label>
            </div>
            <div class="input-box">    
              <input type="number" required id="year">
              <label>Año</label>
            </div>
          </div>
        </div>
        <div class="record-container"> 
          <p>Ganadores (temporada,piloto; temporada,piloto)</p>
          <div class="record">
            <div class="input-box" style="width: 100%;">    
              <input type="text" required id="winners_input">
              <label>Ej: 2023,Max Verstappen; 2022,Sergio Pérez</label>
            </div>
          </div>
        </div>
        <div class="input-box">    
          <input type="text" required id="image">
          <label>Url Imagen</label>
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
        this.filterCircuitos(this.searchInput.value);
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

  // Setter para la propiedad 'circuitos'
  set circuitos(data) {
    this._circuitosData = data || [];
    this.renderCircuitos(this._circuitosData);
  }

  get circuitos() {
    return this._circuitosData;
  }

  renderCircuitos(circuitosToRender) {
    this.container.innerHTML = "";
    if (circuitosToRender.length === 0) {
      this.container.innerHTML = `<p style="color: white; text-align: center;">No se encontraron circuitos.</p>`;
    } else {
      circuitosToRender.forEach(circuito => this.agregarTarjeta(circuito));
    }
  }

  agregarTarjeta(circuito) {
    const winnersList = circuito.ganadores?.map(g => `<li>${g.temporada || 'N/A'}: ${g.piloto || 'N/A'}</li>`).join('') || '';
    const recordVuelta = circuito.record_vuelta;

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute('data-id', circuito.id || ''); // Asegurarse de que haya un ID para admin si es necesario
    card.innerHTML = `
      <div class="header">
        <div class="title">${circuito.nombre || 'N/A'}</div>
        <div class="country">${circuito.pais || 'N/A'}</div>
      </div>
      <img class="track-img" src="${circuito.imagen || ''}" alt="${circuito.nombre || 'Circuito'}">
      <div class="info">
        <div><strong>Longitud:</strong><br>${circuito.longitud_km || 'N/A'} km</div>
        <div><strong>Vueltas:</strong><br>${circuito.vueltas || 'N/A'}</div>
      </div>
      <div class="description">${circuito.descripcion || 'N/A'}</div>
      <div class="record">
        <div class="section-title">Récord de Vuelta:</div>
        ${recordVuelta?.tiempo || 'N/A'} - ${recordVuelta?.piloto || 'N/A'} (${recordVuelta?.año || 'N/A'})
      </div>
      <div class="winners">
        <div class="section-title">Ganadores recientes:</div>
        <ul>${winnersList || 'N/A'}</ul>
      </div>
      <button class="button2" data-circuito-id="${circuito.id || Date.now()}">
        <box-icon name='trash' type='solid' color='#ffffff'></box-icon>
      </button>
    `;
    
    const deleteButton = card.querySelector(".button2");
    deleteButton.addEventListener("click", (e) => {
      const circuitoId = e.currentTarget.dataset.circuitoId;
      this.dispatchEvent(new CustomEvent('delete-circuito', {
          detail: { id: circuitoId, cardElement: card },
          bubbles: true,
          composed: true
      }));
    });
    this.container.appendChild(card);
  }

  // Manejador del submit del formulario, dispara un evento personalizado
  handleFormSubmit(event) {
    event.preventDefault();

    // Parsear ganadores (ej: "2023,Max Verstappen; 2022,Sergio Pérez")
    const winnersInput = this.shadow.getElementById("winners_input").value;
    const ganadoresParsed = winnersInput.split(';').map(entry => {
        const parts = entry.trim().split(',');
        return {
            temporada: parseInt(parts[0].trim()),
            piloto: parts[1].trim()
        };
    }).filter(g => g.temporada && g.piloto); // Filtrar entradas inválidas

    const nuevoCircuitoData = {
      id: `temp-${Date.now()}`, // ID temporal para manejo local
      nombre: this.shadow.getElementById("name").value,
      pais: this.shadow.getElementById("country").value,
      longitud_km: parseFloat(this.shadow.getElementById("lenght").value),
      vueltas: parseInt(this.shadow.getElementById("laps").value),
      descripcion: this.shadow.getElementById("description").value,
      condiciones_pista: this.shadow.getElementById("track").value, // Añadido
      record_vuelta: {
        tiempo: this.shadow.getElementById("time").value,
        piloto: this.shadow.getElementById("pilot").value,
        año: parseInt(this.shadow.getElementById("year").value)
      },
      ganadores: ganadoresParsed,
      imagen: this.shadow.getElementById("image").value
    };

    this.dispatchEvent(new CustomEvent('add-circuito', {
        detail: nuevoCircuitoData,
        bubbles: true,
        composed: true
    }));

    // Limpiar campos y cerrar modal
    event.target.reset();
    this.closeModal();
  }
  
  filterCircuitos(searchValue) {
    const value = searchValue.toLowerCase();
    const filteredCircuitos = this._circuitosData.filter(c =>
      (c.nombre && c.nombre.toLowerCase().includes(value)) ||
      (c.pais && c.pais.toLowerCase().includes(value))
    );
    this.renderCircuitos(filteredCircuitos);
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

customElements.define('circuito-card-admin', CircuitoCardAdmin);