'use client';
import React, { useState, useEffect } from 'react';
import Card from '../Common/Card';
import { MdAccessTime, MdLocalActivity, MdStar } from 'react-icons/md';
import { Spinner } from '../Common/Spinner';
import ActivityModal from './ActivitiesModal';
import {
  getStoredActivities,
  saveActivityToStorage,
} from '../../lib/Activities';
import Act from '@/public/Svgs/Act2.svg';
import Activity from '@/public/Svgs/Activity.svg';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { CgLock } from 'react-icons/cg';
import { BiLocationPlus } from 'react-icons/bi';
import { Button } from '../Common/Button';

const Activities = () => {
  const [activities, setActivities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setActivities(getStoredActivities());
    setIsLoading(false);
  }, []);

  const handleAdd = (act: any) => {
    saveActivityToStorage(act);
    setActivities((prev) => [...prev, act]);
    toast.success('Activity added!');
  };

  if (isLoading) return <Spinner />;

  return (
    <section className='mt-8 px-7 min-h-[30rem] overflow-y-auto '>
      <header className=' bg-[#0D6EFD] p-4 rounded-t-sm text-white'>
        <div className='flex justify-between items-center mb-4'>
          <span className='flex gap-3'>
            <Image src={Act} alt='Road' />
            <h3 className='font-semibold text-sm md:text-lg flex items-center gap-2'>
              Activities
            </h3>
          </span>
          <Button
            onClick={() => setIsModalOpen(true)}
            className='bg-white text-[#0D6EFD] text-xs px-3 md:px-4 py-2 rounded-sm md
            md:text-sm font-bold'
          >
            Add Activities
          </Button>
        </div>

        {activities.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-16 bg-white border rounded-b-sm overflow-x-auto'>
            <MdLocalActivity className='text-6xl text-gray-200 mb-4' />
            <p className='text-[#676E7E] font-medium'>
              No activities planned yet.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className='mt-4 text-[#0D6EFD] font-bold hover:underline'
            >
              Add an activity
            </button>
          </div>
        ) : (
          <div className='space-y-4 pt-7'>
            {activities.map((act) => (
              <Card key={act.id}>
                <div className='flex flex-col md:flex-row p-7 gap-4 py-10'>
                  <div className='w-full md:w-[200px] h-[120px] flex items-center justify-center text-gray-400'>
                    <Image src={Activity} alt='activity' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-xl text-[#1D2433]'>
                      {act.name}
                    </h4>
                    <p className='text-sm text-[#676E7E] mt-1'>
                      {act.description}
                    </p>

                    <div className='flex items-center gap-4 mt-3'>
                      <span className='flex items-center gap-1 text-sm text-[#676E7E]'>
                        <BiLocationPlus /> Directions
                      </span>
                      <span className='flex items-center gap-1 text-sm font-medium text-[#0D6EFD]'>
                        <MdStar className='text-yellow-500' /> 4.5 (436)
                      </span>
                      <span className='flex items-center gap-1 text-sm text-[#676E7E]'>
                        <CgLock /> 1hour room
                      </span>
                    </div>

                    <div className='flex gap-4 mt-4 items-center'>
                      <span className='text-[#0D6EFD] text-sm font-semibold flex items-center gap-1'>
                        <MdAccessTime /> {act.duration}
                      </span>
                      <span className='bg-[#0D6EFD] text-white text-[10px] px-2 py-1 rounded-sm uppercase'>
                        Day {act.day}
                      </span>
                    </div>

                    <div className='flex gap-4 mt-4 items-center py-2 border-t-2 border-b-2  border-[#676E7E]'>
                      <span className='text-[#676E7E] text-sm font-semibold flex items-center gap-1'>
                        What's Included:
                      </span>
                      <span className='text-[#676E7E] text-[10px] px-2 py-1 rounded-sm uppercase'>
                        Admission to the Empire State Building
                      </span>
                      <span className='text-[#0D6EFD]  text-[10px] px-2 py-1 rounded-sm uppercase'>
                        see more
                      </span>
                    </div>
                    <div className='flex items-center gap-4 mt-5'>
                      <span className='flex items-center gap-1 text-sm text-[#0D6EFD]'>
                        Activities Details
                      </span>
                      <span className='flex items-center gap-1 text-sm font-medium text-[#0D6EFD]'>
                        Price details
                      </span>
                      <span className='flex items-center gap-1 text-sm text-[#0D6EFD] ml-auto'>
                        Edit details
                      </span>
                    </div>
                  </div>
                  <p className='text-2xl font-bold text-[#1D2433]'>
                    ₦ {act.price}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </header>

      <ActivityModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddActivity={handleAdd}
      />
    </section>
  );
};

export default Activities;
