import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import DashboardContent from '../components/dashboard/DashboardContent';


const DashboardPage = () => {
  return (
    <div>
      <PageLayout>
        <DashboardContent/>
      </PageLayout>
    </div>
  )
}

export default DashboardPage