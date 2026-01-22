'use client';

import React, { useState } from 'react';
import { Button } from '../Common/Button';

interface Props {
  open: boolean;
  onClose: () => void;
  onAddFlight: (flight: any) => void;
}

const FlightSearchModal = ({ open, onClose, onAddFlight }: Props) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  if (!open) return null;

  const mockResults = [
    {
      id: Date.now(),
      airline: 'American Airlines',
      flightNo: 'AA-829',
      departure: {
        time: '08:35',
        date: 'Sun, 20 Aug',
        code: from.toUpperCase() || 'LOS',
      },
      arrival: {
        time: '09:55',
        date: 'Sun, 20 Aug',
        code: to.toUpperCase() || 'SIN',
      },
      duration: '1h 45m',
      price: '123,450.00',
    },
  ];

  return (
    <div className='fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4'>
      <div className='bg-white w-full max-w-2xl rounded-lg p-6 shadow-xl'>
        <header className='flex justify-between items-center mb-6'>
          <h2 className='text-xl font-semibold'>Search & Add Flight</h2>
          <button onClick={onClose} className='text-gray-500 hover:text-black'>
            ✕
          </button>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          <input
            className='border p-3 rounded'
            placeholder='From (e.g. LOS)'
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            className='border p-3 rounded'
            placeholder='To (e.g. SIN)'
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <input
            type='date'
            className='border p-3 rounded'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className='space-y-4'>
          <h3 className='font-medium text-gray-700'>Available Flights</h3>
          {mockResults.map((flight) => (
            <div
              key={flight.id}
              className='border p-4 rounded flex justify-between items-center bg-gray-50'
            >
              <div>
                <p className='font-bold'>
                  {flight.airline} ({flight.flightNo})
                </p>
                <p className='text-sm text-gray-600'>
                  {flight.departure.code} → {flight.arrival.code}
                </p>
                <p className='text-[#0D6EFD] font-bold'>₦ {flight.price}</p>
              </div>
              <Button
                className='bg-[#0D6EFD] text-white px-4 py-2 rounded text-sm'
                onClick={() => {
                  onAddFlight(flight);
                  onClose();
                }}
              >
                Select Flight
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchModal;
