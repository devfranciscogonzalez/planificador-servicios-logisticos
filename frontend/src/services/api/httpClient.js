import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

const httpClient = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
