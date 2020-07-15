let sueldo = +prompt(`Ingrese su sueldo`);
let anio = +prompt(`Ingrese la cantidad de años en la empresa`);

let bono_anio = 0;
let bono_sueldo = 0;

if (anio > 2 && anio < 5) {
  bono_anio = sueldo * 0.2;
} else if (anio > 5) {
  bono_anio = sueldo * 0.3;
}
if (sueldo < 1000) {
  bono_sueldo = sueldo * 0.25;
} else if (sueldo > 1000 && sueldo <= 3500) {
  bono_sueldo = sueldo * 0.15;
} else {
  bono_sueldo = sueldo * 0.1;
}
console.log(`El bono por antiguedad es ${bono_anio}`);
console.log(`El bono por sueldo es ${bono_sueldo}`);
console.log(`El sueldo total es ${sueldo + bono_anio + bono_sueldo}`);
