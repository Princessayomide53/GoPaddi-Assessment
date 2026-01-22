'use client';
import React, { useState } from 'react';
import Airplane from '@/public/Svgs/AirplaneTilt.svg';
import Building from '@/public/Svgs/Buildings.svg';
import Newspaper from '@/public/Svgs/NewspaperClipping.svg';
import FirstAidkit from '@/public/Svgs/FirstAidKit.svg';
import Package from '@/public/Svgs/Package.svg';
import Suitcase from '@/public/Svgs/SuitcaseRolling.svg';
import Student from '@/public/Svgs/Student.svg';
import Road from '@/public/Svgs/RoadHorizon.svg';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi';

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
    <section className='bg-white rounded-sm w-86 h-[41.5rem] py-8 px-8.5 sticky hidden lg:block'>
      {Sidebars.map((bars) => (
        <div className='flex space-x-3.5 space-y-7' key={bars.id}>
          <Image src={bars.img} alt='bars.text' />
          <p className='font-medium text-base leading-6 tracking-[-1px] text-[#647995]'>
            {bars.text}
          </p>
        </div>
      ))}

      <footer className='mt-auto pt-8'>
        <div className='flex items-center justify-between bg-[#F0F2F5] p-3 rounded-sm cursor-pointer'>
          <div className='flex items-center gap-2'>
            <div className='w-[3.125rem] h-[3.125rem] bg-[#0D6EFD] rounded-sm flex items-center justify-center text-white font-bold text-xs'>
              Go
            </div>
            <p className='hidden lg:block text-sm font-medium leading-[22px] text-[#1D2433]'>
              Personal Account
            </p>
          </div>
          <div className='hidden lg:block'>
            <IoIosArrowUp />
            <IoIosArrowDown />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Sidebar;
