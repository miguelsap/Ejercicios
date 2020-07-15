let horas = +prompt(`Ingrese la cantidad de horas`);
let cobrar = 0;

if (horas <= 2) {
  cobrar = horas * 5;
} else if (horas >= 3 && horas <= 5) {
  cobrar = (horas - 2) * 4 + 2 * 5;
} else if (horas >= 6 && horas <= 10) {
  cobrar = (horas - 5) * 3 + 2 * 5 + 3 * 4;
} else {
  cobrar = (horas - 10) * 2 + 2 * 5 + 3 * 4 + 5 * 3;
}
console.log(`La cantidad de horas a cobrar es ${cobrar}`);
