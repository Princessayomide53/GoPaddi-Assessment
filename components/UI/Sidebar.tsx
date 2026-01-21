import React from 'react';
import Airplane from '@/public/Svgs/AirplaneTilt.svg';
import Building from '@/public/Svgs/Buildings.svg';
import Newspaper from '@/public/Svgs/NewspaperClipping.svg';
import FirstAidkit from '@/public/Svgs/FirstAidKit.svg';
import Package from '@/public/Svgs/Package.svg';
import Suitcase from '@/public/Svgs/SuitcaseRolling.svg';
import Student from '@/public/Svgs/Student.svg';
import Road from '@/public/Svgs/RoadHorizon.svg';
import Image from 'next/image';

const Sidebar = () => {
  const Sidebars = [
    { id: 1, img: Road, text: 'Activities' },
    { id: 2, img: Building, text: 'Hotels' },
    { id: 3, img: Airplane, text: 'Flights' },
    { id: 4, img: Student, text: 'Studies' },
    { id: 5, img: Newspaper, text: 'Visa' },
    { id: 6, img: Suitcase, text: 'Immigration' },
    { id: 7, img: FirstAidkit, text: 'Medical' },
    { id: 8, img: Package, text: 'Vacational Packages' },
  ];
  return (
    <section className='bg-white rounded-sm w-75 h-screen py-8 px-10'>
      {Sidebars.map((bars) => (
        <div className='flex space-x-5 space-y-7' key={bars.id}>
          <Image src={bars.img} alt='bars.text' />
          <p className='font-medium text-base leading-6 tracking-[-1px] text-[#647995]'>
            {bars.text}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Sidebar;
