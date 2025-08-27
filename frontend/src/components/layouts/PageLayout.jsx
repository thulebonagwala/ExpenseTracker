import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ShoppingCart, Home, DollarSign, Lightbulb } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaWallet } from 'react-icons/fa';
import Logout from "../Logout";
import NavbarLayout from './NavbarLayout';

const PageLayout = ({ children }) => {
  return (
    <div className="md:min-h-screen md:flex md:w-1/2 md:bg-gradient-to-br md:from-indigo-500 md:to-purple-600">

      <div className="md:absolute md:inset-9 md:z-9">
        <Card className="">

          <div className=" bg-gray-50 flex flex-col md:h-[calc(100vh-150px)]">
            {/* Navbar */}
            <NavbarLayout />

            {/* Main content */}
            {children}

          </div>
          {/* Footer */}
          <footer className="flex justify-end gap-6 px-8 py-4 text-gray-500 text-sm bg-white">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </footer>
        </Card>
      </div>
    </div>
  )
}

export default PageLayout;