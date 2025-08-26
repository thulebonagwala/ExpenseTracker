import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import InfoCard from './infoCard';
import TransactionCard from './TransactionCard';
import CustomPieCart from '../Charts/CustomPieCart';

const DashboardContent = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold">👋 Welcome back, Grace!</h2>

                {/* Balance Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <InfoCard title="Total Balance">
                        <p className="text-3xl font-bold text-gray-900">R5,750.00</p>
                    </InfoCard>

                    <InfoCard title="This Month’s Income">
                        <p className="text-3xl font-bold text-gray-900">R3,400.00</p>
                    </InfoCard>
                </div>

                {/* Recent Transactions */}

                <InfoCard title="Recent Transactions">
                    <TransactionCard />
                </InfoCard>

            </div>

            {/* Right side */}
            <div className="flex flex-col gap-6">
                {/* Pie Chart */}

                <InfoCard title="Finance Overview">
                    <CustomPieCart />
                </InfoCard>
                {/* Transactions */}
            </div>
        </main>
    )
}

export default DashboardContent