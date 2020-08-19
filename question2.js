// Escribe una función en JavaScript llamada filter que reciba un arreglo de
// números como parámetro y retorne un nuevo arreglo con los números mayores a 10.
//
// Ejemplos:
//
// filter([3, 12, 45, 7]); // retorna [12, 45]
// filter([3, 5]);         // retorna []


function filter(arr){
   return arr.filter((arrItem)=>{return arrItem > 10})



}


console.log(filter([3, 5, 11,12,13,15,0,1]));
