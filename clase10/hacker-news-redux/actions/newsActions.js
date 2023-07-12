//Armado de las acciones

import {
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORY,
  SET_LOADING,
  SET_STORIES,
} from "../types";

export const loadingAction = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setStoriesAction = (data) => ({
  type: SET_STORIES,
  payload: data,
});

export const removeStoryAction = (id) => ({
  type: REMOVE_STORY,
  payload: id,
});

export const handlePageAction = (value) => ({
  type: HANDLE_PAGE,
  payload: value,
});

export const handleSearchAction = (query) => ({
  type: HANDLE_SEARCH,
  payload: query,
});
