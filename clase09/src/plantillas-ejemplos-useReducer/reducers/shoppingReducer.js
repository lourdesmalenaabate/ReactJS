//¿Cómo va a realizar las acciones que modifican el state mi app?

import { TYPES } from "../actions/shoppingActions";

export const initialState = {
  products: [],
  cart: [],
};

export function shoppingReducer(state, action) {
  //¿Qué hacer?
  switch (action.type) {
    //¿Cómo hacerlo?
    case TYPES.GET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.payload.map((data) => data),
      };
    }
    case TYPES.ADD_TO_CART: {
      const itemToAdd = state.products.find(
        (product) => product.id === action.payload
      );

      const itemInCart = state.cart.find((item) => item.id === itemToAdd.id);

      return itemInCart
        ? {
            //"modificar item.quantity"
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            //"agregar"
            ...state,
            cart: [...state.cart, { ...itemToAdd, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );

      return itemToDelete.quantity > 1
        ? {
            //Eliminar uno
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            //Sacar del carrito
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        //Sacar del carrito
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    case TYPES.NO_PRODUCTS: {
      return initialState;
    }
    default:
      return state;
  }
}
