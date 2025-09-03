import React, { useEffect, useState } from 'react'
import api from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';


export function useGetBalance() {
    const [balance, setBalance] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        getBalance();
    }, []);

    const getBalance = async () => {
        try {
            const res = await api.get(API_PATHS.TRANSACTIONS.BALANCE);
            setBalance(res.data);
        } catch (error) {
            setError(error.message);
            setBalance({});
        } 
    };
    return { balance, error};
}