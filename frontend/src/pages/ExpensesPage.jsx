import React from 'react'
import PageLayout from '../components/layouts/PageLayout';
import ExpenseContent from '../components/expenses/ExpenseContent';

const ExpensesPage = ({forms, handleChange, resetForms}) => {
  return (
    <PageLayout>
      <ExpenseContent forms={forms} handleChange={handleChange} resetForms={resetForms}/>
    </PageLayout>
  )
}

export default ExpensesPage;