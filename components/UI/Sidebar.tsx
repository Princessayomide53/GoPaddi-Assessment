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
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
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
    <>
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

      <>
        <div className='lg:hidden p-4'>
          <BiMenu className='text-3xl cursor-pointer' onClick={toggleSidebar} />
        </div>

        {isOpen && (
          <div
            className='fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity'
            onClick={toggleSidebar}
          />
        )}

        <section
          className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:block lg:w-86 lg:h-[41.5rem] lg:sticky
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        py-8 px-6 flex flex-col
      `}
        >
          <div className='lg:hidden flex justify-end mb-4'>
            <IoMdClose
              className='text-2xl cursor-pointer'
              onClick={toggleSidebar}
            />
          </div>

          <div className='flex-1 space-y-6'>
            {Sidebars.map((bars) => (
              <div
                className='flex items-center space-x-3.5 hover:bg-gray-50 p-2 rounded-md transition-colors cursor-pointer'
                key={bars.id}
              >
                <Image src={bars.img} alt={bars.text} width={24} height={24} />
                <p className='font-medium text-base leading-6 tracking-[-1px] text-[#647995]'>
                  {bars.text}
                </p>
              </div>
            ))}
          </div>

          <footer className='mt-auto pt-8'>
            <div className='flex items-center justify-between bg-[#F0F2F5] p-3 rounded-sm cursor-pointer'>
              <div className='flex items-center gap-2'>
                <div className='w-[2.5rem] h-[2.5rem] bg-[#0D6EFD] rounded-sm flex items-center justify-center text-white font-bold text-xs'>
                  Go
                </div>
                <p className='text-sm font-medium leading-[22px] text-[#1D2433]'>
                  Personal Account
                </p>
              </div>
              <div className='flex flex-col text-[10px] text-gray-500'>
                <IoIosArrowUp />
                <IoIosArrowDown />
              </div>
            </div>
          </footer>
        </section>
      </>
    </>
  );
};

export default Sidebar;
