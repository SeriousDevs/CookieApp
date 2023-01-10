import { configureStore } from "@reduxjs/toolkit";
import { gameAccSlice } from "./gameAcc";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    gameAcc: gameAccSlice.reducer,
  },
});
