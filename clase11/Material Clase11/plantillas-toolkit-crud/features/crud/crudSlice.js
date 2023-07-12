import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { helpHttp } from "../../helpers/helpHttp";

let api = helpHttp();
let url = "https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter";

const initialState = {
  db: [],
  isLoading: true,
  err: null,
};
