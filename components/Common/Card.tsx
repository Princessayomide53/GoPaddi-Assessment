import React from 'react';
import { IoClose } from 'react-icons/io5';

interface CardProps {
  children: React.ReactNode;
}
const Card = ({ children }: CardProps) => {
  return (
    <article className='group relative flex w-full bg-white rounded-sm overflow-hidden mb-4'>
      <div className='flex-1'>{children}</div>

      <aside className='w-[2.75rem] flex items-center justify-center bg-[#FBEAE9] group-hover:bg-[#F9E0DF] transition-colors'>
        <button
          className='flex items-center justify-center w-full h-full text-[#9E0A05]'
          aria-label='Remove item'
        >
          <IoClose size={24} />
        </button>
      </aside>
    </article>
  );
};

export default Card;
