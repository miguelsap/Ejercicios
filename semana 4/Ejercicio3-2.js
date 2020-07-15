let htrab = +prompt(`Ingrese sus horas trabajadas durante la semana`);
let phora = +prompt(`Ingrese el pago por hora`);

let excedente = 0;
let sueldo = 0;

if (htrab > 40) {
  excedente = htrab - 40;
  sueldo = 40 * phora + excedente * phora * 2;
} else {
  sueldo = htrab * phora;
}

console.log(`Su sueldo semanal es ${sueldo}`);
