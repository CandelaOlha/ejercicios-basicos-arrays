const numeros = [5, 76, 23, 56, 399, 99, 3, 2, 139, 256];

// ENCONTRAR EL NÚMERO MAYOR

const encontrarMayor = (numeros) => {
    let resultado = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > resultado) {
            resultado = numeros[i]
        }
    }

    console.log(resultado);
}

encontrarMayor(numeros);

// ENCONTRAR EL NÚMERO MENOR

const encontrarMenor = (numeros) => {
    let resultado = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < resultado) {
            resultado = numeros[i];
        }
    }

    console.log(resultado);
}

encontrarMenor(numeros);

// ORDENAR UN ARRAY DE NÚMEROS DE MENOR A MAYOR

const ordenarDeMenorAMayor = (numeros) => {
    console.log(numeros.sort((a, b) => a - b));
}

ordenarDeMenorAMayor(numeros);

// ORDENAR UN ARRAY DE NÚMEROS DE MAYOR A MENOR

const ordenarDeMayorAMenor = (numeros) => {
    console.log(numeros.sort((a, b) => b - a));
}

ordenarDeMayorAMenor(numeros);

// ORDENAR UN ARRAY DE PALABRAS POR ORDEN ALFABÉTICO

const nombres = ["Florencia", "Camila", "Alejandro", "Giselle", "Manuel", "Zeus"];

const ordenarAlfabeticamente = (nombres) => {
    console.log(nombres.sort());
}

ordenarAlfabeticamente(nombres);

// ORDENAR UN ARRAY DE PALABRAS ALFABÉTICAMENTE, PERO DE LA "Z" A LA "A"

const ordenarAlReves = (nombres) => {
    console.log(nombres.sort().reverse());
}

ordenarAlReves(nombres);