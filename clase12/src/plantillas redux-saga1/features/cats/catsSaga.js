/*
    call - Permite llamadas AJAX
    put - Permite llamar a las actions
    takeEvery - Watcher de acciones que ejecuta la correspondiente función (Worker)
*/
import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsFailure, getCatsSuccess } from "./catsSlice";

//Watcher
function* catsSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

//Worker
const url = "https://api.thecatapi.com/v1/breeds";

function* workGetCatsFetch() {
  try {
    const res = yield call(() => fetch(url));
    if (!res.ok) {
      const err = new Error("Error en la petición Fetch");
      err.status = res.status || "00";
      err.statusText = res.statusText || "Ocurrió un error";
      throw err;
    }
    const arrCats = yield res.json();
    const cortarArray = arrCats.slice(0, 9);
    yield put(getCatsSuccess(cortarArray));
  } catch (err) {
    yield put(getCatsFailure(err));
  }
}

export default catsSaga;
