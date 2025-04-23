// themeswitch.js
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitchButton = document.querySelector('.theme-switch');
    const body = document.body;

    // Recuperar el tema guardado
    const savedTheme = localStorage.getItem('site-theme');
    
    // Función para cambiar el tema
    function changeTheme() {
        // Alternar la clase de tema
        body.classList.toggle('dark-theme');
        
        // Guardar el nuevo tema
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('site-theme', 'dark');
            // Cambiar ícono a sol
            themeSwitchButton.innerHTML = '<i class="bi bi-sun"></i>';
        } else {
            localStorage.setItem('site-theme', 'light');
            // Cambiar ícono a luna
            themeSwitchButton.innerHTML = '<i class="bi bi-moon"></i>';
        }
    }

    // Aplicar tema guardado al cargar
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeSwitchButton.innerHTML = '<i class="bi bi-sun"></i>';
    }

    // Añadir evento de clic
    themeSwitchButton.addEventListener('click', changeTheme);
});
