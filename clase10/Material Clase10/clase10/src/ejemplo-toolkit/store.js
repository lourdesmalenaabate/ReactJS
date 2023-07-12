import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

//configurStore facilita la configuración del store agrupando en una sola función todos los elementos posibles de configuración (reducres y middlewares) y habilita las Redux DevTools de forma automática
export const store = configureStore({
  //Objeto que combina todos los slice y crea el rootReducer
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
