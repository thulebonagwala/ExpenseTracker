import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ShoppingCart, Home, DollarSign, Lightbulb, ArrowLeftRight } from "lucide-react";


const TransactionCard = ({ recentTransactions }) => {

    if (!Array.isArray(recentTransactions)) {
        console.warn("recentTransactions is not an array:", recentTransactions);
        return <p>No transactions available</p>;
    }

    return (
        <ul className="space-y-3">

            {recentTransactions.map((item) => (
                <li key={item._id} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <ArrowLeftRight className="w-5 h-5 text-gray-500" />
                        <span>{item.category}</span>
                    </div>
                    <span>R{item.amount}</span>
                </li>
            ))}
        </ul>
    )
}

export default TransactionCard