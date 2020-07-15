let anio = +prompt(`Ingrese la cantidad de años de antiguedad`);
let bono = 0;
if (anio === 1) {
  bono = 100;
} else if (bono === 2) {
  bono = 200;
} else if (bono === 3) {
  bono = 300;
} else if (bono === 4) {
  bono = 400;
} else if (bono === 5) {
  bono = 500;
} else {
  bono = 1000;
}
console.log(`El bono es ${bono}`);
