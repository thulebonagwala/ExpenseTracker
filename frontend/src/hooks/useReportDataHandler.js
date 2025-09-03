import React, { useEffect, useState } from 'react'
import api from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';


export function useReportDataHandler() {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchYearlyReport(new Date().getFullYear());
    }, []);

    const fetchYearlyReport = async (year) => {
        try {
            console.log(year);
            const res = await api.get(`${API_PATHS.REPORT.YEARLY}?year=${year}`);
            setData(res.data);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };
    return { data, error, fetchYearlyReport };
}