let vector1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let vector2 = [];
let suma = 0;

for (let i = 0; i < vector1.length; i++) {
  suma += vector1[i];
}
vector2.push(suma);
console.log(vector2);
