import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGameAcc } from "services/api";
// import { toast } from "react-toastify";

export const setGameAcc = createAsyncThunk(
  "user/setGameAcc",
  async (_, { rejectWithValue }) => {
    try {
      const gameAcc = await getGameAcc();
      // userData?.token && localStorage.setItem("token", userData.token);
      return gameAcc;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialUpgrades = [
  {
    name: "Click",
    amount: 0,
    baseTick: 1,
    id: null,
    gameAccountId: null,
    level: 1,
    price: 100,
  },
];

export const gameAccSlice = createSlice({
  name: "cookie",
  initialState: {
    clicks: 0,
    cookies: 0,
    id: null,
    upgrades: initialUpgrades,
    isLoading: false,
    error: null,
  },
  reducers: {
    addCookie(state, { payload }) {
      state.cookies = payload + state.cookies;
    },
  },
  extraReducers: (builder) => {
    //SetGameAcc
    builder.addCase(setGameAcc.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(setGameAcc.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.clicks = payload.clicks;
      state.cookies = payload.cookies;
      state.id = payload.id;
      state.upgrades = payload.upgrades;
      console.log(payload);
    });
    builder.addCase(setGameAcc.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
  },
});

export const { addCookie } = gameAccSlice.actions;

//Selector
export const getClick = (state) => state.gameAcc.upgrades[0];
