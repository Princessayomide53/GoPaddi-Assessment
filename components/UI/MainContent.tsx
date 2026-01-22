import React from 'react';
import Banner from './Banner';
import Flights from './Flights';
import Hotel from './Hotel';
import Activities from './Activities';

const MainContent = () => {
  return (
    <section className='w-[85.375rem] bg-white h-full overflow-y-auto'>
      <Banner />
      <Flights />
      <Hotel />
      <Activities />
    </section>
  );
};

export default MainContent;
