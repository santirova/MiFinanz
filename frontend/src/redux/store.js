import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import userInfo from "./features/useInfoSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    userInfo,
  },
});
