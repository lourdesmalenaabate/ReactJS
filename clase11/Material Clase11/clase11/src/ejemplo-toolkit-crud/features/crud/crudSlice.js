import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { helpHttp } from "../../helpers/helpHttp";

let api = helpHttp();
let url = "https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter";

const initialState = {
  db: [],
  isLoading: true,
  err: null,
};

export const getAll = createAsyncThunk("crud/getAll", async () => {
  const res = await api.get(url);
  return res;
});

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    create: (state, { payload }) => {
      state.db = [...state.db, payload];
    },
    update: (state, { payload }) => {
      let newData = state.db.map((el) => (el.id === payload.id ? payload : el));
      state.db = newData;
    },
    deleteData: (state, { payload }) => {
      let isDelete = window.confirm(`¿Estás seguro de eliminar el registro?`);
      if (isDelete) {
        let newData = state.db.filter((el) => el.id !== payload);
        state.db = newData;
      }
    },
  },
  extraReducers: {
    [getAll.pending]: (state) => {
      state.isLoading = true;
    },
    [getAll.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.db = action.payload;
    },
    [getAll.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

export const { create, update, deleteData } = crudSlice.actions;

export default crudSlice.reducer;
