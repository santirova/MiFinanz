import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import activeSectionReducer from "./features/activeSectionSlice";
import userInfo from "./features/useInfoSlice";
import creditCardSlice from "./features/creditCardSlice";
import bill from "./features/bill.Slice";
import dashboard from "./features/dashboardSlice";
import earning from "./features/earningSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    activeSection: activeSectionReducer,
    cards: creditCardSlice,
    userInfo,
    bill,
    dashboard,
    earning,
  },
});
