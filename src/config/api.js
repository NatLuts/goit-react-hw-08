import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});
export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};
