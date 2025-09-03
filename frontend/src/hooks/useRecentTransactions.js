import React, { useEffect, useState } from 'react'
import api from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

export function useRecentTransactions() {
    const [recentTransactions, setRecentTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecentTrasactions();
    }, []);

    const fetchRecentTrasactions = async () => {
        try {
            setLoading(true);
            const res = await api.get(API_PATHS.TRANSACTIONS.RECENT);
            setRecentTransactions(Array.isArray(res.data) ? res.data : []);
        } catch (error) {
            setError(error.message);
            setRecentTransactions([]);
        } finally {
            setLoading(false);
        }
    };
    return { recentTransactions, loading, error, refetch: fetchRecentTrasactions };
}