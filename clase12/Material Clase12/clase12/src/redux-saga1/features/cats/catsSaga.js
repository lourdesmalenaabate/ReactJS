/*
    call - Permite llamadas AJAX
    put - Permite llamar a las actions
    takeEvery - Watcher de acciones que ejecuta la correspondiente función (Worker)
*/
import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsFailure, getCatsSuccess } from "./catsSlice";

//Watcher
function* catsSaga() {
  /*
      takeEvery recibe 2 argumentos
          => 1ro la acción (recordar que es distinto el nombre de una acción en react-redux y redux-toolkit)
          => 2do el Worker (función que realiza el trabajo correspondiente a la acción)
    */
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

//Workers
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
    const formattedCats = yield res.json();
    const formattedCatsShortened = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(formattedCatsShortened));
  } catch (err) {
    yield put(getCatsFailure(err));
  }
}

export default catsSaga;
