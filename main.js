// Ejercicio 1: Calcular el área de un rectángulo

function areaRectangular(largo, ancho) {

    // Guardar el cálculo del área en una variable
    let calcularArea = largo * ancho;

    // Devolver el área calculada
    return calcularArea;
}

console.log("Solución:");
console.log(areaRectangular(15, 23));   
console.log(areaRectangular(100, 70));  
console.log(areaRectangular(8, 4));   
console.log();



// Ejercicio 2: Contar palabras en una cadena

function contarPalabras(conjuntoPalabras) {

    // Dividir la cadena en palabras 

    let palabrasSeparadas = conjuntoPalabras.split(/\s+/);

    // Eliminar espacios vacíos  al inicio o final

    let palabrasSeparadasJuntas = palabrasSeparadas.filter(palabra => palabra.trim() !== "");

        // Contar el número de palabras
    let totalConjuntoPalabras = palabrasSeparadasJuntas.length;

    // Devolver el valor obtenido
    return totalConjuntoPalabras;
}

console.log("Solución:");
console.log(contarPalabras(" Bienvenidos a la  clase"));
console.log(contarPalabras("A la grande le puse Cuca"));
console.log(contarPalabras("Quiero helado"));
console.log();

//Ejercicio 3:  Invertir una cadena

function invertirPalabra(palabraParaInvertir) {
    
	let palabraInvertida = "";

    // Recorrer la cadena normalmente 

    for (let letra of palabraParaInvertir) {

	//Agregar cada caracter al inicio de la nueva cadena

        palabraInvertida = letra + palabraInvertida;
    }

    return palabraInvertida;
}

console.log("Solución:");
console.log(invertirPalabra("Suelo"));             
console.log(invertirPalabra("Ganar o servir"));       
console.log(invertirPalabra("Sobretodo"));

//Ejercicio 4: Encontrar el palíndromo

function esPalindromo(descubrePalabra) {

    //Convierto todo a minúsculas
    let palabraTransformada = descubrePalabra.toLowerCase()

     //Elimino caracteres alafanuméricos
     let palabraObtenida = palabraTransformada.replace(/[^A-Za-z0-9]/g, '');

    // Inicializar los índices para comparar los caracteres desde los extremos
    let inicioPalabra = 0;  
    let finalPalabra = palabraObtenida.length - 1;  

    // Comprobar si los caracteres desde el inicio y el final de la palabra coinciden
    while (inicioPalabra < finalPalabra) {
        if (palabraObtenida[inicioPalabra] !== palabraObtenida[finalPalabra]) {
            return false;          }

        inicioPalabra++;  
        finalPalabra--;  
    }

    
    return true;
}


console.log(esPalindromo("o rey, o joyero"));  
console.log(esPalindromo("Teléfono"));  
console.log(esPalindromo("aten al planeta"));  
console.log(esPalindromo("yo soy"));  


//Ejercicio 5: Crear un programa para convertir la edad de un perro a años humanos

function convertirEdad() {
    
//Solicitar al usuario que ingrese la edad del perro
    let entradaUsuario = prompt("Por favor, ingresa la edad de tu perro en años:");
    
    //convertir la entrada a un número
    let edadPerro = parseInt(entradaUsuario);

    // Validar si la entrada es un número positivo
    if (isNaN(edadPerro) || edadPerro <= 0) {

        console.log("La edad ingresada no es válida. Por favor, intenta de nuevo.");
        return;
    }

    //Calcular la edad del perro en años humanos
    let edadHumana = edadPerro * 7;

    
    console.log("Tu perro tiene aproximadamente " + edadHumana + " años humanos.");
    alert("Tu perro tiene aproximadamente " + edadHumana + " años humanos.");
}


convertirEdad();

console.log("Solución:");
convertirEdad();
console.log(); 
convertirEdad();
console.log(); 
convertirEdad();
console.log();