import React from 'react'

const CustomTable = ({transaction}) => {
    return (
        <table className="w-full mt-6 border-collapse">
            <thead className="bg-gray-100 sticky top-0">
                <tr className="text-left border-b">
                    <th className="p-2">Date</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Description</th>
                </tr>
            </thead>
            <tbody>
                {transaction.map((trans, index) => (
                    <tr key={index} className="border-b hover:bg-yellow-100">
                        <td className="p-2">{trans.date}</td>
                        <td className="p-2">{trans.category}</td>
                        <td className="p-2">${trans.amount}</td>
                        <td className="p-2">{trans.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CustomTable;