import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ShoppingCart, Home, DollarSign, Lightbulb } from "lucide-react";
import { FaWallet } from 'react-icons/fa';
import Logout from "../Logout";

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen hidden md:flex w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600">

      <div className="absolute inset-9 z-9">
        <Card className="">

          <div className=" bg-gray-50 flex flex-col h-[calc(100vh-150px)]">
            {/* Navbar */}
            <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
              <div className="flex items-center gap-2">
                <div className="bg-indigo-600 text-white px-2 py-1 rounded-md font-bold">
                  <FaWallet size={28} className="text-white" />
                </div>
                <h1 className="font-semibold text-lg">Spendly</h1>
              </div>
              <nav className="flex gap-6 text-gray-600">
                <a href="/dashboard" className="hover:text-black">Dashboard</a>
                <a href="/expenses" className="hover:text-black">Expenses</a>
                <a href="/income" className="hover:text-black">Income</a>
                <a href="/reports" className="hover:text-black">Reports</a>
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

            {/* Main content */}

            {children}


            {/* Footer */}

          </div>
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