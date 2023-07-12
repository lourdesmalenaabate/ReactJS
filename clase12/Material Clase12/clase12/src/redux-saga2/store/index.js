import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import newsReducer from "../features/news/newsSlice";
import newsSaga from "../features/news/newsSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: [saga],
});

saga.run(newsSaga);
