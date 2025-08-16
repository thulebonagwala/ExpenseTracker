import axios from "axios";
import { BASE_URL } from "./apiPaths";

const api = axios.create({
    baseURL: BASE_URL,
    //timeout: 10000,
    //withCredentials: true,
})

//Request Interceptor - runs befor every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

//RESPONSE INTERCEPTOR - Optional, for handling errors globally
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401){
            console.warn("Unauthorized, redirecting to login...");
            // Example: clear token & redirect
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);



export default api
