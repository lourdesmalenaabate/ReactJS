import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import newsReducer from "../features/news/newsSlice";
import newsSaga from "../features/news/newsSaga";
