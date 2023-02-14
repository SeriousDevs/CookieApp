import axios from "axios";

const $publicHost = axios.create({
    baseURL: "https://localhost:7184/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const $privateHost = axios.create({
    baseURL: "https://localhost:7184/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const authInterceptor = (config) => {
  config.headers["Authorization"] = localStorage.getItem("token");
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const signUpRequest = async (formData) => {
  try {
    const { data } = await $publicHost.post("/users/register", formData);
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const loginRequest = async (formData) => {
  try {
    const { data } = await $publicHost.post("/users/authenticate", formData);
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const getAuth = async () => {
  try {
    const { data } = await $privateHost.get("/users/return");
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const getGameAcc = async () => {
  try {
    const { data } = await $privateHost.get("/cookies/user");
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await $privateHost.get("/users");
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const saveAccRequest = async (acc) => {
  try {
    const { data } = await $privateHost.post("/cookies/user", acc);
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const getStory = async () => {
  try {
    const { data } = await $privateHost.get("/cookies/story");
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};
