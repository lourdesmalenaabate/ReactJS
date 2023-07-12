import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  isLoading: false,
  err: null,
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state, action) => {
      state.err = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure } =
  catsSlice.actions;
export default catsSlice.reducer;
