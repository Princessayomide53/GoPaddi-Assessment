import React from 'react';
import Logo from '@/public/Svgs/Logo.svg';
import Home from '@/public/Svgs/House.svg';
import Dashboard from '@/public/Svgs/ChartPieSlice.svg';
import Trip from '@/public/Svgs/ListChecks.svg';
import Bell from '@/public/Svgs/Bell.svg';
import Commission from '@/public/Svgs/HandCoins.svg';
import Wallet from '@/public/Svgs/Wallet.svg';
import PlusSquare from '@/public/Svgs/PlusSquare.svg';
import Basket from '@/public/Svgs/Basket.svg';
import Profile from '@/public/Svgs/Profile.svg';
import CaretDown from '@/public/Svgs/CaretDown.svg';
import Image from 'next/image';
import { Button } from '../Common/Button';

const Nav = () => {
  const mainNavItems = [
    { id: 1, img: Home, text: 'Home' },
    { id: 2, img: Dashboard, text: 'Dashboard' },
    { id: 3, img: Wallet, text: 'Wallet' },
    { id: 4, img: Trip, text: 'Plan a trip' },
    { id: 5, img: Commission, text: 'Commission for life' },
  ];
  const utilityNavItems = [
    { id: 1, img: Bell, text: 'Notification' },
    { id: 2, img: Basket, text: 'Carts' },
    { id: 3, img: PlusSquare, text: 'Create' },
  ];
  return (
    <header className='bg-white py-7 w-full'>
      <div className='w-full px-3 md:px-0 md:max-w-[45rem] lg:max-w-[62rem] xl:max-w-[76rem] mac:!max-w-[88rem] mx-auto flex justify-between items-center'>
        <div className='flex gap-3 md:gap-7'>
          <Image src={Logo} alt='logo' />
          <input
            type='text'
            placeholder='search'
            className='iphone:w-[10rem] lg:w-[25rem] xl:w-[20rem] h-[3.5rem] pl-3 bg-[#F0F2F5] rounded-sm'
          />
        </div>
        <nav className='flex  xl:space-x-4.5 mac:space-x-6'>
          <ul className='xl:flex hidden xl:space-x-3.5 mac:space-x-4.5'>
            {mainNavItems.map((item) => (
              <li key={item.id} className='flex-col flex items-center'>
                <Image src={item.img} alt={item.text} className='w-7 h-7' />
                <p
                  className={`lg:text-xs xl:text-sm mac:text-base leading-6 ${
                    item.id === 4
                      ? 'text-[#1D2433] font-bold'
                      : 'text-[#647995] font-medium'
                  }`}
                >
                  {item.text}
                </p>
              </li>
            ))}
            <div className='border-r border-2 border-[#98A2B3]'></div>
          </ul>
          <ul className='flex space-x-6'>
            <Button className='bg-[#0D6EFD] hidden xl:flex rounded-sm font-medium lg:text-xs xl:text-sm mac:text-base px-3.5 self-center py-2.5 text-white'>
              Subscribe
            </Button>
            {utilityNavItems.map((items) => (
              <li
                key={items.id}
                className='hidden flex-col xl:flex items-center'
              >
                <Image src={items.img} alt={items.text} className='w-7 h-7' />
                <p className='lg:text-xs xl:text-sm mac:text-base leading-6 text-[#647995] font-medium'>
                  {items.text}
                </p>
              </li>
            ))}
            <li className='flex gap-3'>
              <Image src={Profile} alt='profile' className='w-12 h-12' />
              <Image
                src={CaretDown}
                alt='arrow-down'
                className='w-5 h-5 mt-4'
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
