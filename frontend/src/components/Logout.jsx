import React from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';


const Logout = () => {

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
        navigate("/login");
    }
    return (
        <button
            onClick={handleLogout}
            className="bg-white-500  text-gray-600 px-4 py-2 rounded hover:text-black cursor-pointer"
        >
            Logout
        </button>
    );
}

export default Logout