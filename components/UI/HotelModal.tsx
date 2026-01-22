'use client';
import React, { useState } from 'react';
import { Button } from '../Common/Button';
import toast from 'react-hot-toast';

interface Props {
  open: boolean;
  onClose: () => void;
  onAddHotel: (hotel: any) => void;
}

const HotelModal = ({ open, onClose, onAddHotel }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    price: '',
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400',
  });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.price) {
      toast.error('Please fill in all fields');
      return;
    }

    onAddHotel({
      ...formData,
      id: crypto.randomUUID(),
    });

    setFormData({
      name: '',
      address: '',
      price: '',
      rating: 4.5,
      image: formData.image,
    });
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm'>
      <div className='bg-white w-full max-w-lg rounded-lg overflow-hidden shadow-2xl'>
        <header className='bg-[#344054] p-4 text-white flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Add New Hotel</h2>
          <button onClick={onClose} className='text-2xl'>
            &times;
          </button>
        </header>

        <form onSubmit={handleSubmit} className='p-6 space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Hotel Name
            </label>
            <input
              className='w-full border p-2.5 rounded'
              placeholder='e.g. Riviera Suites'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Address
            </label>
            <input
              className='w-full border p-2.5 rounded'
              placeholder='123 Luxury Way, Lagos'
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Price (₦)
              </label>
              <input
                className='w-full border p-2.5 rounded'
                placeholder='123,000.00'
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Rating (1-5)
              </label>
              <input
                type='number'
                step='0.1'
                max='5'
                className='w-full border p-2.5 rounded'
                value={formData.rating}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    rating: parseFloat(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Image URL
            </label>
            <input
              className='w-full border p-2.5 rounded'
              placeholder='https://...'
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </div>

          <div className='pt-4'>
            <Button
              type='submit'
              className='w-full bg-[#0D6EFD] text-white py-3 rounded font-bold'
            >
              Add Hotel to Itinerary
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelModal;
