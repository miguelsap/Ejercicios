let monto = +prompt(`Ingrese cuanto recibirá en diciembre`);
let paquete = "";
if (monto >= 50000) {
  paquete = "A";
} else if (monto < 50000 && monto >= 20000) {
  paquete = "B";
} else if (monto < 20000 && monto >= 10000) {
  paquete = "C";
} else {
  paquete = "D";
}
if (paquete === "A") {
  console.log(
    `Podrás comprar una televisión, un modular, tres pares de zapatos, cinco camisas y cinco pantalones.`
  );
} else if (paquete === "B") {
  console.log(
    `Podrás comprar una grabadora, tres pares de zapatos, cinco camisas y cinco pantalones`
  );
} else if (paquete === "C") {
  console.log(
    `Podrás comprar dos pares de zapatos, tres camisas y tres pantalones.`
  );
} else if (paquete === "D") {
  console.log(`Podrás comprar un par de zapatos, dos camisas y dos pantalones`);
}
