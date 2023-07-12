import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import catsReducer from "../features/cats/catsSlice";
import catsSaga from "../features/cats/catsSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [saga],
});

//.run => ejecuta el watcher
saga.run(catsSaga);

export default store;
