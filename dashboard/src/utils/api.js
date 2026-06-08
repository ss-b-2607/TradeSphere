import axios from "axios";

const API = axios.create({
  baseURL: "https://tradesphere-tcqm.onrender.com",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("tradesphereToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;