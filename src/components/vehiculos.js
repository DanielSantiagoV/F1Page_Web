import {vehiculos as vehiculo} from "../data/vehiculos.js"
const vehiculos = JSON.parse(localStorage.getItem("vehiculos")) || vehiculo;
class VehiculoCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
  
    const style = document.createElement("style");
    style.textContent = `
    .container {
      display: grid;
      grid-template-columns: repeat(3, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem;
      font-family: "Bruno Ace SC";
}



    .card {
  background-color: #1c1c1e;
  color: #f0f0f0;
  border: 2px solid #ff3c3c;
  border-radius: 16px;
  padding: 1.2rem;
  margin: 1rem;
  max-width: 400px;
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
  border-radius: 10px;
  border: 2px solid #ff3c3c;
  object-fit: cover;
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

      .X, .Y {
          position: absolute;
          width: 16px;
          height: 2px;
          background: white;
          }

      .X {
          transform: rotate(45deg);
          }

      .Y {
          transform: rotate(-45deg);
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

    const agregarTarjeta = (vehiculo) => {
      const card = document.createElement("div");
      card.classList.add("card");
    
      card.innerHTML = `
        <h2>${vehiculo.equipo}</h2>
        <div class="subtitulo">${vehiculo.modelo} – ${vehiculo.motor}</div>
        <img src="${vehiculo.imagen}" alt="Vehículo ${vehiculo.equipo}">
        <div class="stats">
          <p><strong>Velocidad máx:</strong> ${vehiculo.velocidad_maxima_kmh} km/h</p>
          <p><strong>0-100 km/h:</strong> ${vehiculo.aceleracion_0_100} s</p>
        </div>
        <hr>
        <div>
          <p class="modo">Conducción Normal</p>
          <p>Vel. promedio: ${vehiculo.rendimiento.conduccion_normal.velocidad_promedio_kmh} km/h</p>
          <p>Combustible (seco): ${vehiculo.rendimiento.conduccion_normal.consumo_combustible.seco} L/km</p>
          <p>Neumáticos (extremo): ${vehiculo.rendimiento.conduccion_normal.desgaste_neumaticos.extremo} %</p>
    
          <p class="modo">Conducción Agresiva</p>
          <p>Vel. promedio: ${vehiculo.rendimiento.conduccion_agresiva.velocidad_promedio_kmh} km/h</p>
    
          <p class="modo">Ahorro Combustible</p>
          <p>Vel. promedio: ${vehiculo.rendimiento.ahorro_combustible.velocidad_promedio_kmh} km/h</p>
        </div>
    
      `;
      container.appendChild(card);
    };
    
  vehiculos.forEach(agregarTarjeta);
  shadow.appendChild(style);
  const searchBox = document.createElement("div");
  searchBox.classList.add("input-box1");
  searchBox.innerHTML = `
    <div class="input-box2">
      <input id="searchInput" type="text" required placeholder=" ">
      <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar vehículo...</label>
    </div>
  `;
  shadow.appendChild(searchBox);
      shadow.appendChild(container);
      const searchInput = shadow.getElementById("searchInput");
  
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
  
    // Limpiar contenedor antes de renderizar resultados filtrados
    container.innerHTML = "";
  
    const resultados = vehiculos.filter(v =>
      v.equipo.toLowerCase().includes(value) ||
      v.modelo.toLowerCase().includes(value) ||
      v.motor.toLowerCase().includes(value)
    );
    
  
    resultados.forEach(agregarTarjeta);
  });
  
  const vehiclesLinksAdmin = document.querySelectorAll('.vehicle-link');
  const vehiclesSectionAdmin = document.getElementById('vehicles-section');
  const navLinksAdmin = document.querySelectorAll('nav a');
  
  navLinksAdmin.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
  
  
    if ([...vehiclesLinksAdmin].includes(link)) {
      vehiclesSectionAdmin.style.display = 'block';
    } else {
      vehiclesSectionAdmin.style.display = 'none';
    }
  
  
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
  });
  }
}
  customElements.define("vehiculo-card", VehiculoCard);

//Vehiculos Admin
class VehiculoCardAdmin extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
  
    const style = document.createElement("style");
    style.textContent = `
    .container {
      display: grid;
      grid-template-columns: repeat(3, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem;
      font-family: "Bruno Ace SC";
}



    .card {
  background-color: #1c1c1e;
  color: #f0f0f0;
  border: 2px solid #ff3c3c;
  border-radius: 16px;
  padding: 1.2rem;
  margin: 1rem;
  max-width: 400px;
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
  border-radius: 10px;
  border: 2px solid #ff3c3c;
  object-fit: cover;
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

      .X, .Y {
          position: absolute;
          width: 16px;
          height: 2px;
          background: white;
          }

      .X {
          transform: rotate(45deg);
          }

      .Y {
          transform: rotate(-45deg);
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
        width: 350px;
        margin: 10px 0;
        border-bottom: 2px solid #000000;
      }
      .input-box label{
        position: absolute;
        top:50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: .9rem;
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
        left: -5;
        margin-bottom: 0;
        transform: translateY(-50%);
        font-size: 1rem;
        color: #000000;
        padding: 0px 3px;
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
        font-size: 1rem;
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
  .record{
      display: flex;
      width: 360px;
      height: 65px;
      gap: 2%;
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
    width: 290px;
    margin: 7px 10px;
  }
    .record{
      width: 300px;
      margin: 2px 0px;
      display: flex;
      gap: 1px
      }
}
    `

    const container = document.createElement("div")
    container.classList.add("container")

    const agregarTarjeta = (vehiculo) => {
      const card = document.createElement("div");
      card.classList.add("card");
    
      card.innerHTML = `
        <h2>${vehiculo.equipo}</h2>
        <div class="subtitulo">${vehiculo.modelo} – ${vehiculo.motor}</div>
        <img src="${vehiculo.imagen}" alt="Vehículo ${vehiculo.equipo}">
        <div class="stats">
          <p><strong>Velocidad máx:</strong> ${vehiculo.velocidad_maxima_kmh} km/h</p>
          <p><strong>0-100 km/h:</strong> ${vehiculo.aceleracion_0_100} s</p>
        </div>
        <hr>
        <div>
          <p class="modo">Conducción Normal</p>
          <p>Vel. promedio: ${vehiculo.rendimiento.conduccion_normal.velocidad_promedio_kmh} km/h</p>
          <p>Combustible (seco): ${vehiculo.rendimiento.conduccion_normal.consumo_combustible.seco} L/km</p>
          <p>Neumáticos (extremo): ${vehiculo.rendimiento.conduccion_normal.desgaste_neumaticos.extremo} %</p>
    
          <p class="modo">Conducción Agresiva</p>
          <p>Vel. promedio: ${vehiculo.rendimiento.conduccion_agresiva.velocidad_promedio_kmh} km/h</p>
    
          <p class="modo">Ahorro Combustible</p>
          <p>Vel. promedio: ${vehiculo.rendimiento.ahorro_combustible.velocidad_promedio_kmh} km/h</p>
        </div>
    
        <button class="button2">
          <span class="X"></span>
          <span class="Y"></span>
        </button>
      `;
    
      const deleteButton = card.querySelector(".button2");
      deleteButton.innerHTML = "<box-icon name='trash' type='solid' color='#ffffff' ></box-icon>";
      deleteButton.addEventListener("click", () => {
        const index = vehiculos.findIndex(c => c.equipo === vehiculo.equipo);
        if (index !== -1) {
          vehiculos.splice(index, 1);
          localStorage.setItem("vehiculos", JSON.stringify(vehiculos));
          card.remove();
        }
      });
    
      container.appendChild(card);
    };
    
    vehiculos.forEach(agregarTarjeta);

  const buttonAdd = document.createElement('button')
  buttonAdd.setAttribute('data-modal-target', '#modal')
  buttonAdd.id = 'buttonAdd'
  const formAdd = document.createElement('form')
  const overlay = document.createElement('div')
  overlay.id = "overlay"
  formAdd.classList.add("modal")
  formAdd.id = 'modal'
  buttonAdd.textContent = 'Agregar Vehiculo'
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
          <div class="record">
            <div class="input-box">    
              <input type="number" required id="vel_max">
              <label>Velocidad Máxima (km/h)</label>
            </div>
            <div class="input-box">    
              <input type="number" required id="aceleracion" step="0.01">
              <label>Aceleración 0-100 km/h (s)</label>
            </div>
          </div>
  </div>
  <div class="input-box">
    <input id="pilotos" type="text" required>
    <label>ID pilotos (comas separadas)</label>
  </div>
  <div class="record-container"> 
          <p>Conducción Normal</p>
          <div class="record">
            <div class="input-box">    
              <input type="number" required id="vel_cn">
              <label>Vel. promedio</label>
            </div>
            <div class="input-box">    
              <input type="number" required id="comb_seco_cn">
              <label>Combustible seco</label>
            </div>
            <div class="input-box">    
              <input type="number" required id="desg_extremo_cn">
              <label>Desgaste neumáticos extremo</label>
            </div>
          </div>
  </div>

  <div class="record-container"> 
          <p>Conducción Agresiva</p>
          <div class="record">
            <div class="input-box">    
              <input type="number" required id="vel_ca">
              <label>Vel. promedio</label>
            </div>

          </div>
  </div>
  <div class="record-container"> 
          <p>Ahorro Combustible</p>
          <div class="record">
            <div class="input-box">    
              <input type="number" required id="vel_ah">
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
    
  `
  formAdd.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const nuevoVehiculo = {
      equipo: shadow.getElementById("equipo").value,
      modelo: shadow.getElementById("modelo").value,
      motor: shadow.getElementById("motor").value,
      velocidad_maxima_kmh: Number(shadow.getElementById("vel_max").value),
      aceleracion_0_100: Number(shadow.getElementById("aceleracion").value),
      pilotos: shadow.getElementById("pilotos").value.split(',').map(p => parseInt(p.trim())),
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: Number(shadow.getElementById("vel_cn").value),
          consumo_combustible: {
            seco: Number(shadow.getElementById("comb_seco_cn").value),
            lluvioso: 0, // puedes añadir inputs si los necesitas
            extremo: 0
          },
          desgaste_neumaticos: {
            seco: 0,
            lluvioso: 0,
            extremo: Number(shadow.getElementById("desg_extremo_cn").value)
          }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: Number(shadow.getElementById("vel_ca").value),
          consumo_combustible: { seco: 0, lluvioso: 0, extremo: 0 },
          desgaste_neumaticos: { seco: 0, lluvioso: 0, extremo: 0 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: Number(shadow.getElementById("vel_ah").value),
          consumo_combustible: { seco: 0, lluvioso: 0, extremo: 0 },
          desgaste_neumaticos: { seco: 0, lluvioso: 0, extremo: 0 }
        }
      },
      imagen: shadow.getElementById("imagen").value
    };

    vehiculos.push(nuevoVehiculo);
      localStorage.setItem("vehiculos", JSON.stringify(vehiculos));
      agregarTarjeta(nuevoVehiculo);

      formAdd.reset();
      formAdd.classList.remove("active");
      overlay.classList.remove("active");
    });

  shadow.appendChild(style);
  const searchBox = document.createElement("div");
  searchBox.classList.add("input-box1");
  searchBox.innerHTML = `
    <div class="input-box2">
      <input id="searchInput" type="text" required placeholder=" ">
      <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar vehículo...</label>
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
  
    const resultados = vehiculos.filter(v =>
      v.equipo.toLowerCase().includes(value) ||
      v.modelo.toLowerCase().includes(value) ||
      v.motor.toLowerCase().includes(value)
    );
    
  
    resultados.forEach(agregarTarjeta);
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





  const vehiclesLinksAdmin = document.querySelectorAll('.vehicle-link');
  const vehiclesSectionAdmin = document.getElementById('vehicles-section');
  const navLinksAdmin = document.querySelectorAll('nav a');
  
  navLinksAdmin.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
  
  
    if ([...vehiclesLinksAdmin].includes(link)) {
      vehiclesSectionAdmin.style.display = 'block';
    } else {
      vehiclesSectionAdmin.style.display = 'none';
    }
  
  
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
  });

customElements.define("vehiculo-card-admin", VehiculoCardAdmin);
  