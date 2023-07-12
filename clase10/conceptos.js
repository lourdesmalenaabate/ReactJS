function action1(valor) {
  return {
    type: "ACTION_AGREGAR",
    payload: valor,
  };
}
const store = {
  state1: {
    array: [],
  },
};

function dispatch(action) {
  const nuevoState = reducer(store.state1, action);
  return nuevoState;
}

function reducer(state, action) {
  switch (action.type) {
    case "ACTION_AGREGAR":
      return {
        ...state,
        array: [...state.array, action.payload],
      };

    default:
      return state;
  }
}

function Componente1() {
  const action = action1("un valor");
  const nuevoState = dispatch(action);
  return nuevoState;
}

const nuevoState1 = Componente1();

const storeActual = {
  ...store,
  state1: nuevoState1,
};

console.log(storeActual);
