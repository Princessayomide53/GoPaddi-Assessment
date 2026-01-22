'use client';
import React, { useState, useEffect } from 'react';
import { PiAirplaneInFlightBold } from 'react-icons/pi';
import {
  MdFlightLand,
  MdFlightTakeoff,
  MdMovieFilter,
  MdOutlineFastfood,
  MdUsb,
} from 'react-icons/md';
import { LuLuggage } from 'react-icons/lu';
import { Button } from '../Common/Button';
import Card from '../Common/Card';
import FlightModal from './FlightModal';
import toast from 'react-hot-toast';

const Flights = () => {
  const [flights, setFlights] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const savedFlights = localStorage.getItem('trip_itinerary_flights');
      if (savedFlights) {
        setFlights(JSON.parse(savedFlights));
      }
    } catch (error) {
      console.error('Failed to parse flights:', error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('my_flights', JSON.stringify(flights));
    }
  }, [flights, isInitialized]);

  const handleAddFlight = (newFlight: any) => {
    const flightWithId = { ...newFlight, id: Date.now() };
    setFlights((prev) => [...prev, flightWithId]);
    toast.success('Flight added successfully!');
  };

  const handleRemoveFlight = (id: number) => {
    setFlights((prevFlights) =>
      prevFlights.filter((flight) => flight.id !== id),
    );
    toast.error('Flight removed');
  };

  if (!isInitialized) return null;

  return (
    <section className='bg-white min-h-[30rem] px-7 py-6 overflow-y-auto'>
      <div className='bg-[#F0F2F5] h-full px-5 py-6 rounded-sm'>
        <header className='flex justify-between items-center mb-6'>
          <div className='flex gap-2 items-center'>
            <PiAirplaneInFlightBold className='text-2xl text-[#676E7E]' />
            <h2 className='text-sm md:text-lg font-semibold text-[#1D2433]'>
              Flights
            </h2>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className='bg-[#E7F0FF] text-[#0D6EFD] px-3 md:px-6 py-3 rounded-sm font-semibold text-xs md:text-sm hover:bg-[#D9E8FF] transition-colors'
          >
            Add Flights
          </button>
        </header>

        {flights.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-20 bg-white rounded-sm border border-[#E4E7EC]'>
            <PiAirplaneInFlightBold className='text-5xl text-gray-300 mb-4' />
            <p className='text-[#676E7E] font-medium'>No Requests yet.</p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className='bg-[#0D6EFD] text-white px-8 py-3 mt-7 cursor-pointer'
            >
              Add Flight
            </Button>
          </div>
        ) : (
          <ul className='space-y-4'>
            {flights.map((flight) => (
              <li key={flight.id}>
                <Card>
                  <div className='p-6'>
                    <div className='flex flex-wrap justify-between items-center gap-4 mb-6'>
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

                      <div className='flex items-center gap-4 md:gap-8'>
                        <div className='text-center'>
                          <p className='text-2xl font-semibold text-[#1D2433]'>
                            {flight.departure?.time}
                          </p>
                          <p className='text-xs text-[#676E7E]'>
                            {flight.departure?.date}
                          </p>
                        </div>

                        <div className='flex flex-col items-center min-w-[120px] md:min-w-[180px]'>
                          <div className='flex justify-between w-full text-[#676E7E] text-xs mb-1 font-medium'>
                            <MdFlightTakeoff />
                            <span>{flight.duration}</span>
                            <MdFlightLand />
                          </div>
                          <div className='w-full h-[6px] bg-[#E7F0FF] rounded-full relative'>
                            <div className='absolute left-1/4 right-1/4 h-full bg-[#0D6EFD] rounded-full'></div>
                          </div>
                          <div className='flex justify-between w-full text-sm font-semibold text-[#1D2433] mt-2'>
                            <span>{flight.departure?.code}</span>
                            <span className='text-[#676E7E] font-medium text-xs'>
                              Direct
                            </span>
                            <span>{flight.arrival?.code}</span>
                          </div>
                        </div>

                        <div className='text-center'>
                          <p className='text-2xl font-semibold text-[#1D2433]'>
                            {flight.arrival?.time}
                          </p>
                          <p className='text-xs text-[#676E7E]'>
                            {flight.arrival?.date}
                          </p>
                        </div>
                      </div>

                      <p className='text-2xl font-bold text-[#1D2433]'>
                        ₦ {flight.price}
                      </p>
                    </div>

                    <hr className='border-[#E4E7EC]' />

                    <div className='py-4 border-b border-[#E4E7EC] flex flex-wrap items-center gap-4 md:gap-6 text-[#676E7E] text-sm'>
                      <span className='font-medium'>Facilities:</span>
                      <div className='flex flex-wrap items-center gap-4'>
                        <span className='flex items-center gap-1.5'>
                          <LuLuggage /> Baggage: 20kg
                        </span>
                        <span className='flex items-center gap-1.5'>
                          <MdMovieFilter /> Entertainment
                        </span>
                        <span className='flex items-center gap-1.5'>
                          <MdOutlineFastfood /> Meal
                        </span>
                        <span className='flex items-center gap-1.5'>
                          <MdUsb /> USB Port
                        </span>
                      </div>
                    </div>

                    <footer className='pt-4 flex justify-between items-center text-sm font-semibold text-[#0D6EFD]'>
                      <div className='flex gap-6'>
                        <button className='hover:underline'>
                          Flight details
                        </button>
                        <button className='hover:underline'>
                          Price details
                        </button>
                      </div>
                      <button className='hover:underline'>Edit details</button>
                    </footer>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </div>

      <FlightModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddFlight={handleAddFlight}
      />
    </section>
  );
};

export default Flights;
