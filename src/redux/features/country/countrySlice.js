import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const countrySlice = createSlice({
  name: "country",
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

export const { fetchLoading, fetchError, fetchSuccess } = countrySlice.actions;

export default countrySlice.reducer;

export function fetchCountries() {
  return async (dispatch) => {
    dispatch(fetchLoading(true));
    try {
      let response = await axios.get("https://restcountries.com/v3.1/all");
      let data = response.data.sort((a, b) => b.population - a.population);
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchError(error.message));
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}

export function fetchCountriesByCode(code1, code2) {
  return async (dispatch) => {
    dispatch(fetchLoading(true));
    try {
      const [response1, response2] = await Promise.all([
        axios.get(`https://restcountries.com/v3.1/alpha/${code1}`),
        axios.get(`https://restcountries.com/v3.1/alpha/${code2}`),
      ]);
      dispatch(fetchSuccess([response1.data[0], response2.data[0]]));
    } catch (error) {
      dispatch(fetchError(error.message));
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}
