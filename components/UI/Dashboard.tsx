'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { BiMenu } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import Airplane from '@/public/Svgs/AirplaneTilt.svg';
import Building from '@/public/Svgs/Buildings.svg';
import Newspaper from '@/public/Svgs/NewspaperClipping.svg';
import FirstAidkit from '@/public/Svgs/FirstAidKit.svg';
import Package from '@/public/Svgs/Package.svg';
import Suitcase from '@/public/Svgs/SuitcaseRolling.svg';
import Student from '@/public/Svgs/Student.svg';
import Road from '@/public/Svgs/RoadHorizon.svg';
import Image from 'next/image';

const Dashboard = () => {
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
    <section className='bg-[#F0F2F5] w-full h-full lg:h-[43.3rem] xl:h-screen overflow-y-hidden'>
      <div className='px-3 md:px-0 md:max-w-[45rem] lg:max-w-[62rem] xl:max-w-[76rem] mac:!max-w-[88rem] mx-auto py-7 flex gap-12 justify-between h-full '>
        <Sidebar />
        <MainContent />
      </div>
    </section>
  );
};

export default Dashboard;
