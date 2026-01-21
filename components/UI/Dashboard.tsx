import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <section className='bg-[#F0F2F5] w-full h-162'>
      <div className='mac:max-w-[88rem] mx-auto py-7 flex gap-12 justify-between'>
        <Sidebar />
        <MainContent />
      </div>
    </section>
  );
};

export default Dashboard;
