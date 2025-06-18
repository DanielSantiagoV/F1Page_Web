// src/componentes/pilotos.js

// Estilos consolidados para ambos Custom Elements de pilotos
const driverCardStyles = `
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
        gap: 1.5rem;
        padding: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }

    .card {
        border-radius: 12px;
        overflow: hidden;
        border: 2px solid #ff3c3c;
        background: #222;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: fadeIn 0.4s ease-in-out;
        position: relative;
        min-height: 360px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.33);
        border-color: #ff1e00;
    }

    .info {
        padding: 1rem 1rem 0 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        background: linear-gradient(180deg, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 1) 100%);
    }

    .nombre {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
    }

    .nombre .nombre-pequeno {
        font-family: 'Bruno Ace SC';
        font-size: 0.7em;
        text-transform: uppercase;
        color: #ff1e00;
        font-weight: 600;
        letter-spacing: 0.05em;
    }
    
    .nombre .apellido {
        font-family: 'Bruno Ace SC';
        font-size: 1.5em;
        font-weight: bold;
        color: rgb(254, 252, 252);
    }

    .equipo {
        font-size: 0.95em;
        color: #888;
        margin-top: 0.3rem;
        font-family: "Formula 1 Regular";
    }

    .equipo:hover {
        color: #ff1e00;
    }

    .extra {
        font-size: 0.8em;
        margin-top: 0.4rem;
        color: rgb(213, 213, 213);
        font-family: "Formula 1 Regular";
        font-size: 0.75em;
    }

    .habilidades {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        margin-top: 0.5rem;
        font-family: 'Bruno Ace SC';
    }

    .chip {
        background-color: #ff1e00;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 999px;
        font-size: 0.7em;
        font-weight: 500;
    }

    .foto {
        width: 100%;
        max-height: 180px;
        object-fit: contain;
        margin-top: auto;
        background: linear-gradient(0deg, rgba(143, 0, 0, 1) 5%, rgba(163, 0, 0, 0.79) 35%, rgba(255, 255, 255, 0) 100%);
    }

    /* Estilos del botón de eliminar (Admin) */
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
    .input-box input{
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
            grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
            margin: 1rem 35px;
        }
    }
    
    #buttonAdd{
        padding: 10px 10px;
        position: fixed; 
        bottom: 5%;
        font-family: "Bruno Ace SC";
        right: 5%;
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

// Custom Element para mostrar los pilotos (vista normal)
class PilotoCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        
        const style = document.createElement("style");
        style.textContent = driverCardStyles; // Aplicar estilos consolidados
        this.shadow.appendChild(style);
        
        const searchBox = document.createElement("div");
        searchBox.classList.add("input-box1");
        searchBox.innerHTML = `
            <div class="input-box2">
                <input id="searchInput" type="text" required placeholder=" ">
                <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar piloto...</label>
            </div>
        `;
        this.shadow.appendChild(searchBox);

        this.container = document.createElement("div");
        this.container.classList.add("container");
        this.shadow.appendChild(this.container);

        this._pilotosData = []; // Propiedad interna para almacenar los datos
        this.searchInput = this.shadow.getElementById("searchInput");

        if (this.searchInput) {
            this.searchInput.addEventListener("input", () => {
                this.filterPilotos(this.searchInput.value);
            });
        }
    }

    // Setter para la propiedad 'pilotos'
    // Cuando se asigna un valor a .pilotos, se ejecuta este código
    set pilotos(data) {
        this._pilotosData = data || []; // Asegura que sea un array
        console.log("pilotos setter in component called. Data received:", this._pilotosData); // Log aquí
        this.renderPilotos(this._pilotosData); // Renderiza los pilotos cuando se reciben
    }

    // Getter para acceder a los datos internos
    get pilotos() {
        return this._pilotosData;
    }

    // Función para renderizar las tarjetas de pilotos
    renderPilotos(pilotosToRender) {
        console.log("renderPilotos called with:", pilotosToRender.length, "pilots."); // Log aquí
        this.container.innerHTML = ""; // Limpiar tarjetas existentes
        if (pilotosToRender.length === 0) {
            this.container.innerHTML = `<p style="color: white; text-align: center;">No se encontraron pilotos.</p>`;
            console.warn("No hay pilotos para renderizar."); // Log aquí
        } else {
            pilotosToRender.forEach(piloto => {
                this.agregarTarjeta(piloto);
                console.log("Agregando tarjeta para piloto:", piloto.nombre || 'Nombre no disponible'); // Log aquí
            });
        }
    }

    // Función para añadir una tarjeta individual de piloto
    agregarTarjeta(piloto) {
        // Divide el nombre para obtener nombre y apellido (si existe)
        const nombreCompletoArray = piloto.nombre ? piloto.nombre.split(" ") : [];
        const nombre = nombreCompletoArray.length > 1 ? nombreCompletoArray[0] : '';
        const apellido = nombreCompletoArray.length > 1 ? nombreCompletoArray.slice(1).join(" ") : piloto.nombre || 'N/A';

        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute('data-id', piloto.id);
        card.innerHTML = `
            <div class="info">
                <div class="nombre">
                    <span class="nombre-pequeno">${nombre}</span>
                    <span class="apellido">${apellido}</span>
                </div>
                <div class="equipo">${piloto.equipo || 'N/A'}</div>
                <div class="extra"><strong>Rol:</strong> ${piloto.rol || 'N/A'}</div>
                <div class="extra"><strong>Experiencia:</strong> ${piloto.experiencia || 'N/A'} años</div>
                <div class="habilidades">
                    ${piloto.habilidades && piloto.habilidades.map(h => `<span class="chip">${h}</span>`).join('') || 'N/A'}
                </div>
            </div>
            <img class="foto" src="${piloto.url || ''}" alt="${piloto.nombre || 'Piloto'}">
        `;
        this.container.appendChild(card);
    }

    // Función para filtrar pilotos (búsqueda)
    filterPilotos(searchValue) {
        const value = searchValue.toLowerCase();
        const filteredPilotos = this._pilotosData.filter(p =>
            (p.nombre && p.nombre.toLowerCase().includes(value)) ||
            (p.equipo && p.equipo.toLowerCase().includes(value)) ||
            (p.rol && p.rol.toLowerCase().includes(value))
        );
        this.renderPilotos(filteredPilotos);
    }
}

// Definir el Custom Element
customElements.define('piloto-card', PilotoCard);


// Custom Element para la administración de pilotos (añadir/eliminar)
class PilotoCardAdmin extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        
        const style = document.createElement("style");
        style.textContent = driverCardStyles; // Aplicar estilos consolidados
        this.shadow.appendChild(style);

        const searchBox = document.createElement("div");
        searchBox.classList.add("input-box1");
        searchBox.innerHTML = `
            <div class="input-box2">
                <input id="searchInput" type="text" required placeholder=" ">
                <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar piloto...</label>
            </div>
        `;
        this.shadow.appendChild(searchBox);

        this.container = document.createElement("div");
        this.container.classList.add("container");
        this.shadow.appendChild(this.container);

        this._pilotosData = []; // Propiedad interna para almacenar los datos

        // Botón para añadir piloto
        const buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('data-modal-target', '#modal');
        buttonAdd.id = 'buttonAdd';
        buttonAdd.textContent = 'Agregar Piloto';
        this.shadow.appendChild(buttonAdd);

        // Overlay y Formulario de añadir piloto (modal)
        const overlay = document.createElement('div');
        overlay.id = "overlay";

        const formAdd = document.createElement('form');
        formAdd.classList.add("modal");
        formAdd.id = 'modal';
        formAdd.innerHTML = `
            <div class="modal-header">
                <h2>Nuevo Piloto</h2>
                <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-body">
                <div class="input-box"><input id="name" type="text" required><label>Nombre</label></div>
                <div class="input-box"><input type="text" required id="team"><label>Equipo</label></div>
                <div class="input-box"><input type="text" required id="rol"><label>Rol</label></div>
                <div class="input-box"><input type="number" required id="experience"><label>Años Experiencia</label></div>
                <div class="input-box"><input type="text" required id="skills"><label>Habilidades (coma separadas)</label></div>
                <div class="input-box"><input type="text" required id="image"><label>Url Imagen</label></div>
                <button type="submit" class="button">Agregar</button>
            </div>
        `;

        this.shadow.appendChild(overlay);
        this.shadow.appendChild(formAdd);
        
        // Event Listeners para búsqueda y modal
        this.searchInput = this.shadow.getElementById("searchInput");
        if (this.searchInput) {
            this.searchInput.addEventListener("input", () => {
                this.filterPilotos(this.searchInput.value);
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

    // Setter para la propiedad 'pilotos'
    set pilotos(data) {
        this._pilotosData = data || [];
        console.log("pilotos setter in component called. Data received:", this._pilotosData); // Log aquí
        this.renderPilotos(this._pilotosData);
    }

    get pilotos() {
        return this._pilotosData;
    }

    renderPilotos(pilotosToRender) {
        console.log("renderPilotos called with:", pilotosToRender.length, "pilots."); // Log aquí
        this.container.innerHTML = "";
        if (pilotosToRender.length === 0) {
            this.container.innerHTML = `<p style="color: white; text-align: center;">No se encontraron pilotos.</p>`;
            console.warn("No hay pilotos para renderizar."); // Log aquí
        } else {
            pilotosToRender.forEach(piloto => {
                this.agregarTarjeta(piloto);
                console.log("Agregando tarjeta para piloto:", piloto.nombre || 'Nombre no disponible'); // Log aquí
            });
        }
    }

    agregarTarjeta(piloto) {
        // Divide el nombre para obtener nombre y apellido (si existe)
        const nombreCompletoArray = piloto.nombre ? piloto.nombre.split(" ") : [];
        const nombre = nombreCompletoArray.length > 1 ? nombreCompletoArray[0] : '';
        const apellido = nombreCompletoArray.length > 1 ? nombreCompletoArray.slice(1).join(" ") : piloto.nombre || 'N/A';

        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute('data-id', piloto.id);
        card.innerHTML = `
            <div class="info">
                <div class="nombre">
                    <span class="nombre-pequeno">${nombre}</span>
                    <span class="apellido">${apellido}</span>
                </div>
                <div class="equipo">${piloto.equipo || 'N/A'}</div>
                <div class="extra"><strong>Rol:</strong> ${piloto.rol || 'N/A'}</div>
                <div class="extra"><strong>Experiencia:</strong> ${piloto.experiencia || 'N/A'} años</div>
                <div class="habilidades">
                    ${piloto.habilidades && piloto.habilidades.map(h => `<span class="chip">${h}</span>`).join('') || 'N/A'}
                </div>
            </div>
            <img class="foto" src="${piloto.url || ''}" alt="${piloto.nombre || 'Piloto'}">
            <button class="button2" data-piloto-id="${piloto.id || Date.now()}">
                <box-icon name='trash' type='solid' color='#ffffff'></box-icon>
            </button>
        `;
        
        const deleteButton = card.querySelector('.button2');
        deleteButton.addEventListener('click', (e) => {
            const pilotoId = e.currentTarget.dataset.pilotoId;
            this.dispatchEvent(new CustomEvent('delete-piloto', {
                detail: { id: pilotoId, cardElement: card },
                bubbles: true,
                composed: true
            }));
        });
        this.container.appendChild(card);
    }

    // Manejador del submit del formulario, dispara un evento personalizado
    handleFormSubmit(event) {
        event.preventDefault();

        const newPilotoData = {
            id: `temp-${Date.now()}`, // ID temporal para manejo local
            nombre: this.shadow.getElementById('name').value,
            equipo: this.shadow.getElementById('team').value,
            rol: this.shadow.getElementById('rol').value,
            experiencia: Number(this.shadow.getElementById('experience').value),
            habilidades: this.shadow.getElementById('skills').value.split(',').map(h => h.trim()),
            url: this.shadow.getElementById('image').value
        };

        this.dispatchEvent(new CustomEvent('add-piloto', {
            detail: newPilotoData,
            bubbles: true,
            composed: true
        }));

        // Limpiar campos y cerrar modal
        event.target.reset();
        this.closeModal();
    }

    filterPilotos(searchValue) {
        const value = searchValue.toLowerCase();
        const filteredPilotos = this._pilotosData.filter(p =>
            (p.nombre && p.nombre.toLowerCase().includes(value)) ||
            (p.equipo && p.equipo.toLowerCase().includes(value)) ||
            (p.rol && p.rol.toLowerCase().includes(value))
        );
        this.renderPilotos(filteredPilotos);
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

// Definir el Custom Element de administración
customElements.define('piloto-card-admin', PilotoCardAdmin);