// // Registrar el Service Worker para habilitar la funcionalidad PWA
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('service-worker.js').then(function(registration) {
//             console.log('ServiceWorker registrado con éxito:', registration.scope);
//         }, function(err) {
//             console.log('Error al registrar el ServiceWorker:', err);
//         });
//     });
// }

function calculateAverage() {
    const inputNumber = document.getElementById('inputNumber').value;
    const cantidadnotas = document.getElementById('cantidadnotas').value;
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    
 
    var numeros = generarNumerosConPromedioEnRango(Number(cantidadnotas), Number(min),Number(max),Number(inputNumber));
     // Mostrar el resultado en la página
     const resultDiv = document.getElementById('result');
     resultDiv.innerHTML = `Los números generados son son: <br/><br/> ${numeros.join(' <br/> ')}`; 
}
 

function generarNumerosConPromedioEnRango(cantidadNumeros, min, max, promedio) {
    // Generar los números aleatorios dentro del rango [min, max]
    var numeros = [];
    for (var i = 0; i < cantidadNumeros; i++) {
      var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(numeroAleatorio)
      numeros.push(numeroAleatorio);
    }
  
    // Calcular la suma de los números generados
    var suma = numeros.reduce(function (a, b) {
      return a + b;
    }, 0);
  
    // Calcular el factor de ajuste para igualar el promedio al número recibido
    var factorAjuste = promedio / (suma / cantidadNumeros);
  
    // Aplicar el factor de ajuste a cada número generado
    for (var i = 0; i < cantidadNumeros; i++) {
      numeros[i] *= factorAjuste;
      numeros[i] = Math.round(numeros[i]);
    }
  
    return numeros;
  }

 