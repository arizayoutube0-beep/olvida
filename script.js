// FUNCIÓN PRINCIPAL DE CAMBIO DE SECCIONES (INFALIBLE)
function abrirSeccion(idSeccion) {
  // 1. Ocultar absolutamente todas las secciones
  const secciones = document.querySelectorAll('.section-content');
  secciones.forEach(sec => {
    sec.classList.remove('active');
  });

  // 2. Desactivar todos los botones del menú superior
  const botones = document.querySelectorAll('.tab-btn');
  botones.forEach(btn => {
    btn.classList.remove('active');
  });

  // 3. Activar la sección elegida
  const seccionObjetivo = document.getElementById(idSeccion);
  if (seccionObjetivo) {
    seccionObjetivo.classList.add('active');
  } else {
    console.error("No existe la sección con id:", idSeccion);
  }

  // 4. Iluminar el botón correspondiente en el menú superior
  botones.forEach(btn => {
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes("'" + idSeccion + "'")) {
      btn.classList.add('active');
    }
  });

  // 5. Llevar la pantalla al inicio superior suavemente
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// MODO OSCURO / CLARO
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
}

// BARRA DE PROGRESO DE LECTURA
window.onscroll = function() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progressBar = document.getElementById("progress-bar");
  if (progressBar && height > 0) {
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  }
};

// VENTANA MODAL DE INICIO DE SESIÓN
function openModal() {
  const modal = document.getElementById('loginModal');
  if (modal) modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('loginModal');
  if (modal) modal.style.display = 'none';
}

function simulateLogin(provider) {
  alert('¡Inicio de sesión exitoso con ' + provider + '!');
  closeModal();
}

// CARGA DE CÓDIGO QR DESDE ARCHIVO LOCAL
function previewQR(event) {
  const reader = new FileReader();
  reader.onload = function() {
    const output = document.getElementById('qrDisplay');
    if (output) {
      output.innerHTML = '<img src="' + reader.result + '" alt="Código QR Cargado">';
    }
  };
  if (event.target.files && event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0]);
  }
}

// BUSCADOR EN LA SECCIÓN DE SOLUCIONES
function searchSolutions() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  
  const query = input.value.toLowerCase();
  const cards = document.querySelectorAll('.solution-card');
  
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
}

// CONTADOR DE ME GUSTA
function addLike(elementId) {
  const likeElement = document.getElementById(elementId);
  if (likeElement) {
    let currentLikes = parseInt(likeElement.textContent) || 0;
    likeElement.textContent = currentLikes + 1;
  }
}

// FORMULARIO DE CONTACTO
function handleContactSubmit(event) {
  event.preventDefault();
  alert('¡Gracias por comunicarte! Tu mensaje ha sido enviado correctamente.');
  event.target.reset();
}