// Escribe tu código aquí.
//1. construir una funcion que reciba dos parametros parámetros un string y un array de strings, para devolver un array con las palabras de mayor longitud que el parametro 1

//crear la funcion
function comparacionDeStrings(cadena, arreglo) {
    //calcular la longitud del parametro 1
    numDeLaCadena = cadena.length;
    let arregloResultado = [];

    //ciclo para acceder al arreglo
    for (i in arreglo) {
        //condicion para evaluar el parametro 1 con respecto al parametro 2
        if (numDeLaCadena < arreglo[i].length) {
            arregloResultado.push(arreglo[i]);//Se agrega al arreglo resultado en caso de que se cumpla la condición
        }
    }
    return arregloResultado;
}


///////////////////////////////////////////////////////////////////////////////////////////////7777

//2. Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista con el uso del DOM

//Se obtiene el elemento 'ul', donde se agregara la lista
const lista = document.getElementById('lista');

//Se crea la función pidiendo un parametro
function crearLista(elementosLista) {
    lista.innerHTML='';
    //Se crea un ciclo que cubra con cada elemento del arreglo
    for (indice in elementosLista) {
        //Se crea un elemento 'li'
        let elemento = document.createElement('li');
        //en este elemento 'li' se inserta el elemento del arreglo de acuerdo a su indice
        elemento.innerHTML = elementosLista[indice];
        //dentro del elemeto 'ul' se agrega el elemento 'li' con el valor del array correspondiente
        lista.appendChild(elemento);
    }

}

let cadenaString = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'bicicleta', 'computadora', 'maruchan', 'hola'];



function mostraInfo() {

    let palabra = document.getElementById('palabra');
    //Mandar a llamar a la funcion e imprimir el resultado
    let resultadoPrimeraFun=comparacionDeStrings(palabra.value , cadenaString)
    console.log(resultadoPrimeraFun);
    crearLista(resultadoPrimeraFun);

}
let btnComparar = document.getElementById('btnComparar');

//evento del boton
btnComparar.addEventListener('click', mostraInfo);
//Se manda a llamar a la funcion




//RETROALIMENTACIÓN
//Todo bien, falto de tiempo, hubo errores pero se supo arreglar, explicaba de como se conectaban los archivos, posibilidad de preguntas