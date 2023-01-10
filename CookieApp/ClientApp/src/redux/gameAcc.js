import {
  // createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

export const gameAccSlice = createSlice({
  name: "cookie",
  initialState: {
    cookies: 0,
    totalClicks: 0,
    upgrades: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {},
});
