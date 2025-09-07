import React from 'react';

const TopNavigation = ({ navigate, currentPage }) => {
  return (
    <nav className="w-full flex justify-between items-center py-4">
      <div className="flex items-center space-x-4">
        <img src="/iedc_logo.png" alt="IEDC Logo" className="h-12" />
        <img src="/aset_logo.png" alt="ASET Logo" className="h-12" />
      </div>
      <div className="flex items-center space-x-8">
        <button
          onClick={() => navigate('home')}
          className={`font-semibold hover:text-black transition-colors ${currentPage === 'home' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
        >
          Home
        </button>
        <button
          onClick={() => navigate('events')}
          className={`font-semibold hover:text-black transition-colors ${currentPage === 'events' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
        >
          Events
        </button>
      </div>
    </nav>
  );
};

export default React.memo(TopNavigation);
