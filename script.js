// Registrar el Service Worker para habilitar la funcionalidad PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
            console.log('ServiceWorker registrado con éxito:', registration.scope);
        }, function(err) {
            console.log('Error al registrar el ServiceWorker:', err);
        });
    });
}

function calculateAverage() {
    const inputNumber = document.getElementById('inputNumber').value;
    const numbers = [];

    // Generar 7 números aleatorios entre 70 y 100
    while (numbers.length < 7) {
        const randomNumber = Math.floor(Math.random() * (100 - 70 + 1) + 70);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    // Calcular el promedio de los números generados
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;

    // Mostrar el resultado en la página
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Los números generados son: ${numbers.join(', ')} y su promedio es: ${average}.`;

    // Verificar si el promedio coincide con el número ingresado
    if (average === Number(inputNumber)) {
        resultDiv.style.color = 'green';
    } else {
        resultDiv.style.color = 'red';
    }
}