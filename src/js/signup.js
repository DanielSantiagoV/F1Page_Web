document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Obtener usuarios existentes o crear array vacío
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Verificar si el email ya está registrado
    const isUserRegistered = users.find(user => user.email === email);
    if (isUserRegistered) {
        alert('Este email ya está registrado');
        return;
    }

    // Crear nuevo usuario
    const newUser = {
        username: username,
        email: email,
        password: password,
        role: 'user' // Por defecto, todos los nuevos usuarios son 'user'
    };

    // Agregar usuario al array
    users.push(newUser);
    
    // Guardar en localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    window.location.href = 'login.html';
});