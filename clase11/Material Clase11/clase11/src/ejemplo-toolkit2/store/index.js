import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../features/news/newsSlice";

//configurStore facilita la configuración del store agrupando en una sola función todos los elementos posibles de configuración (reducres y middlewares) y habilita las Redux DevTools de forma automática
export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
});
