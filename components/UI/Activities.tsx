import React from 'react';
import Card from '../Common/Card';
import { MdAccessTime } from 'react-icons/md';

const ActivityList = ({ activities, onRemove, isLoading }: any) => {
  if (isLoading) return <Spinner />;

  return (
    <section className="mt-8">
      <header className="flex justify-between items-center mb-4 bg-[#0D6EFD] p-4 rounded-t-sm text-white">
        <h3 className="font-semibold text-lg"> Activities</h3>
        <button className="bg-white text-[#0D6EFD] px-4 py-2 rounded-sm text-sm font-bold">Add Activities</button>
      </header>

      {activities.map((act: any) => (
        <Card key={act.id} onRemove={() => onRemove(act.id)}>
          <div className="flex p-4 gap-4">
            <div className="w-[200px] h-[150px] bg-gray-200 rounded-sm" /> {/* Placeholder for image */}
            <div className="flex-1">
              <h4 className="font-bold text-xl text-[#1D2433]">{act.name}</h4>
              <p className="text-sm text-[#676E7E] mt-1">{act.description}</p>
              <div className="flex gap-4 mt-4 items-center">
                <span className="text-[#0D6EFD] text-sm font-semibold flex items-center gap-1">
                   <MdAccessTime /> 1 Hour
                </span>
                <span className="bg-[#0D6EFD] text-white text-[10px] px-2 py-1 rounded-sm">Day 1</span>
              </div>
            </div>
            <p className="text-2xl font-bold">₦ {act.price}</p>
          </div>
        </Card>
      ))}
    </section>
  );
};
