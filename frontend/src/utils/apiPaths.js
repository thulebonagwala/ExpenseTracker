export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
    AUTH: {
        LOGIN: "/api/v1/auth/login",
        REGISTER: "/api/v1/auth/register",
        LOGOUT: "/api/v1/auth/logout",
    },

    EXPENSE: {
        ADD: "/api/v1/expense/add",
        EXPENSES: "/api/v1/expense/"
    },

    INCOME: {
        ADD: "/api/v1/income/add",
        INCOMES: "/api/v1/income/"
    },

    TRANSACTIONS: {
        RECENT: "/api/v1/transactions/recent",
        BALANCE: "/api/v1/transactions/balance"
    },

    REPORT: {
        YEARLY: "/api/v1/report/yearly",
    }
}