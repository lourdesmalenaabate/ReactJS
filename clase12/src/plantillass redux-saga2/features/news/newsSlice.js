import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    fetchStoriesFulfilled: (state, { payload }) => {
      state.isLoading = false;
      state.hits = payload.hits;
      state.nbPages = payload.nbPages;
    },
    fetchStoriesRejected: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },
    getNews: (state, action) => {
      state.isLoading = true;
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
        if (nextPage > state.nbPages - 1) nextPage = 0;
        state.page = nextPage;
      }
      if (payload === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) prevPage = state.nbPages - 1;
        state.page = prevPage;
      }
    },
  },
});

export const {
  getNews,
  fetchStoriesFulfilled,
  fetchStoriesRejected,
  removeStory,
  handleSearch,
  handlePage,
} = newsSlice.actions;

export default newsSlice.reducer;
