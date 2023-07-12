import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.GET_ALL_PRODUCTS: {
      //Agrega los productos a la BD
      return {
        ...state,
        //Creamos un array a partir de la data obtinida en el payload
        products: action.payload.map((data) => data),
      };
    }
    case TYPES.ADD_TO_CART: {
      //Buscar el producto en la BD
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //Checkear si el producto se encuentra en el carrito
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            //Si existe el producto en el carrito, agregar 1 a la clave quantity
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            //Si no existe el producto en el carrito, crear la clave quantity con valor 1
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      //Buscar el producto en el carrito
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            //Si el producto tiene más de uno, restar 1 a la clave quantity
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            //Si producto tiene 1 o menos, eliminar el producto del carrito
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      //Eliminar el producto del carrito
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      //Vaciar el carrito
      return {
        ...state,
        cart: [],
      };
    case TYPES.NO_PRODUCTS: {
      //Retorno de estado inicial cuando no se encuentran productos
      return shoppingInitialState;
    }
    default:
      //Evita cambios no esperados en el state retornando el valor recibido cuando se ejecuta el switch
      return state;
  }
}
