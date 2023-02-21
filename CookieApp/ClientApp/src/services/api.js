import axios from "axios";

// const url = "https://realcookies.azurewebsites.net/api";
const url = "https://localhost:7184/api";

const $publicHost = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

const $privateHost = axios.create({
  baseURL: url,
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
    const { data } = await $publicHost.post("v1/users/register", formData);
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const loginRequest = async (formData) => {
  try {
    const { data } = await $publicHost.post("v1/users/authenticate", formData);
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const getAuth = async () => {
  try {
    const { data } = await $privateHost.post("v1/users/getuser", {});
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const getGameAcc = async () => {
  try {
    const { data } = await $privateHost.post("v1/cookies/getgameaccount", {});
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await $privateHost.post("v1/users/getusers", {});
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const saveAccRequest = async (acc) => {
  try {
    const { data } = await $privateHost.post("v1/cookies/savegameaccount", acc);
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};

export const getStory = async () => {
  try {
    const { data } = await $privateHost.post("v1/cookies/getstories", {});
    return data;
  } catch (error) {
    return { errorMessage: error.response.data, error: error.message };
  }
};
