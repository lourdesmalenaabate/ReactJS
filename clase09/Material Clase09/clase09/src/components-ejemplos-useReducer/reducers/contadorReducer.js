import { TYPES } from "../actions/contadorActions";

//State inicial
export const contadorInitialState = { contador: 0 };

//Función que genra un State diferido
export const contadorInit = (initialState) => {
  return {
    contador: initialState.contador + 50,
  };
};

//Funció, reductora que toma el Objeto State y el Objeto Action y retorna el nuevo Objeto State
export function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return contadorInitialState;
    default:
      return state;
  }
}
