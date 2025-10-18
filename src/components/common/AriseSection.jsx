import React from 'react';
import { Link } from 'react-router-dom';

const AriseSection = () => {
  return (
    <div className='fixed bottom-8 right-8 z-50 flex flex-col bg-black text-gray-100 p-6 rounded-lg shadow-[0_0_100px_#ff3c00] border border-gray-800 hover:shadow-[0_0_150px_#ff3c00] transition-all duration-300'>
      <p className='text-sm md:text-base font-medium mb-3'>
        Have an idea in your mind? Give it wings with IEDC ARISE
      </p>
      <Link
        to="/arise"
        className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 text-center transform hover:scale-105 shadow-lg"
      >
        POST NOW
      </Link>
    </div>
  );
};

export default AriseSection;