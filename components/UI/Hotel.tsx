import React from 'react';
import Image from 'next/image';
import Card from '../Common/Card';
import { MdLocationOn, MdStar } from 'react-icons/md';
import { LuBedDouble } from 'react-icons/lu';

interface Hotel {
  id: string;
  name: string;
  address: string;
  price: string;
  rating: number;
  image: string;
}

const HotelList = ({ hotels, onRemove, isLoading }: { hotels: Hotel[], onRemove: (id: string) => void, isLoading: boolean }) => {
  if (isLoading) return <Spinner />;

  return (
    <section className="mt-8">
      <header className="flex justify-between items-center mb-4 bg-[#344054] p-4 rounded-t-sm text-white">
        <h3 className="font-semibold text-lg flex items-center gap-2">🏨 Hotels</h3>
        <button className="bg-white text-[#344054] px-4 py-2 rounded-sm text-sm font-bold">Add Hotels</button>
      </header>

      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <Card onRemove={() => onRemove(hotel.id)}>
              <div className="flex p-4 gap-4">
                <Image src={hotel.image} alt={hotel.name} width={200} height={150} className="rounded-sm object-cover" />
                
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-[#1D2433]">{hotel.name}</h4>
                  <p className="text-[#676E7E] text-sm flex items-center gap-1 mt-1">
                    <MdLocationOn className="text-[#0D6EFD]" /> {hotel.address}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1 text-sm font-medium text-[#0D6EFD]">
                      <MdStar className="text-yellow-500" /> {hotel.rating} (436)
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[#676E7E]">
                      <LuBedDouble /> King size room
                    </span>
                  </div>
                </div>

                <div className="text-right flex flex-col justify-between">
                  <p className="text-2xl font-bold text-[#1D2433]">₦ {hotel.price}</p>
                  <div className="text-xs text-[#676E7E]">
                    <p>Check In: 20-04-2024</p>
                    <p>Check Out: 29-04-2024</p>
                  </div>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};
