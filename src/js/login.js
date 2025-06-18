// const loginForm = document.querySelector('#loginForm')
// loginForm.addEventListener('submit', (e) =>{
//     e.preventDefault()
//     const email = document.querySelector('#email').value
//     const password = document.querySelector('#password').value
//     const Users = JSON.parse(localStorage.getItem('users')) || []
//     const validUser = Users.find(user => user.email === email && user.password === password)
//     if(!validUser){
//         return alert('Usuario y/o contraseña incorrectos')
//     }
//     alert(`Bienvenido ${validUser.user}`)
//     window.location.href = "../html/index.html"
// })

import { users as predefinedUsers } from './roles.js';

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Obtener usuarios registrados del localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Buscar en usuarios predefinidos
    const predefinedUser = predefinedUsers.find(user => user.email === email && user.password === password);
    
    // Buscar en usuarios registrados
    const registeredUser = registeredUsers.find(user => user.email === email && user.password === password);

    if (predefinedUser) {
        // Usuario predefinido encontrado
        alert(`Bienvenido ${predefinedUser.email}`);
        window.location.href = '../html/index.html';
    } else if (registeredUser) {
        // Usuario registrado encontrado
        alert(`Bienvenido ${registeredUser.username}`);
        window.location.href = '../html/index.html';
    } else {
        alert('Credenciales inválidas. Por favor, intente nuevamente.');
    }
});