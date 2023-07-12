import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
  ERROR,
} from "../types";

export const initialState = {
  db: [],
  err: null,
};

export function crudReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
      /* return {
        ...state,
        db: [...action.payload],
      }; */
    }
    case CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case UPDATE_DATA: {
      const newDb = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );

      return {
        ...state,
        db: newDb,
      };
    }
    case DELETE_DATA: {
      const newDb = state.db.filter((el) => el.id !== action.payload);
      return {
        ...state,
        db: newDb,
      };
    }
    case ERROR: {
      return {
        ...state,
        err: action.payload,
      };
    }
    case NO_DATA:
      return initialState;

    default:
      return state;
  }
}
