// import axios from "axios";

// const $publicHost = axios.create({
//   baseURL: "https://connections-api.herokuapp.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const $privateHost = axios.create({
//   baseURL: "https://connections-api.herokuapp.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const authInterceptor = (config) => {
//   config.headers["Authorization"] = localStorage.getItem("token");
//   return config;
// };

// $privateHost.interceptors.request.use(authInterceptor);

// export const signUpRequest = async (formData) => {
//   const { data } = await $publicHost.post("/users/signup", formData);
//   return data;
// };

// export const loginRequest = async (formData) => {
//   const { data } = await $publicHost.post("/users/login", formData);
//   return data;
// };

// export const getAuthRequest = async (formData) => {
//   const { data } = await $privateHost.get("/users/current", formData);
//   return data;
// };

// export const logOutRequest = async () => {
//   const { data } = await $privateHost.post("/users/logout");
//   return data;
// };

// export const getContactsRequest = async () => {
//   const { data } = await $privateHost.get("/contacts");
//   return data;
// };

// export const addContactRequest = async (contact) => {
//   const { data } = await $privateHost.post("/contacts", contact);
//   return data;
// };

// export const deleteContactRequest = async (id) => {
//   const { data } = await $privateHost.delete(`/contacts/${id}`);
//   return data;
// };

// export const editContactRequest = async (contact, id) => {
//   const { data } = await $privateHost.patch(`/contacts/${id}`, contact);
//   return data;
// };
