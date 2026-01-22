'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from '../Common/Card';
import { MdLocationOn, MdStar, MdHotel } from 'react-icons/md';
import { LuBedDouble } from 'react-icons/lu';
import { Spinner } from '../Common/Spinner';
import HotelModal from './HotelModal';
import toast from 'react-hot-toast';
import Hotels from '@/public/Svgs/Hotel.svg';
import HotelsImage from '@/public/Svgs/Hotels.svg';
import { Button } from '../Common/Button';
import { PiSwimmingPool } from 'react-icons/pi';
import { MdLocalBar } from 'react-icons/md';

interface Hotel {
  id: string;
  name: string;
  address: string;
  price: string;
  rating: number;
  image: string;
}

const Hotel = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Fetch from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('trip_hotels');
    if (saved) {
      setHotels(JSON.parse(saved));
    }
    setIsLoading(false);
  }, []);

  // 2. Save to LocalStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('trip_hotels', JSON.stringify(hotels));
    }
  }, [hotels, isLoading]);

  const handleAddHotel = (newHotel: Hotel) => {
    setHotels((prev) => [...prev, newHotel]);
    toast.success(`${newHotel.name} added!`);
  };

  const handleRemove = (id: string) => {
    setHotels((prev) => prev.filter((h) => h.id !== id));
    toast.error('Hotel removed');
  };

  if (isLoading)
    return (
      <div className='py-20 flex justify-center'>
        <Spinner />
      </div>
    );

  return (
    <section className='mt-8 px-7 min-h-[30rem] overflow-y-auto'>
      <header className='mb-4 bg-[#344054] p-4 rounded-t-sm text-white'>
        <div className='flex justify-between items-center mb-4 p-4 rounded-t-sm text-white'>
          <span className='flex gap-3 md:gap-5'>
            <Image src={Hotels} alt='hotels' />
            <h3 className='font-semibold text-sm md:text-lg flex items-center gap-2'>
              Hotels
            </h3>
          </span>

          <Button
            onClick={() => setIsModalOpen(true)}
            className='bg-white text-[#344054] text-xs px-3 md:px-4 py-2 rounded-sm md:text-sm font-bold hover:bg-gray-100 transition-colors'
          >
            Add Hotels
          </Button>
        </div>
        {hotels.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-16 bg-white border border-[#E4E7EC] rounded-b-sm'>
            <MdHotel className='text-6xl text-gray-200 mb-4' />
            <p className='text-[#676E7E] font-medium'>
              No hotels added to your itinerary.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className='bg-[#0D6EFD] text-white px-8 py-3 mt-7 cursor-pointer'
            >
              Add Hotel
            </Button>
          </div>
        ) : (
          <ul className='space-y-4'>
            {hotels.map((hotel) => (
              <li key={hotel.id}>
                <Card>
                  <div className='flex flex-col md:flex-row p-4 gap-4'>
                    <div className='relative w-full md:w-50 h-37.5'>
                      <Image
                        src={HotelsImage}
                        alt={hotel.name}
                        fill
                        className='rounded-sm object-cover'
                      />
                    </div>

                    <div className='flex-1'>
                      <h4 className='font-bold text-xl text-[#1D2433]'>
                        {hotel.name}
                      </h4>
                      <p className='text-[#676E7E] text-sm flex items-center gap-1 mt-1'>
                        <MdLocationOn className='text-[#0D6EFD]' />{' '}
                        {hotel.address}
                      </p>

                      <div className='flex items-center gap-4 mt-3'>
                        <span className='flex items-center gap-1 text-sm text-[#676E7E]'>
                          Show map
                        </span>
                        <span className='flex items-center gap-1 text-sm font-medium text-[#0D6EFD]'>
                          <MdStar className='text-yellow-500' /> {hotel.rating}{' '}
                          (436)
                        </span>
                        <span className='flex items-center gap-1 text-sm text-[#676E7E]'>
                          <LuBedDouble /> King size room
                        </span>
                      </div>
                      <div className='flex items-center gap-4 mt-3 py-2 border-t-2 border-b-2  border-[#676E7E]'>
                        <span className='flex items-center gap-1 text-sm text-[#676E7E]'>
                          Facillities
                        </span>
                        <span className='flex items-center gap-1 text-sm font-medium text-[#676E7E]'>
                          <PiSwimmingPool className='text-[#676E7E]' />
                          pool (436)
                        </span>
                        <span className='flex items-center gap-1 text-sm text-[#676E7E]'>
                          <MdLocalBar /> Bar
                        </span>
                      </div>

                      <div className='flex items-center gap-4 mt-5'>
                        <span className='flex items-center gap-1 text-sm text-[#0D6EFD]'>
                          Hotel Details
                        </span>
                        <span className='flex items-center gap-1 text-sm font-medium text-[#0D6EFD]'>
                          Price details
                        </span>
                        <span className='flex items-center gap-1 text-sm text-[#0D6EFD] ml-auto'>
                          Edit details
                        </span>
                      </div>
                    </div>

                    <div className='text-right flex flex-col justify-between'>
                      <p className='text-2xl font-bold text-[#1D2433]'>
                        ₦ {hotel.price}
                      </p>
                      <div className='text-xs text-[#676E7E]'>
                        <p>Check In: 20-04-2024</p>
                        <p>Check Out: 29-04-2024</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </header>

      <HotelModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddHotel={handleAddHotel}
      />
    </section>
  );
};

export default Hotel;
