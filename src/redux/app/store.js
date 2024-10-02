import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/country/countrySlice";
import newsReducer from "../features/news/newsSlice";

export default configureStore({
  reducer: {
    country: countryReducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
