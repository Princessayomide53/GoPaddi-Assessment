import React from 'react';
import Banner from './Banner';
import Flights from './Flights';

const MainContent = () => {
  return (
    <section className='w-[85.375rem] bg-white h-full'>
      <Banner />
      <Flights />
    </section>
  );
};

export default MainContent;
