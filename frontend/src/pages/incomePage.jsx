import React from 'react'
import PageLayout from '../components/layouts/PageLayout';
import IncomeContent from '../components/income/incomeContent';

const IncomePage = ({forms, handleChange}) => {
  return (
    <PageLayout>
      <IncomeContent forms={forms} handleChange={handleChange}/>
    </PageLayout>
  )
}

export default IncomePage;