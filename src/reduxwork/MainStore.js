import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const rootReducer = combineReducers({
  user: userReducer,
});
export const MainStore = configureStore({
  reducer: userReducer,
});
