import React from 'react';
import Image from 'next/image';
import banner from '@/public/Images/banner.png';
import box from '@/public/Svgs/box.svg';
import xx from '@/public/Svgs/xx.svg';
import User from '@/public/Svgs/User.svg';
import { GoCalendar } from 'react-icons/go';
import { BsThreeDots } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { Button } from '../Common/Button';

const Banner = () => {
  const itineraries = [
    {
      id: 1,
      title: 'Activities',
      description:
        'Build, personalize, and optimize your itineraries with our trip planner.',
    },
    {
      id: 2,
      title: 'Hotels',
      description:
        'Build, personalize, and optimize your itineraries with our trip planner.',
    },
    {
      id: 3,
      title: 'Flights',
      description:
        'Build, personalize, and optimize your itineraries with our trip planner.',
    },
  ];
  const bgById: Record<number, string> = {
    1: 'bg-[#000031]',
    2: 'bg-[#E7F0FF]',
    3: 'bg-[#0D6EFD]',
  };
  return (
    <section className='p-7'>
      <figure className='w-full'>
        <Image
          src={banner}
          alt='Aerial view of Bahamas beach'
          className='h-44 object-cover'
        />
      </figure>

      <header className='flex justify-between items-start'>
        <div className='pt-5'>
          <time className='text-[#7A4504] flex items-center bg-[#FEF4E6] rounded-sm px-2 h-[1.875rem] w-fit min-w-[15.8125rem]'>
            <span className='flex gap-2 items-center pr-2 font-semibold leading-8 tracking-[-2%] text-sm'>
              <MdOutlineCalendarToday
                className='text-[#7A4504] text-base font-bold'
                aria-hidden='true'
              />
              21 March 2024
            </span>
            <span className='flex gap-2 items-center font-semibold leading-8 tracking-[-2%] text-sm'>
              <FaArrowRightLong className='text-[#7A4504]' aria-hidden='true' />
              21 April 2024
            </span>
          </time>

          <h2 className='font-semibold text-2xl leading-8 text-black tracking-[-2%] pt-2'>
            Bahamas Family Trip
          </h2>

          <p className='font-medium pt-2 text-base leading-6 tracking-[-4%] text-[#676E7E]'>
            New York, United States of America | Solo Trip
          </p>
        </div>

        <aside className='flex flex-col items-center gap-5 pt-5'>
          <menu className='flex gap-5 items-center'>
            <button
              className='bg-[#E7F0FF] w-[10rem] h-[2.875rem] flex justify-center items-center hover:opacity-90 transition-opacity'
              aria-label='User profile'
            >
              <Image src={User} alt='' />
            </button>
            <button aria-label='More options'>
              <BsThreeDots className='text-2xl cursor-pointer' />
            </button>
          </menu>

          <div className='flex justify-center pt-0.5' aria-hidden='true'>
            <Image src={box} alt='' />
            <Image src={xx} alt='' />
          </div>
        </aside>
      </header>

      <ul className='flex gap-1 pt-4 list-none'>
        {itineraries.map((card) => (
          <li
            key={card.id}
            className={`${bgById[card.id]} rounded-sm w-[16.875rem] h-[12.0625rem] px-5 py-4`}
          >
            <h3
              className={`font-semibold ${card.id === 2 ? 'text-black' : 'text-white'} text-base leading-6 tracking-[-4%]`}
            >
              {card.title}
            </h3>
            <p
              className={`${card.id === 2 ? 'text-black' : 'text-white'} pt-3 font-regular text-sm leading-5 tracking-[-4%]`}
            >
              {card.description}
            </p>

            <Button
              className={`${card.id === 3 ? 'bg-white text-[#0D6EFD]' : 'bg-[#0D6EFD] text-white'} cursor-pointer font-medium leading-5 text-sm tracking-[-4%] w-full rounded-sm py-3 mt-9`}
            >
              {`Add ${card.title}`}
            </Button>
          </li>
        ))}
      </ul>

      <div className='pt-20'>
        <h2 className='text-[#1D2433] font-semibold text-xl leading-7 tracking-[-2%]'>
          Trip itineraries
        </h2>

        <p className='text-[#647995] font-medium leading-5 text-sm tracking-[-1%]'>
          Your trip itineraries are placed here
        </p>
      </div>
    </section>
  );
};

export default Banner;
