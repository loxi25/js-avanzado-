# Funciones en JavaScript## 
1. ¿Qué son las funciones?Las funciones son bloques de código que sirven para realizar una tarea. Se pueden utilizar varias veces sin tener que repetir las mismas 
### Ejemplo
javascript
function saludar() {
    console.log("Hola");
}
saludar();
#### ExplicaciónSe crea una función llamada saludar y después se ejecuta para mostrar un mensaje.## 2. Declarar y llamar funcionesPara crear una función se utiliza la palabra function, luego se escribe su nombre y se colocan paréntesis. Las instrucciones van dentro de las llaves.### Ejemplo
javascript
function mensaje() {
    console.log("Estoy aprendiendo JavaScript");
}
mensaje();
#### ExplicaciónLa función muestra un mensaje cuando se llama.## 3. Parámetros y argumentosLos parámetros reciben información dentro de una función. Los argumentos son los valores que se le pasan cuando se utiliza.### Ejemplo
javascript
function saludar(nombre) {
    console.log("Hola " + nombre);
}
saludar("Daniel");
#### Explicaciónnombre es el parámetro y "Daniel" es el argumento.## 4. La instrucción returnreturn sirve para devolver un resultado que se puede utilizar en otra parte del programa.### Ejemplo
javascript
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(5, 3);
console.log(resultado);
#### Resultado
text
8
## 5. Funciones con varios parámetrosUna función puede recibir varios datos para realizar una operación.### Ejemplo
javascript
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(4, 5));
#### Resultado
text
20
## 6. Funciones anónimasSon funciones que no tienen un nombre propio y que se pueden guardar en una variable.### Ejemplo
javascript
const restar = function(a, b) {
    return a - b;
};
console.log(restar(10, 4));
#### Resultado
text
6
## 7. Funciones flechaLas funciones flecha permiten escribir funciones de una forma más corta. Se utiliza el símbolo =>.### Ejemplo
javascript
const cuadrado = numero => numero * numero;
console.log(cuadrado(5));
#### Resultado
text
25
## 8. Alcance de las variablesEl alcance indica en qué parte del código se puede utilizar una variable.### Ejemplo
javascript
function ejemplo() {
    let mensaje = "Hola mundo";
    console.log(mensaje);
}
ejemplo();
#### ExplicaciónLa variable mensaje se utiliza dentro de la función ejemplo.## 9. Funciones con condicionesLas funciones pueden utilizar condiciones como if y else para tomar decisiones.### Ejemplo
javascript
function determinarEstado(nota) {
    if (nota >= 3) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
console.log(determinarEstado(4));
console.log(determinarEstado(2));
#### Resultado
text
Aprobado
Reprobado
## 10. Funciones en nuestro proyectoNuestro proyecto es un sistema de calificaciones que permite ingresar tres notas, calcular el promedio y mostrar si el estudiante aprobó o reprobó.### Función calcularPromedio
javascript
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
#### ExplicaciónRecibe las tres notas y devuelve el promedio.### Función determinarEstado
javascript
function determinarEstado(promedio) {
    if (promedio >= 3) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
#### ExplicaciónComprueba si el promedio es igual o mayor que 3 para determinar el estado del estudiante.### Función mostrarResultado
javascript
function mostrarResultado(promedio, estado) {
    document.getElementById("resultado").innerHTML =
        "<h2>Resultados</h2>" +
        "<p>Promedio: " + promedio.toFixed(2) + "</p>" +
        "<p>Estado: " + estado + "</p>";
}
#### ExplicaciónMuestra el promedio y el estado en la página web.### Función ejecutarEjemploEsta función obtiene las notas ingresadas, verifica que sean válidas y utiliza las otras funciones para calcular y mostrar el resultado.## 11. Ejercicio práctico### Sistema de calificacionesEl ejercicio consiste en


#### ejemplo 1 

index 


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Funciones en JavaScript</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Sistema de calificaciones</h1>
    <p>Escribe las tres notas del estudiante:</p>
    <label for="nota1">Nota 1:</label>
    <input type="number" id="nota1" min="0" max="5" step="0.1" value="4">
    <br><br>
    <label for="nota2">Nota 2:</label>
    <input type="number" id="nota2" min="0" max="5" step="0.1" value="3.5">
    <br><br>
    <label for="nota3">Nota 3:</label>
    <input type="number" id="nota3" min="0" max="5" step="0.1" value="5">
    <br><br>
    <button onclick="ejecutarEjemplo()">Calcular promedio</button>
    <div id="resultado">
        <p>Aquí aparecerá el resultado.</p>
    </div>
    <script src="script.js"></script>
</body>
</html>




js 




function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
function determinarEstado(promedio) {
    if (promedio >= 3) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
function mostrarResultado(promedio, estado) {
    document.getElementById("resultado").innerHTML =
        "<h2>Resultados</h2>" +
        "<p>Promedio: " + promedio.toFixed(2) + "</p>" +
        "<p>Estado: " + estado + "</p>";
}
function ejecutarEjemplo() {
    const campo1 = document.getElementById("nota1").value;
    const campo2 = document.getElementById("nota2").value;
    const campo3 = document.getElementById("nota3").value;
    const resultado = document.getElementById("resultado");
    if (campo1 === "" || campo2 === "" || campo3 === "") {
        resultado.innerHTML = "<p>Debes ingresar las tres notas.</p>";
        return;
    }
    const nota1 = Number(campo1);
    const nota2 = Number(campo2);
    const nota3 = Number(campo3);
    if (
        !Number.isFinite(nota1) ||
        !Number.isFinite(nota2) ||
        !Number.isFinite(nota3) ||
        nota1 < 0 || nota1 > 5 ||
        nota2 < 0 || nota2 > 5 ||
        nota3 < 0 || nota3 > 5
    ) {
        resultado.innerHTML =
            "<p>Las notas deben estar entre 0 y 5.</p>";
        return;
    }
    const promedio = calcularPromedio(nota1, nota2, nota3);
    const estado = determinarEstado(promedio);
    mostrarResultado(promedio, estado);
}




### ejemplo 2 

index 

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicios Prácticos: Funciones en JavaScript</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 650px;
      margin: 30px auto;
      padding: 0 15px;
      background-color: #f4f7f6;
    }
    h1 { text-align: center; color: #2c3e50; }
    .card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    input {
      padding: 8px;
      margin: 5px 5px 5px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 8px 15px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover { background-color: #2980b9; }
    .resultado {
      margin-top: 10px;
      font-weight: bold;
      color: #27ae60;
    }
  </style>
</head>
<body>

  <h1>Funciones en JavaScript e HTML Interconectados</h1>

  <!-- Ejercicio 1: Declaración de Función -->
  <div class="card">
    <h2>1. Cálculo de Área (Declaración de Función)</h2>
    <input type="number" id="base" placeholder="Base (cm)">
    <input type="number" id="altura" placeholder="Altura (cm)">
    <button id="btnCalcularArea">Calcular Área</button>
    <div id="resArea" class="resultado"></div>
  </div>

  <!-- Ejercicio 2: Funciones de Flecha (Arrow Functions) -->
  <div class="card">
    <h2>2. Filtro de Números Pares (Arrow Function)</h2>
    <p>Lista base: <code>[10, 15, 22, 33, 40, 55, 60]</code></p>
    <button id="btnFiltrarPares">Filtrar Pares</button>
    <div id="resPares" class="resultado"></div>
  </div>

  <!-- Ejercicio 3: Parámetros Rest y por Defecto -->
  <div class="card">
    <h2>3. Carrito de Compras (Parámetros Rest)</h2>
    <p>Ingresa precios separados por comas:</p>
    <input type="text" id="preciosInput" placeholder="100, 50, 25">
    <button id="btnCalcularTotal">Calcular Total (+21% IVA)</button>
    <div id="resTotal" class="resultado"></div>
  </div>

  <!-- Ejercicio 4: Closures (Clausuras) -->
  <div class="card">
    <h2>4. Contador Encapsulado (Closure)</h2>
    <button id="btnSumar">+1 Incrementar</button>
    <button id="btnRestar">-1 Decrementar</button>
    <div id="resContador" class="resultado">Valor actual: 0</div>
  </div>

  <!-- ENLACE AL ARCHIVO JAVASCRIPT -->
  <script src="script.js"></script>
</body>
</html>




js 


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
