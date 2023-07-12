//Creación del Store que contendrá el State global de nuestra aplicación

import { createStore } from "redux";
import reducer from "../reducers";

const store = createStore(reducer);

export default store;
