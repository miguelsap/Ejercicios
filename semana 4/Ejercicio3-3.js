let gasto = +prompt(`Ingrese cuanto quiere gastar en un regalo`);
if (gasto <= 10) {
  console.log(`Usted puede comprar una tarjeta`);
} else if (gasto >= 11 && gasto <= 100) {
  console.log(`Usted puede comprar chocolates`);
} else if (gasto >= 101 && gasto <= 250) {
  console.log(`Usted puede comprar flores`);
} else {
  console.log(`Usted puede comprar un anillo`);
}
