import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, loginRequest, signUpRequest } from "services/api";

export const signUp = createAsyncThunk(
  "user/signUp",
  async (formData, { rejectWithValue }) => {
    try {
      const userData = await signUpRequest(formData);
      userData?.token && localStorage.setItem("token", userData.token);
      return userData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  "user/logIn",
  async (formData, { rejectWithValue }) => {
    try {
      const userData = await loginRequest(formData);
      userData?.token && localStorage.setItem("token", userData.token);
      return userData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const auth = createAsyncThunk(
  "user/auth",
  async (_, { rejectWithValue }) => {
    try {
      const userData = await getAuth();
      return userData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    id: null,
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logOut(state) {
      state.token = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //==================SignUp==================
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      if (!payload) return;

      state.user = payload.login;
      state.token = payload.token;
      state.id = payload.id;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
    //==================LogIn==================
    builder.addCase(logIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      if (!payload) return;

      state.user = payload.login;
      state.token = payload.token;
      state.id = payload.id;
    });
    builder.addCase(logIn.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
    //==================Auth==================
    builder.addCase(auth.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(auth.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      
      if (!payload) return;

      state.user = payload.login;
      state.id = payload.id;
      state.token = localStorage.getItem("token");
    });
    builder.addCase(auth.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
  },
});

export const { logOut, clearError } = userSlice.actions;

//Selectors
export const getIsLoading = (state) => state.user.isLoading;
export const getErrorUser = (state) => state.user.error;
export const getUser = (state) => state.user.user;
export const getToken = (state) => state.user.token;
