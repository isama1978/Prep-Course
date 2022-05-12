// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = []
  Object.entries(objeto).forEach(([key, value]) => {
    matriz.push([key, value])
  })
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const stringArray = string.split('').sort()
  let obj = {}
  let counter = 1
  for(let i = 0; i < stringArray.length; i++){
    if(stringArray[i + 1] == stringArray[i]){
      counter++
    }else{
      obj[stringArray[i]] = counter
      counter = 1
    }
  }
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const sArray = s.split('')
  let segundoArray = []
  let arrayMinusculas = []
  for(let i = sArray.length -1; i >= 0; i--){
    if(sArray[i] == sArray[i].toUpperCase()){
      segundoArray.unshift(sArray[i])
    }else{
      arrayMinusculas.unshift(sArray[i])
    }
  }
  segundoArray.push(...arrayMinusculas)
  const arrayUnido = segundoArray.join('')
  return arrayUnido
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const stringArray = str.split(' ')
  return  stringArray.map(function(elemento){
      const elementoInvertido = elemento.split('').reverse()
      const elementoUnido = elementoInvertido.join('')
      return elementoUnido
    }).join(' ')

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const numeroACadena = numero + ''
  const stringArray = numeroACadena.split('').reverse().join('')
  return (numero == stringArray ? 'Es capicua' : 'No es capicua')
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const arrayCadena = cadena.split('')
  const aEliminar = ['a', 'b', 'c']
  for(i = arrayCadena.length - 1; i >= 0; i--){
    if(aEliminar.includes(arrayCadena[i])){
      arrayCadena.splice(i, 1)
    }
  }
  return arrayCadena.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  const arrayOrdenado = arr.sort((elem1, elem2) => elem1.length - elem2.length)
  return arrayOrdenado
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let interseccion = []
  arreglo1.forEach(elemento => {
    if(arreglo2.includes(elemento)){
      interseccion.push(elemento)
    }
  })
  return interseccion
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

