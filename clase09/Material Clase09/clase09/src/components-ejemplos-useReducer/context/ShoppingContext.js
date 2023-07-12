import { useReducer, createContext } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";

const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState); //Creación del state mediante useReducer
  const { products, cart } = state; //Destructuración de la db almacenada en el state

  const setData = (data) => {
    data.length > 0
      ? dispatch({ type: TYPES.GET_ALL_PRODUCTS, payload: data })
      : dispatch({ type: TYPES.NO_PRODUCTS });
  };

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const data = {
    products,
    cart,
    setData,
    addToCart,
    delFromCart,
    clearCart,
  };

  return (
    <ShoppingContext.Provider value={data}>{children}</ShoppingContext.Provider>
  );
};

export { ShoppingProvider };
export default ShoppingContext;
