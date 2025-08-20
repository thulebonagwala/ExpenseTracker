import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ShoppingCart, Home, DollarSign, Lightbulb } from "lucide-react";


const TransactionCard = () => {
    return (
        <ul className="space-y-3">
            <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-gray-500" />
                    <span>Groceries</span>
                </div>
                <span>$50</span>
            </li>
            <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-gray-500" />
                    <span>Rent</span>
                </div>
                <span>$600</span>
            </li>
            <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gray-500" />
                    <span>Salary</span>
                </div>
                <span>$3,400</span>
            </li>
        </ul>
    )
}

export default TransactionCard