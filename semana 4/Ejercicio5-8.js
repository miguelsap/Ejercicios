let vector1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let vector2 = [];
debugger;
let primero = vector1[vector1.length - 1];
for (let i = 0; i < vector1.length; i++) {
  if (i === 0) {
    vector2.push(primero);
  } else {
    vector2.push(vector1[i - 1]);
  }
}
console.log(vector1);
console.log(vector2);
