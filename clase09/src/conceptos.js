//Mutación de Objeto
const obj = {
  unaClave: "un valor",
};

console.log(obj.unaClave);

obj.unaClave = "otro valor";
console.log(obj.unaClave);

//Inmutabilidad (Hacer una copia del objeto)
const objOriginal = {
  unaClave: "un valor",
};

console.log(objOriginal);

const objCopia = { ...objOriginal, unaClave: "otro valor" };
console.log(objOriginal);
console.log(objCopia);

//Función Pura -> Función que al recibir los mismos valores, retorna el mismo valor. No tiene efectos secundarios

const sumar = (n1, n2) => n1 + n2; //retorno implícito de las Arrow Function

console.log(sumar(2, 2));
console.log(sumar(2, 2));
console.log(sumar(2, 2));
console.log(sumar(2, 2));
console.log(sumar(2, 2));
console.log(sumar(2, 2));

const state = {
  clave: "valor",
};

const modificarStore = (state, action) => {
  console.log(action.type); //¿Qué quiero hacer?
  console.log(action.payload); //¿Cómo quiero hacerlo?

  switch (action.type) {
    //¿Qué hacer?
    case "modificar":
      //Cómo hacerlo
      return {
        ...state,
        clave: action,
      };
    default:
      return state;
  }
};

console.log(modificarStore(state, { type: "modificar", payload: "un valor" }));
console.log(modificarStore(state, { type: "modificar", payload: "un valor" }));
console.log(modificarStore(state, { type: "modificar", payload: "un valor" }));
console.log(modificarStore(state, { type: "modifica", payload: "un valor" }));
