import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
//import calendarReducer from "./calendarSlice";
//import remindersReducer from "./remindersSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer
       /*  calendar: calendarReducer,
        reminders: remindersReducer, */
    },
});