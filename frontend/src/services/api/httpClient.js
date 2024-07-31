import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

const httpClient = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

// Interceptor para incluir el token en las solicitudes si está presente
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

// const UNAUTHORIZED = 401;

// httpClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === UNAUTHORIZED) {
//       // Manejar error de autenticación, como redirigir al login
//       console.log("error 401 francisco");
//     }
//     return Promise.reject(error);
//   }
// );

export default httpClient;
