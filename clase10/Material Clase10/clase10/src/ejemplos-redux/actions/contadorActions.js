import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

//Funciones creadoras de acciones. Son las que se ejecutan en el dispatch. Reciben el valor que tomará el payload y retornan la acción correspondiente (acción = {tipo, payload})

export const sumar = () => ({ type: INCREMENT });

export const restar = () => ({ type: DECREMENT });

export const sumar5 = (value) => ({ type: INCREMENT_5, payload: value });

export const restar5 = (value) => ({ type: DECREMENT_5, payload: value });

export const reset = () => ({ type: RESET });
