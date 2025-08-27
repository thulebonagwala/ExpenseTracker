import React, { useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logout from '../Logout';

const NavbarLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <div className="flex items-center gap-2">
                <div className="bg-indigo-600 text-white px-2 py-1 rounded-md font-bold">
                    <FaWallet size={28} className="text-white" />
                </div>
                <h1 className="font-semibold text-lg">Spendly</h1>
            </div>
            <nav className="hidden md:flex gap-6 text-gray-600">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? "text-indigo-600 font-semibold "
                            : "hover:text-black"
                    }
                >Dashboard</NavLink>

                <NavLink
                    to="/expenses"
                    className={({ isActive }) =>
                        isActive
                            ? "text-indigo-600 font-semibold"
                            : "hover:text-black"
                    }
                >
                    Expenses
                </NavLink>
                <NavLink
                    to="/income"
                    className={({ isActive }) =>
                        isActive
                            ? "text-indigo-600 font-semibold"
                            : "hover:text-black"
                    }
                >
                    Income
                </NavLink>
                <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                        isActive
                            ? "text-indigo-600 font-semibold"
                            : "hover:text-black"
                    }
                >
                    Reports
                </NavLink>
            </nav>
            {/* Right side */}
            <div className="flex gap-5 items-center">
                <div className="hidden md:flex">
                    <Logout className="bg-white-500  text-gray-600 px-4 py-2 rounded hover:text-black cursor-pointer" />
                </div>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="Profile"
                    className="rounded-full w-10 h-10"
                />
                {/* Hamburger button (mobile only) */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-white shadow-md absolute flex flex-col items-center p-2 right-5 top-23 w-1/2 h-100 z-10 gap-10 rounded-2xl">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-600 text-2xl font-semibold border-b"
                                : "hover:text-black text-2xl"
                            }
                    >Dashboard</NavLink>

                    <NavLink
                        to="/expenses"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-600 font-semibold text-2xl border-b"
                                : "hover:text-black text-2xl"
                        }
                    >
                        Expenses
                    </NavLink>
                    <NavLink
                        to="/income"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-600 font-semibold text-2xl border-b"
                                : "hover:text-black text-2xl"
                        }
                    >
                        Income
                    </NavLink>
                    <NavLink
                        to="/reports"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-600 font-semibold text-2xl border-b"
                                : "hover:text-grey text-2xl"
                        }
                    >
                        Reports
                    </NavLink>
                    <Logout className="text-2xl hover:bg-yellow cursor-pointer" />
                </nav>
            )}
        </header>
    )
}

export default NavbarLayout