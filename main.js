// Vamos a crear una función para calcular el peso ideal de una persona, iniciamos con un alert para explicar de que trata el pequeño programa al usuario

alert("Creamos un programa para calcular el peso ideal de una persona según su edad, altura y sexo. ¡Te invito a probarla! (Solo es válida para mayores de 18 años)")

function calcularPesoIdeal() {
    let continuar = true;
    while(continuar){
        // Declaro las variables de edad, altura y sexo para calcular el peso ideal
        // Declaro la variable validarDatos para usar dentro del bucle
        
        let edad = 0;
        let altura = 0;
        let sexo = 0;
        let validarDatos = false;
        
        // Creamos un DoWhile para obtener los datos a traves del prompt y repetir el bucle en caso de que los datos sean inválidos
        do {
            edad = parseInt(prompt("Introduzca su edad:"));
            altura = parseFloat(prompt("Introduzca su altura:"));
            sexo = prompt("Introduzca su sexo (M para masculino, F para femenino):").toUpperCase();
            
            if (!isNaN(edad) && !isNaN(altura) && (sexo === 'M' || sexo === 'F')) {
            validarDatos = true;
            } else {
            alert("Los datos son invalidos, introduzcalos nuevamente.");
            }
        } while (!validarDatos);
        
        // Declaro la varibale pesoIdeal para inicializar con el cálculo
        let pesoIdeal;
        
        // Usamos la fórmula de Devine, una fórmula que calcula el peso según el sexo y la altura, y usamos un switch para añadir un cambio ligero segñun la edad
        switch (true) {
            case (edad >= 18 && edad <= 30): //Si la edad esta entre 18 y 30 años, no se aplica nigun ajuste
                if (sexo === 'M') {
                    pesoIdeal = 50 + 2.3 * ((altura / 2.54) - 60);
                } else if (sexo === 'F') {
                    pesoIdeal = 45.5 + 2.3 * ((altura / 2.54) - 60);
                }
                break;
            case (edad >= 31 && edad <= 50): //Si la edad se encuentra entre 31 y 50 años, se aplica un ajuste de menos 2 Kg
                if (sexo === 'M') {
                    pesoIdeal = 50 + 2.3 * ((altura / 2.54) - 60) - 2;
                } else if (sexo === 'F') {
                    pesoIdeal = 45.5 + 2.3 * ((altura / 2.54) - 60) - 2;
                }
                break;
            case (edad > 50): // Si la edad es mayor a 50 años, se aplica un ajuste de menos 4 Kg
                if (sexo === 'M') {
                    pesoIdeal = 50 + 2.3 * ((altura / 2.54) - 60) - 4;
                } else if (sexo === 'F') {
                    pesoIdeal = 45.5 + 2.3 * ((altura / 2.54) - 60) - 4;
                }
                break;
            default:
                pesoIdeal = 0; // Si la edad ingresada es menor a 18 años, el dato se considera inválido
                alert("Edad no válida.");
                break;
        }
    // Utilizamos un alert para mostrar el resultado, donde contatenamos el peso ideal redondeado en 2 decimales
    alert("Tu peso ideal es aproximadamente: " + pesoIdeal.toFixed(2) + " kg");
    
    // Pregunto al usuario si quiere volver a calcular su peso, en caso de si, podrá volver a ingresar los datos por el confirm, en caso de no, tendra un alert despidiendose del usuario
    continuar = confirm("¿Te gustaría calcular tu peso ideal nuevamente?");
    }
    alert("Gracias por usar el programa. Hasta luego! :D");
}

// Aca llamamos a la fúncion para ejecutarla :D
calcularPesoIdeal();
