import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};
