import { call, put, takeEvery } from "redux-saga/effects";
import { fetchStoriesFulfilled, fetchStoriesRejected } from "./newsSlice";

function* newsSaga() {
  yield takeEvery("news/getNews", workGetNews);
}

function* workGetNews({ payload }) {
  try {
    const res = yield call(() => fetch(payload));
    if (!res.ok) {
      const err = new Error("Error en la petición Fetch");
      err.status = res.status || "00";
      err.statusText = res.statusText || "Ocurrió un error";
      throw err;
    }
    const news = yield res.json();
    yield put(fetchStoriesFulfilled(news));
  } catch (err) {
    yield put(fetchStoriesRejected(err));
  }
}

export default newsSaga;
