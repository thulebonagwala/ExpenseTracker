import React, { useEffect, useState } from 'react'
import api from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';


export function useUserAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await api.get(API_PATHS.AUTH.USER);
                setUser(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, []);

    if (!user) return ("");

    return(user);
}