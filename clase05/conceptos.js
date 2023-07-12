function ComponentePadre(props = {}) {
  //IFFE - Immidatly Invoke Function Expresion
  (() => {
    const state = {
      textoState: "Un texto en el State",
      numero: 2,
    };

    global.compartir = (valor) => state[valor];
  })();

  const texto = "Texto almacenado en Componente Padre";
  //const textoState = global.compartir("textoState");

  const ComponenteHijo = (props = {}) => {
    console.log(texto);
    console.log(props.textoState);
  };

  ComponenteHijo({ textoState: global.compartir("textoState") });
}

ComponentePadre();

const calculadora = (operacion, valorInicial, numeros) => {
  let total = valorInicial;
  for (const numero of numeros) {
    total = operacion(total, numero);
  }
  return total;
};

const suma = (n1, n2) => n1 + n2;
const multiplicar = (n1, n2) => n1 * n2;

console.log(calculadora(suma, 0, [1, 2, 4]));
console.log(calculadora(multiplicar, 1, [1, 2, 4]));
