import { helpHttp } from "../helpers/helpHttp";

import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
  ERROR,
} from "../types";

let api = helpHttp();
let url = "https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter";

//Actions Creators => Son las que se ejecutan en el dispatch. Reciben el valor que tomará el payload y retornan la acción correspondiente (acción = {tipo, payload})

const createAction = (data) => ({ type: CREATE_DATA, payload: data });
const readAllAction = (data) => ({ type: READ_ALL_DATA, payload: data });
const updateAction = (data) => ({ type: UPDATE_DATA, payload: data });
const deleteAction = (id) => ({ type: DELETE_DATA, payload: id });
const noAction = () => ({ type: NO_DATA });
const errorAction = (err) => ({ type: ERROR, payload: err });

//Manejo de las llamadas asíncronas con Redux Thunk

export const getAllData = () => {
  return async (dispatch) => {
    return await api.get(url).then((res) => {
      if (!res.err) {
        dispatch(readAllAction(res));
        dispatch(errorAction(null));
      } else {
        dispatch(noAction());
        dispatch(errorAction(res));
      }
    });
  };
};

export const createData = (data) => {
  return async (dispatch) => {
    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    return await api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch(createAction(res));
        dispatch(errorAction(null));
      } else {
        dispatch(noAction());
        dispatch(errorAction(res));
      }
    });
  };
};

export const updateData = (data) => {
  return async (dispatch) => {
    const endpoint = `${url}/${data.id}`;
    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    return await api.put(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch(updateAction(res));
        dispatch(errorAction(null));
      } else {
        dispatch(noAction());
        dispatch(errorAction(res));
      }
    });
  };
};

export const deleteData = (id) => {
  return async (dispatch) => {
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      const endpoint = `${url}/${id}`;
      const options = {
        headers: { "content-type": "application/json" },
      };

      return await api.del(endpoint, options).then((res) => {
        if (!res.err) {
          dispatch(deleteAction(res.id));
          dispatch(errorAction(null));
        } else {
          dispatch(noAction());
          dispatch(errorAction(res));
        }
      });
    } else {
      return;
    }
  };
};
