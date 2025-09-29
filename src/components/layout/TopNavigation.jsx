import React from 'react';
import DarkModeToggle from '../common/DarkModeToggle.jsx';

const TopNavigation = ({ navigate, currentPage }) => {
  return (
    <nav className="w-full flex justify-between py-2 px-5 bg-transparent transition-colors">
      <div className="flex items-center space-x-10">
        <img src="/iedc_logo.png" alt="IEDC Logo" className="h-12" />
        <img src="/aset_logo.png" alt="ASET Logo" className="h-12" />
      </div>
      <div className="flex items-center space-x-10">
        <button
          onClick={() => navigate('home')}
          className={`font-semibold hover:text-black dark:hover:text-white transition-colors ${currentPage === 'home' ? 'text-black dark:text-white border-b-2 border-black dark:border-white' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Home
        </button>
        <button
          onClick={() => navigate('events')}
          className={`font-semibold hover:text-black dark:hover:text-white transition-colors ${currentPage === 'events' ? 'text-black dark:text-white border-b-2 border-black dark:border-white' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Events
        </button>
      </div>
    </nav>
  );
};

export default React.memo(TopNavigation);
