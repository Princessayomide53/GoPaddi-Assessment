import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <section className='bg-[#F0F2F5] w-full h-screen lg:h-[43.3rem] xl:h-screen overflow-y-hidden'>
      <div className='px-3 md:px-0 md:max-w-[45rem] lg:max-w-[62rem] xl:max-w-[76rem] mac:!max-w-[88rem] mx-auto py-7 flex gap-12 justify-between h-full '>
        <Sidebar />
        <MainContent />
      </div>
    </section>
  );
};

export default Dashboard;
