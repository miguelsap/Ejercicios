let estudiantes = [
  `jose`,
  `miguel`,
  `juan`,
  `ana`,
  `kevin`,
  `liz`,
  `josseline`,
  `roque`,
  `adan`,
  `eva`,
];
let notas = [14, 15, 9, 5, 16, 14, 19, 14, 10, 11];
let suma = 0;
let promedio = 0;
let cant = 0;
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}
promedio = suma / notas.length;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] > promedio) {
    cant++;
  }
}
console.log(`El promedio es ${promedio}`);
console.log(`Hay ${cant} alumnos que tienen notas superior al promedio`);
