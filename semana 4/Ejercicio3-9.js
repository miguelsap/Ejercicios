const base_a = 1200,
  base_b = 950;
let cobertura = prompt(`Ingrese el tipo de cobertura que necesita (A o B)`);
let edad = +prompt(`Ingrese su edad`);
let alcohol = prompt(`Bebe alcohol (SI/NO)?`);
let lentes = prompt(`Usa lentes (SI/NO)?`);
let enfermedad = prompt(
  `Padece alguna enfermedad (Deficiencia cardiaca o diabetes) (SI/NO)?`
);
let poliza = 0;
if (cobertura === "A") {
  poliza = base_a;
} else if (poliza === "B") {
  poliza = base_b;
} else {
  console.log(`Ingrese una poliza correcta`);
}
if (alcohol === "SI") {
  poliza = poliza * 1.1;
}
if (lentes === "SI") {
  poliza = poliza * 1.05;
}
if (enfermedad === "SI") {
  poliza = poliza * 1.05;
}
if (edad > 40) {
  poliza = poliza * 1.2;
} else {
  poliza = poliza * 1.1;
}
console.log(`El total de la poliza a pagar es ${poliza}`);
