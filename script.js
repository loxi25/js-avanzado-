// ===================================================
// 1. DECLARACIÓN DE FUNCIÓN (Cálculo de Área)
// ===================================================
// Función declarada pura que recibe base y altura
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

// Conexión con el botón de la interfaz HTML
document.getElementById('btnCalcularArea').addEventListener('click', () => {
  const baseVal = parseFloat(document.getElementById('base').value);
  const alturaVal = parseFloat(document.getElementById('altura').value);

  if (isNaN(baseVal) || isNaN(alturaVal)) {
    document.getElementById('resArea').textContent = "Por favor, ingresa números válidos.";
    return;
  }

  const area = calcularAreaRectangulo(baseVal, alturaVal);
  document.getElementById('resArea').textContent = `El área calculada es: ${area} cm²`;
});


// ===================================================
// 2. FUNCIONES DE FLECHA / ARROW FUNCTIONS (Filtro)
// ===================================================
const listaNumeros = [10, 15, 22, 33, 40, 55, 60];

// Arrow function con retorno implícito
const esPar = num => num % 2 === 0;

document.getElementById('btnFiltrarPares').addEventListener('click', () => {
  // Pasamos la función de flecha como callback a .filter()
  const pares = listaNumeros.filter(esPar);
  document.getElementById('resPares').textContent = `Pares encontrados: [${pares.join(', ')}]`;
});


// ===================================================
// 3. PARÁMETROS REST Y VALORES POR DEFECTO
// ===================================================
// 'tasaImpuesto' usa 0.21 por defecto. '...precios' captura N argumentos.
function calcularPrecioFinal(tasaImpuesto = 0.21, ...precios) {
  const subtotal = precios.reduce((acumulador, p) => acumulador + p, 0);
  const total = subtotal + (subtotal * tasaImpuesto);
  return { subtotal, total };
}

document.getElementById('btnCalcularTotal').addEventListener('click', () => {
  const textoInput = document.getElementById('preciosInput').value;
  
  // Convertimos el texto del input en un arreglo de números
  const listaPrecios = textoInput
    .split(',')
    .map(val => parseFloat(val.trim()))
    .filter(num => !isNaN(num));

  if (listaPrecios.length === 0) {
    document.getElementById('resTotal').textContent = "Ingresa al menos un precio válido.";
    return;
  }

  // Usamos el operador spread (...) para pasar la lista de precios como parámetros rest
  const resultado = calcularPrecioFinal(0.21, ...listaPrecios);
  
  document.getElementById('resTotal').textContent = 
    `Subtotal: $${resultado.subtotal.toFixed(2)} | Total (+21% IVA): $${resultado.total.toFixed(2)}`;
});


// ===================================================
// 4. CLOSURES / CLAUSURAS (Estado Encapsulado)
// ===================================================
// La variable 'contador' queda privada dentro de la función contenedora
function crearContador() {
  let contador = 0; 

  return {
    incrementar: () => ++contador,
    decrementar: () => --contador,
    obtenerValor: () => contador
  };
}

// Instanciamos el closure (mantiene su propio estado)
const miContador = crearContador();

document.getElementById('btnSumar').addEventListener('click', () => {
  const nuevoValor = miContador.incrementar();
  document.getElementById('resContador').textContent = `Valor actual: ${nuevoValor}`;
});

document.getElementById('btnRestar').addEventListener('click', () => {
  const nuevoValor = miContador.decrementar();
  document.getElementById('resContador').textContent = `Valor actual: ${nuevoValor}`;
});
