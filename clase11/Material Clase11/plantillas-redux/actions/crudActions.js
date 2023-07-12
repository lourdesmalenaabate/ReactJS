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
