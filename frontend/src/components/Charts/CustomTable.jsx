import React from 'react'
import { formatDate } from '../../utils/formartDate';

const CustomTable = ({ transaction, handleDelete }) => {
    
    const hasData = transaction && transaction.length > 0;
    if (!hasData) {
        return (
            <div className="flex flex-col items-center justify-center h-64  bg-gray-50">
                <p className="text-gray-500 text-lg">No data to display</p>
                <p className="text-gray-400 text-sm">Add some records to see the list</p>
            </div>
        );
    }


    return (
        <table className="w-full mt-6 border-collapse">
            <thead className="bg-gray-100 sticky top-0">
                <tr className="text-left border-b">
                    <th className="p-2">Date</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Description</th>
                    <th className="p-2"></th>
                </tr>
            </thead>
            <tbody>
                {transaction.map((trans, index) => (
                    <tr key={index} className="group border-b hover:bg-yellow-100">
                        <td className="p-2">{formatDate(trans.date)}</td>
                        <td className="p-2">{trans.category}</td>
                        <td className="p-2">${trans.amount}</td>
                        <td className="p-2">{trans.description}</td>
                        <td
                            onClick={() => handleDelete(trans._id)}
                            className="p-2 cursor-pointer hidden group-hover:block ">X</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CustomTable;