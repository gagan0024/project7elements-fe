import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/project/projectSlice";
import authReducer from "../redux/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    auth: authReducer,
  },
});
