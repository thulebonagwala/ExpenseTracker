import axios from "axios";
import { useState, useEffect } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses
  useEffect(() => {
    axios.get("http://localhost:5000/api/expenses")
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));
  }, []);

  // Delete expense
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      setExpenses(expenses.filter(exp => exp._id !== id)); // update UI
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Expenses</h2>
      <ul>
        {expenses.map(exp => (
          <li key={exp._id} className="flex justify-between items-center border-b py-2">
            <span>{exp.description} - ${exp.amount}</span>
            <button 
              onClick={() => handleDelete(exp._id)} 
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
