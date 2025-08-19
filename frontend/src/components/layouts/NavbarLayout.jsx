import React from 'react';
import { FaWallet } from 'react-icons/fa';
import Logout from '../Logout';

const NavbarLayout = () => {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <div className="flex items-center gap-2">
                <div className="bg-indigo-600 text-white px-2 py-1 rounded-md font-bold">
                    <FaWallet size={28} className="text-white" />
                </div>
                <h1 className="font-semibold text-lg">Spendly</h1>
            </div>
            <nav className="flex gap-6 text-gray-600">
                <a href="#" className="hover:text-black">Dashboard</a>
                <a href="#" className="hover:text-black">Expenses</a>
                <a href="#" className="hover:text-black">Income</a>
                <a href="#" className="hover:text-black">Reports</a>
            </nav>
            <div className="flex gap-5">
                <Logout />
                <img
                    src="https://i.pravatar.cc/40"
                    alt="Profile"
                    className="rounded-full w-10 h-10"
                />
            </div>
        </header>
    )
}

export default NavbarLayout