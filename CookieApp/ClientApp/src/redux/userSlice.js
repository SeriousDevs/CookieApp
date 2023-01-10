import {
  // createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {},
});

//Selectors
export const getIsLoading = (state) => state.user.isLoading;
export const getError = (state) => state.user.error;
export const getUser = (state) => state.user.user;
