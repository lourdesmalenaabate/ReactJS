function algo() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
  console.log("cuatro");
}

algo();

function* generadora() {
  yield "Inicio"; //Punto de pausa (la función generadora retorna este valor y espera para ejecutar la siguiente línea)
  yield "Segunda Ejecución";
  yield "Tercera Ejecución";
  return "Fin";
}

const iterador = generadora();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

function* saludar(nombre) {
  yield `Hola ${nombre}`;
}

function* generadora2() {
  yield* saludar("Pepe");
  yield* saludar("Pepa");
  yield* saludar("Pepito");
}

const iterador2 = generadora2();
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
