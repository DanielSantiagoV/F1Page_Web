import  { circuitos as circuitosBase }  from "../data/circuitos.js";
let circuitos = JSON.parse(localStorage.getItem("circuitos")) || circuitosBase;

class CircuitoCard extends HTMLElement {
  constructor(){
    super();
    
    const shadow = this.attachShadow({ mode: "open" });
    
    const style = document.createElement("style");
    style.textContent = `
    .container {
      display: grid;
      grid-template-columns: repeat(3, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem;
}

    .container .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 2px solid #ff3c3c;
      background: #1f1f1f;
      padding: 0.75rem 1rem;
      border-radius: 10px 10px 0 0;
      font-weight: bold;
      color: #fff;
    }

      .card {
        background: #222;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s;
        position:relative;
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

      .input-box1{
        display: flex;
        justify-content: center;
        align
        width: 310px;
        margin: 20px 0;
      }
         .input-box2 {
            position: relative;
            width: 300px;
            display: flex;
            position: relative;
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

        .title {
          font-size: 1.2rem;
        }

        .country {
          font-size: 0.9rem;
          color: #aaa;
        }
          @media screen and (max-width: 1500px) {
        .container {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));font-family: "Bruno Ace SC";
          }
    `;

    const container = document.createElement("div")
    container.classList.add("container")

    const agregarTarjeta = (circuito) => {
      const winnersList = circuito.ganadores.map(g => `<li>${g.temporada}: ${g.piloto}</li>`).join('');
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="header">
          <div class="title">${circuito.nombre}</div>
          <div class="country">${circuito.pais}</div>
        </div>
        <img class="track-img" src="${circuito.imagen}" alt="${circuito.nombre}">
        <div class="info">
          <div><strong>Longitud:</strong><br>${circuito.longitud_km} km</div>
          <div><strong>Vueltas:</strong><br>${circuito.vueltas}</div>
        </div>
        <div class="description">${circuito.descripcion}</div>
        <div class="record">
          <div class="section-title">Récord de Vuelta:</div>
          ${circuito.record_vuelta.tiempo} - ${circuito.record_vuelta.piloto} (${circuito.record_vuelta.año})
        </div>
        <div class="winners">
          <div class="section-title">Ganadores recientes:</div>
          <ul>${winnersList}</ul>
        </div>
      `;
      
      container.appendChild(card);
};

    circuitos.forEach(agregarTarjeta);
    shadow.appendChild(style);
    // Crear barra de búsqueda
const searchBox = document.createElement("div");
searchBox.classList.add("input-box1");
searchBox.innerHTML = `
  <div class="input-box2">
    <input id="searchInput" type="text" required placeholder=" ">
    <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar circuito...</label>
  </div>
`;
    shadow.appendChild(searchBox);
    shadow.appendChild(container);
    const searchInput = shadow.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  // Limpiar contenedor antes de renderizar resultados filtrados
  container.innerHTML = "";

  const filteredPilotos = circuitos.filter(p =>
    p.nombre.toLowerCase().includes(value) ||
    p.pais.toLowerCase().includes(value)
  );

  filteredPilotos.forEach(agregarTarjeta);
});
    
const tracksLinks = document.querySelectorAll('.tracks-link');
const tracksSection = document.getElementById('tracks-section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();


    if ([...tracksLinks].includes(link)) {
      tracksSection.style.display = 'block';
    } else {
      tracksSection.style.display = 'none';
    }


    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});
  }}

  customElements.define('circuito-card', CircuitoCard);




// Circuitos Admin
class CircuitoCardAdmin extends HTMLElement{
  constructor(){
    super();
    
    const shadow = this.attachShadow({ mode: "open" });
    
    const style = document.createElement("style");
    style.textContent = `
    .container {
      display: grid;
      grid-template-columns: repeat(3, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem;
}

    .container .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #1f1f1f;
      padding: 0.75rem 1rem;
      border-radius: 10px 10px 0 0;
      font-weight: bold;
      color: #fff;
    }

.card {
  background: #222;
  border-radius: 12px;
    border: 2px solid #ff3c3c;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s;
  position:relative;
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

.button2 {
            position: absolute;
            bottom: 5px;
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

.title {
  font-size: 1.2rem;
}

.country {
  font-size: 0.9rem;
  color: #aaa;
}
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
      }
        p{
        position: relative;
        left: 10px;
        margin-bottom: 0;
        transform: translateY(-50%);
        font-size: 1rem;
        color: #000000;
        padding: 0px 10px;
        pointer-events: none;
        transition: .5s;
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
      h2{
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
          font-family: "Bruno Ace SC";
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
      width: 310px;
      height: 65px;
      gap: 2%;
      padding: 0px 15px;
      }
      .record label{
      font-size: .9rem;
      color:rgba(0, 0, 0, 0.51)
      }
      .input-box1{
        display: flex;
        justify-content: center;
        align
        width: 310px;
        margin: 20px 0;
      }
         .input-box2 {
            position: relative;
            width: 300px;
            display: flex;
            position: relative;
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
    `;

    const container = document.createElement("div")
    container.classList.add("container")

    const agregarTarjeta = (circuito) => {
      const winnersList = circuito.ganadores.map(g => `<li>${g.temporada}: ${g.piloto}</li>`).join('');
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="header">
          <div class="title">${circuito.nombre}</div>
          <div class="country">${circuito.pais}</div>
        </div>
        <img class="track-img" src="${circuito.imagen}" alt="${circuito.nombre}">
        <div class="info">
          <div><strong>Longitud:</strong><br>${circuito.longitud_km} km</div>
          <div><strong>Vueltas:</strong><br>${circuito.vueltas}</div>
        </div>
        <div class="description">${circuito.descripcion}</div>
        <div class="record">
          <div class="section-title">Récord de Vuelta:</div>
          ${circuito.record_vuelta.tiempo} - ${circuito.record_vuelta.piloto} (${circuito.record_vuelta.año})
        </div>
        <div class="winners">
          <div class="section-title">Ganadores recientes:</div>
          <ul>${winnersList}</ul>
        </div>
        <button class="button2">
          <span class="X"></span>
          <span class="Y"></span>
        </button>
      `;
      const deleteButton = card.querySelector(".button2");
      deleteButton.innerHTML="<box-icon name='trash' type='solid' color='#ffffff'; width='40px' ></box-icon>"
      deleteButton.addEventListener("click", () => {
      const index = circuitos.findIndex(c =>
        c.nombre === circuito.nombre
      );

      if (index !== -1) {
        circuitos.splice(index, 1);
        localStorage.setItem("circuitos", JSON.stringify(circuitos));
        card.remove();
      }
});
      container.appendChild(card);
    };

    circuitos.forEach(agregarTarjeta);

    const buttonAdd = document.createElement('button')
    buttonAdd.setAttribute('data-modal-target', '#modal')
    buttonAdd.id = 'buttonAdd'
    const formAdd = document.createElement('form')
    const overlay = document.createElement('div')
    overlay.id = "overlay"
    formAdd.classList.add("modal")
    formAdd.id = 'modal'
    buttonAdd.textContent = 'Agregar Circuito'
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
          <input type="text" required id="lenght">
          <label>Longitud (Km)</label>
        </div>
        <div class="input-box">    
          <input type="text" required id="laps">
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
              <input type="text" required id="year">
              <label>Año</label>
            </div>
          </div>
        </div>
        <div class="record-container"> 
          <p>Ganadores</p>
          <div class="record">
            <div class="input-box">    
              <input type="text" required id="season">
              <label>Temporada</label>
            </div>
            <div class="input-box">    
              <input type="text" required id="name-winner">
              <label>Nombre Piloto</label>
            </div>
          </div>
        </div>
        <div class="input-box">    
          <input type="text" required id="image">
          <label>Url Imagen</label>
        </div>
        <button type="submit" class="button">Agregar</button>
        </div>
      </div>
      
    `
    formAdd.addEventListener("submit", (e) => {
      e.preventDefault();

      const nuevoCircuito = {
        nombre: shadow.getElementById("name").value,
        pais: shadow.getElementById("country").value,
        longitud_km: parseFloat(shadow.getElementById("lenght").value),
        vueltas: parseInt(shadow.getElementById("laps").value),
        descripcion: shadow.getElementById("description").value,
        imagen: shadow.getElementById("image").value,
        record_vuelta: {
          tiempo: shadow.getElementById("time").value,
          piloto: shadow.getElementById("pilot").value,
          año: parseInt(shadow.getElementById("year").value)
        },
        ganadores: [
          {
            temporada: shadow.getElementById("season").value,
            piloto: shadow.getElementById("name-winner").value
          }
        ]
      };

      circuitos.push(nuevoCircuito);
      localStorage.setItem("circuitos", JSON.stringify(circuitos));
      agregarTarjeta(nuevoCircuito);

      formAdd.reset();
      formAdd.classList.remove("active");
      overlay.classList.remove("active");
    });

    shadow.appendChild(style);
    // Crear barra de búsqueda
const searchBox = document.createElement("div");
searchBox.classList.add("input-box1");
searchBox.innerHTML = `
  <div class="input-box2">
    <input id="searchInput" type="text" required placeholder=" ">
    <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar circuito...</label>
  </div>
`;
shadow.appendChild(searchBox);
    shadow.appendChild(overlay);
    shadow.appendChild(formAdd);
    shadow.appendChild(container);
    shadow.appendChild(buttonAdd);
    const searchInput = shadow.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  // Limpiar contenedor antes de renderizar resultados filtrados
  container.innerHTML = "";

  const filteredPilotos = circuitos.filter(p =>
    p.nombre.toLowerCase().includes(value) ||
    p.pais.toLowerCase().includes(value)
  );

  filteredPilotos.forEach(agregarTarjeta);
});

    const openModalButtons = shadow.querySelectorAll('[data-modal-target]');
    const closeModalButtons = shadow.querySelectorAll('[data-close-button]');

    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = shadow.querySelector(button.dataset.modalTarget);
        if (modal) {
          modal.classList.add('active');
          overlay.classList.add('active');
        }
      });
    });

    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
          overlay.classList.remove('active');
        }
      });
    });
  }}
    
const tracksLinks = document.querySelectorAll('.tracks-link');
const tracksSection = document.getElementById('tracks-section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();


    if ([...tracksLinks].includes(link)) {
      tracksSection.style.display = 'block';
    } else {
      tracksSection.style.display = 'none';
    }


    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});
  

  customElements.define('circuito-card-admin', CircuitoCardAdmin);