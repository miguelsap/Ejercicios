let cantTrab = +prompt(`Ingrese la cantidad de trabajadores`);
let i = 0;
let j = 1;
let diaS = "";
let suma = 0;
let sueldo = 0;
let total = 0;
let mayor = 0;
let pos = 0;
let trabajadores = Array.from(Array(cantTrab), () => new Array(8));

while (i < cantTrab) {
  let nombre = prompt(`Ingrese nombre`);
  trabajadores[i][0] = nombre;
  j = 1;
  while (j <= 6) {
    switch (j) {
      case 1:
        diaS = "Lunes";
        break;
      case 2:
        diaS = "Martes";
        break;
      case 3:
        diaS = "Miercoles";
        break;
      case 4:
        diaS = "Jueves";
        break;
      case 5:
        diaS = "Viernes";
        break;
      case 6:
        diaS = "Sabado";
        break;
      default:
        break;
    }
    let dia = +prompt(`Ingrese las horas del día ${diaS}`);
    trabajadores[i][j] = dia;
    j++;
  }
  let sueldoHora = +prompt(`Ingrese sueldo por hora`);
  trabajadores[i][7] = sueldoHora;
  i++;
}
for (let x = 0; x < trabajadores.length; x++) {
  suma = 0;
  for (let y = 1; y < trabajadores[x].length; y++) {
    if (y < trabajadores[x].length - 1) {
      suma += trabajadores[x][y];
    }
    if (trabajadores[x][1] > mayor) {
      mayor = trabajadores[x][1];
      pos = x;
    }
  }
  sueldo = suma * trabajadores[x][7];
  total += sueldo;
  console.log(`${trabajadores[x][0]} trabajó ${suma} durante la semana`);
  console.log(`El pago de ${trabajadores[x][0]} sera ${sueldo}`);
}
console.log(`El sueldo total que pagara la empresa es ${total}`);
console.log(
  `El trabajador que hizo mas horas durante la semana fue ${trabajadores[pos][0]}`
);
console.log(trabajadores);
