// Elementos del DOM
const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');
const limpiarBtn = document.getElementById('limpiar');
const siguienteBtn = document.getElementById('siguiente');
const letraONumero = document.getElementById('letra-o-numero');
const mensaje = document.getElementById('mensaje');
const nombreSelect = document.getElementById('nombre');
const mensajeNombre = document.getElementById('mensaje-nombre');
const imagenTrazos = document.getElementById('imagen-trazos');

// Lista de letras y números
const elementos = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

let indice = 0;

// Configuración del canvas
ctx.lineWidth = 4;
ctx.strokeStyle = '#007bff';

let dibujando = false;

// Eventos del mouse
canvas.addEventListener('mousedown', () => {
  dibujando = true;
  ctx.beginPath();
});

canvas.addEventListener('mousemove', (e) => {
  if (dibujando) {
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', () => {
  dibujando = false;
});

// Limpiar el canvas
limpiarBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  mensaje.textContent = '';
});

// Cambiar a la siguiente letra o número
siguienteBtn.addEventListener('click', () => {
  indice = (indice + 1) % elementos.length;
  actualizarElemento();
});

// Actualizar el elemento (letra o número) y su imagen de trazos
function actualizarElemento() {
  const elemento = elementos[indice];
  letraONumero.textContent = elemento;
  imagenTrazos.src = `assets/${elemento}.png`; // Asegúrate de tener las imágenes en la carpeta assets
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  mensaje.textContent = '';
  mensajeNombre.textContent = `${nombreSelect.value}, dibuja: ${elemento}`;
}

// Inicializar el juego
actualizarElemento();