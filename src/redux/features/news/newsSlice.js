import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    fetchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    fetchError: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.errorMessage = "";
      state.data = action.payload;
    },
  },
});

export const { fetchLoading, fetchError, fetchSuccess } = newsSlice.actions;

export default newsSlice.reducer;

const apiKey = import.meta.env.VITE_API_KEY;

export function fetchNews() {
  return async (dispatch, getState) => {
    const { news } = getState();
    if (news.data.length > 0) {
      return;
    }
    dispatch(fetchLoading(true));
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=peace&api-key=${apiKey}`
      );
      const data = response.data.response.docs;
      dispatch(fetchSuccess(data));
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setTimeout(() => {
          dispatch(fetchNews());
        }, 1000);
      } else {
        dispatch(fetchError(error.message));
      }
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}
