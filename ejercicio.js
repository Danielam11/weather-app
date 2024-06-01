/*Descripción:
Crea una función en JavaScript llamada filtrarPrimos que reciba un arreglo de números y devuelva un nuevo arreglo que contenga solo los números primos del arreglo original. Un número primo es aquel que es mayor que 1 y no tiene divisores positivos aparte de 1 y él mismo.
Requisitos:
a.	La función debe iterar a través del arreglo dado.
b.	Para cada número, debe verificar si es primo.
c.	Si el número es primo, debe añadirse al nuevo arreglo de números primos.
d.	La función debe devolver el nuevo arreglo.*/

function primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero > 1;
}

function filtrar(lista) {
  return lista.filter((numero) => primo(numero)); //filter es un metodo para iterar sobre cada elemento del arreglo
}

// Ejemplo:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numerosPrimos = filtrar(numeros);

console.log(numerosPrimos); // Output: [2, 3, 5, 7]
