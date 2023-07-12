//Archivo que crea el Root Reducer combinando los Reducers de todos los elementos de nuestra app

import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import newsReducer from "./newsReducer";

//Objeto que contiene la información correspondiente a cada elemento creado con los reducers
const reducer = combineReducers({
  contador: contadorReducer,
  news: newsReducer,
});

export default reducer;
