// Escribe una función en JavaScript llamada hypotenuse que reciba dos parámetros: a y b,
// que representan los lados de un triángulo, y que retorne la hipotenusa.
//
// Ejemplos:
//
// hypotenuse(3, 4);    // retorna 5
// hypotenuse(10, 13);  // retorna 16.401219466856727


function hypotenuse(a,b){

  return (Math.sqrt(a*a + b*b));

}
console.log(hypotenuse(10,13));
