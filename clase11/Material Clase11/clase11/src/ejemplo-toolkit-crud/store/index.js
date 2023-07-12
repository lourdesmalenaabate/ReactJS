import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "../features/crud/crudSlice";

//configurStore facilita la configuración del store agrupando en una sola función todos los elementos posibles de configuración (reducres y middlewares) y habilita las Redux DevTools de forma automática
export const store = configureStore({
  //Objeto que combina todos los slice y crea el rootReducer
  reducer: {
    crud: crudReducer,
  },
});
