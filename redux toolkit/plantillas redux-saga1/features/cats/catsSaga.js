/*
    call - Permite llamadas AJAX
    put - Permite llamar a las actions
    takeEvery - Watcher de acciones que ejecuta la correspondiente función (Worker)
*/
import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsFailure, getCatsSuccess } from "./catsSlice";
