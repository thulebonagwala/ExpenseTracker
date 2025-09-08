import React, { useState, useEffect } from 'react';
import { FaWallet } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logout from '../Logout';
import { getInitials } from '../../utils/helper';
import { useUserAuth } from '../../hooks/useUserAuth';
import Cropper from "react-easy-crop";
import ProfilePictureModal from '../ui/profilepictureModal';
import { handleUpload } from '../../utils/handleUpload';
import { BASE_URL } from '../../utils/apiPaths';
import { useUsersAuth } from '../../context/userContext';

const NavbarLayout = () => {
    //const user = useUserAuth();
    
    const { users, setUser, refreshUser, logout, setToken } = useUsersAuth();
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    setToken(localStorage.getItem("token"));

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profilePic, setProfilePic] = useState(user?.profileImageUrl ? BASE_URL + user.profileImageUrl : null);

    useEffect(() => {
        if (user?.profileImageUrl) {
            setProfilePic(BASE_URL + user.profileImageUrl);
        }
    }, [user]);

    

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
                    className={({ isActive }) => isActive ? "text-indigo-600 font-semibold " : "hover:text-black"}
                >Dashboard</NavLink>

                <NavLink
                    to="/expenses"
                    className={({ isActive }) => isActive ? "text-indigo-600 font-semibold " : "hover:text-black"}
                >Expenses</NavLink>

                <NavLink
                    to="/income"
                    className={({ isActive }) => isActive ? "text-indigo-600 font-semibold " : "hover:text-black"}
                >Income</NavLink>

                <NavLink
                    to="/reports"
                    className={({ isActive }) => isActive ? "text-indigo-600 font-semibold " : "hover:text-black"}
                >Reports</NavLink>

            </nav>
            {/* Right side */}
            <div className="flex gap-5 items-center">
                <div className="hidden md:flex">
                    <Logout className="bg-white-500  text-gray-600 px-4 py-2 rounded hover:text-black cursor-pointer" />
                </div>
                <div
                    className="relative w-10 h-10 cursor-pointer group"
                    onClick={() => setIsModalOpen(true)}
                >
                    {profilePic ? (
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="rounded-full w-10 h-10 object-cover"
                        />) :

                        (<div className="rounded-full w-10 h-10 bg-indigo-600 flex items-center justify-center text-white font-bold">
                            {getInitials(user?.fullName)}
                        </div>)
                    }

                </div>
                {/* Hamburger button (mobile only) */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                <ProfilePictureModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onUpload={async (file) => {

                        setProfilePic(URL.createObjectURL(file));
                        await handleUpload(file);
                        // upload file to backend here
                        console.log("Cropped file ready:", file);
                        await refreshUser();
                    }}
                />

            </div>

            {isOpen && (
                <nav className="md:hidden bg-white shadow-md absolute flex flex-col items-center p-2 right-5 top-23 w-1/2 h-100 z-10 gap-10 rounded-2xl">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? "text-indigo-600 text-2xl font-semibold border-b" : "hover:text-black text-2xl"}
                    >Dashboard</NavLink>

                    <NavLink
                        to="/expenses"
                        className={({ isActive }) => isActive ? "text-indigo-600 text-2xl font-semibold border-b" : "hover:text-black text-2xl"}
                    >Expenses</NavLink>

                    <NavLink
                        to="/income"
                        className={({ isActive }) => isActive ? "text-indigo-600 text-2xl font-semibold border-b" : "hover:text-black text-2xl"}
                    >Income</NavLink>

                    <NavLink
                        to="/reports"
                        className={({ isActive }) => isActive ? "text-indigo-600 text-2xl font-semibold border-b" : "hover:text-black text-2xl"}
                    > Reports</NavLink>

                    <Logout className="text-2xl hover:bg-yellow cursor-pointer" />
                </nav>
            )}
        </header>
    )
}

export default NavbarLayout