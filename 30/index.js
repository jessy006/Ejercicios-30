// Array nums
let nums = [6, 13, 1, 15, 5];

// Usar un for y un if para mostrar los elementos impares
let elementosImpares = nums.filter(num => num % 2 !== 0);

// Mostrar los resultados en la consola
alert.log("Elementos impares:", elementosImpares);

// Mostrar los resultados en un alert
alert("Elementos impares: " + elementosImpares.join(", "));
