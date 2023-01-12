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
  const { data } = await $publicHost.post("/users/register", formData);
  return data;
};

export const loginRequest = async (formData) => {
  const { data } = await $publicHost.post("/users/authenticate", formData);
  return data;
};

export const getAuth = async () => {
  const { data } = await $privateHost.get("/users/return");
  return data;
};

export const getGameAcc = async () => {
  const { data } = await $privateHost.get("/cookies/user");
  return data;
};

export const getAllUsers = async () => {
  const { data } = await $privateHost.get("/users");
  return data;
};

export const saveAccRequest = async (acc) => {
  const { data } = await $privateHost.post("/cookies/user", acc);
  return data;
};
