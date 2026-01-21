import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <section className='bg-[#F0F2F5] w-full h-[40.5rem]'>
      <div className='mac:max-w-[88rem] mx-auto py-7'>
        <Sidebar />
      </div>
    </section>
  );
};

export default Dashboard;
