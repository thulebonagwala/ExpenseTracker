


//Dashboard

// import React from 'react'
// import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import { ShoppingCart, Home, DollarSign, Lightbulb } from "lucide-react";

// const pieData = [
//   { name: "Groceries", value: 50 },
//   { name: "Rent", value: 600 },
//   { name: "Salary", value: 3400 },
//   { name: "Electricity", value: 100 },
// ];

// const COLORS = ["#4f46e5", "#6366f1", "#818cf8", "#a5b4fc"];

// const Test = () => {
//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col">
//             {/* Navbar */}
//             <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
//                 <div className="flex items-center gap-2">
//                     <div className="bg-blue-600 text-white px-2 py-1 rounded-md font-bold">
//                         S
//                     </div>
//                     <h1 className="font-semibold text-lg">Spendly</h1>
//                 </div>
//                 <nav className="flex gap-6 text-gray-600">
//                     <a href="#" className="hover:text-black">Dashboard</a>
//                     <a href="#" className="hover:text-black">Expenses</a>
//                     <a href="#" className="hover:text-black">Income</a>
//                     <a href="#" className="hover:text-black">Reports</a>
//                 </nav>
//                 <img
//                     src="https://i.pravatar.cc/40"
//                     alt="Profile"
//                     className="rounded-full w-10 h-10"
//                 />
//             </header>

//             {/* Main content */}
//             <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
//                 {/* Left side */}
//                 <div className="flex flex-col gap-6">
//                     <h2 className="text-2xl font-bold">👋 Welcome back, Grace!</h2>

//                     {/* Balance Cards */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Total Balance</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-3xl font-bold text-gray-900">$5,750.00</p>
//                             </CardContent>
//                         </Card>

//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>This Month’s Income</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-3xl font-bold text-gray-900">$3,400.00</p>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     {/* Recent Transactions */}
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Recent Transactions</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <ul className="space-y-3">
//                                 <li className="flex justify-between items-center">
//                                     <div className="flex items-center gap-2">
//                                         <ShoppingCart className="w-5 h-5 text-gray-500" />
//                                         <span>Groceries</span>
//                                     </div>
//                                     <span>$50</span>
//                                 </li>
//                                 <li className="flex justify-between items-center">
//                                     <div className="flex items-center gap-2">
//                                         <Home className="w-5 h-5 text-gray-500" />
//                                         <span>Rent</span>
//                                     </div>
//                                     <span>$600</span>
//                                 </li>
//                                 <li className="flex justify-between items-center">
//                                     <div className="flex items-center gap-2">
//                                         <DollarSign className="w-5 h-5 text-gray-500" />
//                                         <span>Salary</span>
//                                     </div>
//                                     <span>$3,400</span>
//                                 </li>
//                                 <li className="flex justify-between items-center">
//                                     <div className="flex items-center gap-2">
//                                         <Lightbulb className="w-5 h-5 text-gray-500" />
//                                         <span>Electricity Bill</span>
//                                     </div>
//                                     <span>$100</span>
//                                 </li>
//                             </ul>
//                         </CardContent>
//                     </Card>
//                 </div>

//                 {/* Right side */}
//                 <div className="flex flex-col gap-6">
//                     {/* Pie Chart */}
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Expense vs Income</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <ResponsiveContainer width="100%" height={200}>
//                                 <PieChart>
//                                     <Pie
//                                         data={pieData}
//                                         cx="50%"
//                                         cy="50%"
//                                         outerRadius={80}
//                                         dataKey="value"
//                                     >
//                                         {pieData.map((entry, index) => (
//                                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                         ))}
//                                     </Pie>
//                                 </PieChart>
//                             </ResponsiveContainer>
//                         </CardContent>
//                     </Card>

//                     {/* Transactions */}
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Recent Transactions</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <ul className="space-y-3">
//                                 <li className="flex justify-between items-center">
//                                     <div className="flex items-center gap-2">
//                                         <ShoppingCart className="w-5 h-5 text-gray-500" />
//                                         <span>Groceries</span>
//                                     </div>
//                                     <span>$50 AM</span>
//                                 </li>
//                                 <li className="flex justify-between items-center">
//                                     <div className="flex items-center gap-2">
//                                         <Home className="w-5 h-5 text-gray-500" />
//                                         <span>Rent</span>
//                                     </div>
//                                     <span>$50 10</span>
//                                 </li>
//                                 <li className="flex justify-between items-center">
//                                     <div className="flex items-center gap-2">
//                                         <DollarSign className="w-5 h-5 text-gray-500" />
//                                         <span>Salary</span>
//                                     </div>
//                                     <span>Jul 28</span>
//                                 </li>
//                             </ul>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </main>

//             {/* Footer */}
//             <footer className="flex justify-end gap-6 px-8 py-4 text-gray-500 text-sm">
//                 <a href="#">Privacy Policy</a>
//                 <a href="#">Terms</a>
//                 <a href="#">Contact</a>
//             </footer>
//         </div>
//     )
// }

// export default Test






//Login Page

// import React from 'react';
// import { FaWallet } from "react-icons/fa";

// const Test = () => {
//     return (
//         <div className="min-h-screen flex">
//             {/* Left side - Branding */}
//             <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center text-white p-10">
//                 <div className="max-w-md">
//                     <div className="flex items-center gap-3 mb-6">
//                         <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
//                             <FaWallet size={28} className="text-white" />
//                         </div>
//                         <h1 className="text-3xl font-bold">Spendly</h1>
//                     </div>
//                     <p className="text-lg opacity-90">
//                         Track your expenses, save smarter, and grow your wealth with ease.
//                     </p>
//                 </div>
//             </div>

//             {/* Right side - Login form */}
//             <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50">
//                 <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
//                     <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//                         Login
//                     </h2>
//                     <form className="space-y-4">
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         />
//                         <button
//                             type="submit"
//                             className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
//                         >
//                             Login
//                         </button>
//                     </form>
//                     <p className="text-center text-sm text-gray-600 mt-6">
//                         Don’t have an account?{" "}
//                         <a href="#" className="text-indigo-600 font-semibold hover:underline">
//                             Sign up
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Test