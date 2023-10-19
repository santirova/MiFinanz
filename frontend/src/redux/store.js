import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import activeSectionReducer from "./features/activeSectionSlice";



export const store = configureStore({
    reducer: {
        theme: themeReducer,
        activeSection: activeSectionReducer,

    },
});