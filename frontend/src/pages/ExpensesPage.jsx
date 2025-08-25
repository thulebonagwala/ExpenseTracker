import React from 'react'
import PageLayout from '../components/layouts/PageLayout';
import ExpenseContent from '../components/expenses/ExpenseContent';

const ExpensesPage = ({forms, handleChange}) => {
  return (
    <PageLayout>
      <ExpenseContent forms={forms} handleChange={handleChange}/>
    </PageLayout>
  )
}

export default ExpensesPage;