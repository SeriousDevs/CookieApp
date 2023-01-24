import { configureStore } from "@reduxjs/toolkit";
import { gameAccSlice } from "./gameAccSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    gameAcc: gameAccSlice.reducer,
  },
});
