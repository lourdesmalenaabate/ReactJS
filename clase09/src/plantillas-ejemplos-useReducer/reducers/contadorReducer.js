import { TYPES } from "../actions/contadorActions";

//¿Cómo va a realizar sus acciones mi aplicación?
export const initialState = { contador: 10 };

//export const contadorInit = () => {};

export function contadorReducer(state, action) {
  //¿Qué hacer?
  switch (action.type) {
    //¿Cómo hacerlo?
    case TYPES.INCREMENT:
      return {
        ...state,
        contador: state.contador + 1,
      };
    case TYPES.INCREMENT_5:
      return {
        ...state,
        contador: state.contador + action.payload,
      };
    case TYPES.RESET:
      return {
        ...state,
        contador: 0,
      };
    case TYPES.DECREMENT:
      return {
        ...state,
        contador: state.contador - 1,
      };
    case TYPES.DECREMENT_5:
      return {
        ...state,
        contador: state.contador - action.payload,
      };
    default:
      return state;
  }
}
