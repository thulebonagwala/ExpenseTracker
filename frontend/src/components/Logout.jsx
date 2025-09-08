import React from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';


const Logout = ({className}) => {

    const navigate = useNavigate();
    const handleLogout = async () => {
        // try {
        //     await api.post(API_PATHS.AUTH.LOGOUT); // backend clears session or blacklists token
        // } catch (err) {
        //     console.error("Error logging out:", err.message);
        // } finally {
        //     localStorage.removeItem("token");
        //     navigate("/login");
        // }

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }
    return (
        <button
            onClick={handleLogout}
            className={`${className || ""}`}
        >
            Logout
        </button>
    );
}

export default Logout