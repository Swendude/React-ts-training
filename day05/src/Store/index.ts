import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    balance: balanceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
