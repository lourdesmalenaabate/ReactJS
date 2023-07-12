//Archivo que crea el Root Reducer combinando los Reducers de todos los elementos de nuestra app

import { combineReducers } from "redux";
import { crudReducer } from "./crudReducer";

//Objeto que contiene la información correspondiente a cada elemento creado con los reducers
const reducer = combineReducers({
  crud: crudReducer,
});

export default reducer;
