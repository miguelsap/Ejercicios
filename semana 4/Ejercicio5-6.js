let i = 0;
let nombres = [];
let edades = [];
let mayor = 0;
let pos = 0;
while (i < 10) {
  let nombre = prompt(`Ingrese un nombre`);
  let edad = +prompt(`Ingrese su edad`);
  nombres.push(nombre);
  edades.push(edad);
  if (edad > mayor) {
    mayor = edad;
    pos = i;
  }
  console.log(`${nombres[i]} tiene ${edades[i]}`);
  i++;
}
console.log(`La edad mayor la tiene ${nombres[pos]} con ${edades[pos]} años`);
