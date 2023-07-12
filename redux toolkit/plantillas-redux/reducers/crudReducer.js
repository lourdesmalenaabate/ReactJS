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
};

export function crudReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      return;
    }
    case CREATE_DATA: {
      return;
    }
    case UPDATE_DATA: {
      return;
    }
    case DELETE_DATA: {
      return;
    }
    case ERROR: {
      return;
    }
    case NO_DATA:
      return;

    default:
      return state;
  }
}
