function* funcionGeneradora() {
  yield console.log("Inicio");
  yield console.log("Segunda Ejecución");
  yield console.log("Tercera Ejecución");
  return console.log("Fin");
}

const iterador = funcionGeneradora();
iterador.next();
iterador.next();
iterador.next();
iterador.next();

function* saludar(nombre) {
  yield console.log(`Hola ${nombre}`);
}

function* funcionGeneradora2() {
  yield* saludar("Pepe");
  yield* saludar("Pepa");
  yield* saludar("Pepito");
}

const iterador2 = funcionGeneradora2();
iterador2.next();
iterador2.next();
iterador2.next();

function* funcionGeneradora3(n) {
  yield* multiplicar(n);
  n += multiplicar(n).next().value; //2+4
  console.log(n);

  yield* multiplicar(n);
  n += multiplicar(n).next().value; //6+12
  console.log(n);

  yield* multiplicar(n);
  n += multiplicar(n).next().value; //18+36
  return console.log(n);
}

function* multiplicar(n) {
  yield n * 2;
}

const iterador3 = funcionGeneradora3(2);
console.log(iterador3.next());
console.log(iterador3.next());
console.log(iterador3.next());
console.log(iterador3.next());
