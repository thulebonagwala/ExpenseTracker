export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
    AUTH:{
        LOGIN: "/api/v1/auth/login",
        REGISTER: "/api/v1/auth/register",
        LOGOUT:"/api/v1/auth/logout",
    },

    EXPENSE:{
        ADD: "/api/v1/expense/add",
        EXPENSES: "/api/v1/expense/"
    }
}