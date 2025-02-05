// Elementos del DOM
const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');
const limpiarBtn = document.getElementById('limpiar');
const siguienteBtn = document.getElementById('siguiente');
const letraONumero = document.getElementById('letra-o-numero');
const mensaje = document.getElementById('mensaje');

// Lista de letras y números
const elementos = ['A', 'B', 'C', '1', '2', '3']; // Puedes agregar más

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
  letraONumero.textContent = elementos[indice];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  mensaje.textContent = '';
});

// Validar el dibujo (ejemplo básico)
function validarDibujo() {
  // Aquí podrías agregar lógica para validar el dibujo
  mensaje.textContent = '¡Bien hecho!';
}

// Ejemplo de validación al soltar el mouse
canvas.addEventListener('mouseup', validarDibujo);