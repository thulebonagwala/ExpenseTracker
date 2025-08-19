import React from 'react';
import { FaWallet } from 'react-icons/fa';

const AuthLayout = () => {
    return (
        // <div className="min-h-screen flex">
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center text-white p-10">
            <div className="max-w-md">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
                        <FaWallet size={28} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-bold">Spendly</h1>
                </div>
                <p className="text-lg opacity-90">
                    Track your expenses, save smarter, and grow your wealth with ease.
                </p>
            </div>
        </div>
        //</div>
    )
}

export default AuthLayout