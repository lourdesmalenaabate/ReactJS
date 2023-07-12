import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

export const fetchStories = createAsyncThunk(
  "news/fetchStories",
  async (API_ENDPOINT) => {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    setStories: (state, action) => {
      state.isLoading = false;
      state.hits = action.payload.hits;
      state.nbPages = action.payload.nbPages;
    },
    removeStory: (state, action) => {
      state.hits = state.hits.filter(
        (story) => story.objectID !== action.payload
      );
    },
    handleSearch: (state, { payload }) => {
      state.query = payload;
      state.page = 0;
    },
    handlePage: (state, { payload }) => {
      if (payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages) nextPage = 0;
        state.page = nextPage;
      }

      if (payload === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) prevPage = state.nbPages - 1;
        state.page = prevPage;
      }
    },
  },
  extraReducers: {
    [fetchStories.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchStories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.hits = payload.hits;
      state.nbPages = payload.nbPages;
    },
    [fetchStories.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loading, setStories, removeStory, handleSearch, handlePage } =
  newsSlice.actions;
export default newsSlice.reducer;
