import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { ShoppingCart, Home, DollarSign, Lightbulb } from "lucide-react";
import NavbarLayout from '../components/layouts/NavbarLayout';
import FooterLayout from '../components/layouts/FooterLayout';
import Balancecard from '../components/dashboard/Balancecard';
import InfoCard from '../components/dashboard/infoCard';
import CustomPieCart from '../components/Charts/CustomPieCart';




const DashboardPage = () => {
  return (
    <div>

      <div className=" ">
        <div className="min-h-screen hidden md:flex w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600">

          <div className="absolute inset-10 z-10">
            <Card className="">

              <div className=" bg-gray-50 flex flex-col ">
                {/* Navbar */}
                <NavbarLayout/>

                {/* Main content */}
                <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                  {/* Left side */}
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">👋 Welcome back, Grace!</h2>

                    {/* Balance Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <Balancecard title="Total Balance" value="R5,750.00"/>
                      <Balancecard title="This Month’s Income" value="R3,400.00"/>
                    </div>

                    {/* Recent Transactions */}
                    {/* <Card>
                      <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                      </CardHeader>
                      <CardContent>
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
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Lightbulb className="w-5 h-5 text-gray-500" />
                              <span>Electricity Bill</span>
                            </div>
                            <span>$100</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card> */}
                  </div>

                  {/* Right side */}
                  <div className="flex flex-col gap-6">
                    {/* Pie Chart */}
                    
                    <InfoCard title="Expense vs Income">
                      <CustomPieCart/>
                    </InfoCard>
                    {/* Transactions */}
                    {/* <Card>
                      <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <ShoppingCart className="w-5 h-5 text-gray-500" />
                              <span>Groceries</span>
                            </div>
                            <span>$50 AM</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Home className="w-5 h-5 text-gray-500" />
                              <span>Rent</span>
                            </div>
                            <span>$50 10</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-5 h-5 text-gray-500" />
                              <span>Salary</span>
                            </div>
                            <span>Jul 28</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card> */}
                  </div>
                </main>

                {/* Footer */}
                <FooterLayout/>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardPage