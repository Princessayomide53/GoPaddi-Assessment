'use client';
import React, { useState } from 'react';
import { Button } from '../Common/Button';
import toast from 'react-hot-toast';

interface Props {
  open: boolean;
  onClose: () => void;
  onAddActivity: (activity: any) => void;
}

const ActivityModal = ({ open, onClose, onAddActivity }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    day: '1',
    duration: '1 Hour',
  });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      toast.error('Please enter a name and price');
      return;
    }

    onAddActivity({
      ...formData,
      id: crypto.randomUUID(),
    });
    onClose();
    setFormData({
      name: '',
      description: '',
      price: '',
      day: '1',
      duration: '1 Hour',
    });
  };

  return (
    <div className='fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm'>
      <div className='bg-white w-full max-w-lg rounded-lg overflow-hidden'>
        <header className='bg-[#0D6EFD] p-4 text-white flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Add Activity</h2>
          <button onClick={onClose} className='text-2xl'>
            &times;
          </button>
        </header>

        <form onSubmit={handleSubmit} className='p-6 space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>
              Activity Name
            </label>
            <input
              className='w-full border p-2 rounded'
              placeholder='e.g. Scuba Diving'
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>
              Description
            </label>
            <textarea
              className='w-full border p-2 rounded'
              placeholder='Briefly describe the activity'
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>
                Price (₦)
              </label>
              <input
                className='w-full border p-2 rounded'
                placeholder='50,000'
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Day</label>
              <select
                className='w-full border p-2 rounded'
                onChange={(e) =>
                  setFormData({ ...formData, day: e.target.value })
                }
              >
                {[1, 2, 3, 4, 5].map((d) => (
                  <option key={d} value={d}>
                    Day {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Button
            type='submit'
            className='w-full bg-[#0D6EFD] text-white py-3 mt-4'
          >
            Add to Itinerary
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ActivityModal;
