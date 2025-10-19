import React from 'react';
import { Link } from 'react-router-dom';

const AriseSection = () => {
  return (
    <div className='w-full flex justify-center items-center h-64 bg-gray-200'>
      <div className='flex flex-col justify-center items-center w-[80%] bg-black h-[80%] shadow-[0_0_30px_#008CFF] rounded-xl text-gray-200'>
        <span className='mb-2 text-center text-xl'>Have an idea in your mind?</span>
        <span className='mb-4 bg-gradient-to-r from-red-500 to-gray-400 bg-clip-text text-transparent text-center'>Give it wings with IEDC ARISE</span>
        <Link
          to="/arise"
          className='px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-md rounded-full hover:shadow-[0_0_20px_#008CFF]'
        >
          POST YOUR IDEA
        </Link>
      </div>
    </div>
  );
};
export default AriseSection;