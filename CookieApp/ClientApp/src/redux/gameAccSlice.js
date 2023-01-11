import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGameAcc, setSaveAcc } from "services/api";
// import { toast } from "react-toastify";

export const setGameAcc = createAsyncThunk(
  "user/setGameAcc",
  async (_, { rejectWithValue }) => {
    try {
      const gameAcc = await getGameAcc();
      return gameAcc;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const saveAcc = createAsyncThunk(
  "user/saveAcc",
  async (acc, { rejectWithValue }) => {
    try {
      const gameAcc = await setSaveAcc(acc);
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
      state.clicks = 1 + state.clicks;
    },
    buyUpgrade(state, { payload }) {
      const el = state.upgrades.find((el) => el.id === payload.id);
      el.amount = payload.amount;
      el.price = payload.price;
      console.log(el);
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
    });
    builder.addCase(setGameAcc.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
    //SaveGameAcc
    builder.addCase(saveAcc.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(saveAcc.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    });
    builder.addCase(saveAcc.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
  },
});

export const { addCookie, addClicks, buyUpgrade } = gameAccSlice.actions;

//Selector
export const getClickPerCookie = (state) => state.gameAcc.upgrades[0];
export const getTotalClicks = (state) => state.gameAcc.clicks;
export const getUpgrades = (state) => state.gameAcc.upgrades;
export const getCookies = (state) => state.gameAcc.cookies;
export const getAcc = (state) => state.gameAcc;
