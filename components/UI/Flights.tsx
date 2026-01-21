'use client';
import React, { useState } from 'react';
import { PiAirplaneInFlightBold } from 'react-icons/pi';
import { Button } from '../Common/Button';
import Card from '../Common/Card';
import {
  MdFlightLand,
  MdFlightTakeoff,
  MdMovieFilter,
  MdOutlineFastfood,
  MdUsb,
} from 'react-icons/md';
import { LuLuggage } from 'react-icons/lu';

const Flights = () => {
  const [flights, setFlights] = useState([
    { id: 1, airline: 'American Airlines', price: '123,450.00', code: 'LOS' },
    { id: 2, airline: 'American Airlines', price: '123,450.00', code: 'SIN' },
  ]);

  const handleRemoveFlight = (id: number) => {
    setFlights((prevFlights) =>
      prevFlights.filter((flight) => flight.id !== id),
    );
  };
  const flightData = [
    {
      id: 1,
      airline: 'American Airlines',
      flightNo: 'AA-829',
      departure: { time: '08:35', date: 'Sun, 20 Aug', code: 'LOS' },
      arrival: { time: '09:55', date: 'Sun, 20 Aug', code: 'SIN' },
      duration: '1h 45m',
      price: '123,450.00',
    },
    {
      id: 2,
      airline: 'American Airlines',
      flightNo: 'AA-829',
      departure: { time: '08:35', date: 'Sun, 20 Aug', code: 'LOS' },
      arrival: { time: '09:55', date: 'Sun, 20 Aug', code: 'SIN' },
      duration: '1h 45m',
      price: '123,450.00',
    },
  ];
  return (
    <section className='bg-white h-[35rem] px-7 '>
      <div className='bg-[#F0F2F5] h-full px-5'>
        <header className='flex justify-between items-center mb-6 '>
          <div className='flex gap-2 items-center'>
            <PiAirplaneInFlightBold className='text-xl text-[#676E7E]' />
            <h2 className='text-lg font-semibold text-[#1D2433]'>Flights</h2>
          </div>
          <button className='bg-[#E7F0FF] text-[#0D6EFD] px-6 py-3 rounded-sm font-semibold text-sm hover:bg-[#D9E8FF] transition-colors'>
            Add Flights
          </button>
        </header>

        <ul>
          {flightData.map((flight) => (
            <li key={flight.id}>
              <Card onRemove={() => handleRemoveFlight(flight.id)}>
                <div className='p-6'>
                  <div className='flex justify-between items-center mb-6'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center'>
                        <MdFlightTakeoff />
                      </div>
                      <div>
                        <h4 className='font-semibold text-xl text-[#1D2433]'>
                          {flight.airline}
                        </h4>
                        <p className='text-sm text-[#676E7E] flex items-center gap-2'>
                          {flight.flightNo} •
                          <span className='bg-[#0A369D] text-white px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold'>
                            First Class
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-8'>
                      <div className='text-center'>
                        <p className='text-2xl font-semibold text-[#1D2433]'>
                          {flight.departure.time}
                        </p>
                        <p className='text-xs text-[#676E7E]'>
                          {flight.departure.date}
                        </p>
                      </div>

                      <div className='flex flex-col items-center min-w-[180px]'>
                        <div className='flex justify-between w-full text-[#676E7E] text-xs mb-1 font-medium'>
                          <MdFlightTakeoff />
                          <span>Duration: {flight.duration}</span>
                          <MdFlightLand />
                        </div>
                        <div className='w-full h-[6px] bg-[#E7F0FF] rounded-full relative'>
                          <div className='absolute left-1/4 right-1/4 h-full bg-[#0D6EFD] rounded-full'></div>
                        </div>
                        <div className='flex justify-between w-full text-sm font-semibold text-[#1D2433] mt-2'>
                          <span>{flight.departure.code}</span>
                          <span className='text-[#676E7E] font-medium'>
                            Direct
                          </span>
                          <span>{flight.arrival.code}</span>
                        </div>
                      </div>

                      <div className='text-center'>
                        <p className='text-2xl font-semibold text-[#1D2433]'>
                          {flight.arrival.time}
                        </p>
                        <p className='text-xs text-[#676E7E]'>
                          {flight.arrival.date}
                        </p>
                      </div>
                    </div>

                    <p className='text-2xl font-bold text-[#1D2433]'>
                      ₦ {flight.price}
                    </p>
                  </div>

                  <hr className='border-[#E4E7EC]' />

                  <div className='py-4 border-b border-[#E4E7EC] flex items-center gap-6 text-[#676E7E] text-sm'>
                    <span className='font-medium'>Facilities:</span>
                    <div className='flex items-center gap-4'>
                      <span className='flex items-center gap-1.5'>
                        <LuLuggage className='text-lg' /> Baggage: 20kg...
                      </span>
                      <span className='flex items-center gap-1.5'>
                        <MdMovieFilter className='text-lg' /> In flight
                        entertainment
                      </span>
                      <span className='flex items-center gap-1.5'>
                        <MdOutlineFastfood className='text-lg' /> In flight meal
                      </span>
                      <span className='flex items-center gap-1.5'>
                        <MdUsb className='text-lg' /> USB Port
                      </span>
                    </div>
                  </div>

                  <footer className='pt-4 flex justify-between items-center text-sm font-semibold text-[#0D6EFD]'>
                    <div className='flex gap-6'>
                      <button className='hover:underline'>
                        Flight details
                      </button>
                      <button className='hover:underline'>Price details</button>
                    </div>
                    <button className='hover:underline'>Edit details</button>
                  </footer>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Flights;
