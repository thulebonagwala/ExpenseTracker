import React from 'react'
import PageLayout from '../components/layouts/PageLayout';
import IncomeContent from '../components/income/incomeContent';

const IncomePage = ({forms, handleChange, resetForms}) => {
  return (
    <PageLayout>
      <IncomeContent forms={forms} handleChange={handleChange} resetForms={resetForms}/>
    </PageLayout>
  )
}

export default IncomePage;