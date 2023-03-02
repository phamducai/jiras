import { configureStore } from "@reduxjs/toolkit";

import AuthSlices from "./auth/AuthSlices";
import ProjectSlice from "./project/ProjectSlice";

const store = configureStore({
  reducer: { AuthSlices, ProjectSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
