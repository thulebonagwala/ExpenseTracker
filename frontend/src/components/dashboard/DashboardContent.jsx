import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import InfoCard from './infoCard';
import TransactionCard from './TransactionCard';
import CustomPieCart from '../Charts/CustomPieCart';
import api from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useRecentTransactions } from '../../hooks/useRecentTransactions';
import { useGetBalance } from '../../hooks/useGetbalance';
import { useUserAuth } from '../../hooks/useUserAuth';


const DashboardContent = () => {
    const { recentTransactions, loading, error } = useRecentTransactions();

    const name = useUserAuth();
    const { balance, err } = useGetBalance();
    //console.log( n);
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold">👋 Welcome back, {name.fullName}!</h2>

                {/* Balance Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Total Balance">
                        <p className="text-2xl font-bold text-gray-900">R{(balance.balance || 0).toLocaleString()}</p>
                    </InfoCard>

                    <InfoCard title="This Month’s Income">
                        <p className="text-2xl font-bold text-gray-900">R{(balance.totalIncomeMonthly || 0).toLocaleString()}</p>
                    </InfoCard>
                </div>

                {/* Recent Transactions */}

                <InfoCard title="Recent Transactions">
                    {loading && <p>Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {!loading && <TransactionCard recentTransactions={recentTransactions} />}

                    {/* <TransactionCard recentTransactions={recentTransactions} /> */}
                </InfoCard>

            </div>

            {/* Right side */}
            <div className="flex flex-col gap-6">
                {/* Pie Chart */}

                <InfoCard title="Finance Overview">
                    <CustomPieCart balance={balance} />
                </InfoCard>
                {/* Transactions */}
            </div>
        </main>
    )
}

export default DashboardContent