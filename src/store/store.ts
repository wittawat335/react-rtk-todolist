import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  devTools: true,
  reducer: todoReducer,
});

type RootState = ReturnType<typeof store.getState>;
type AppDispath = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispath>();

export default store;
