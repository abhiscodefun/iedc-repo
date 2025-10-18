import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from '../common/DarkModeToggle.jsx';

const TopNavigation = () => {
  const location = useLocation();
  return (
    <nav className="w-full flex justify-between py-2 px-5 bg-transparent transition-colors">
      <div className="flex items-center space-x-10">
        <img src="/iedc_logo.png" alt="IEDC Logo" className="h-12" />
        <img src="/aset_logo.png" alt="ASET Logo" className="h-12" />
      </div>
      <div className="flex items-center space-x-10">
        <Link
          to="/"
          className={`font-semibold hover:text-black dark:hover:text-white transition-colors ${location.pathname === '/' ? 'text-black dark:text-white border-b-2 border-black dark:border-white' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Home
        </Link>
        <Link
          to="/events"
          className={`font-semibold hover:text-black dark:hover:text-white transition-colors ${location.pathname === '/events' ? 'text-black dark:text-white border-b-2 border-black dark:border-white' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Events
        </Link>
      </div>
    </nav>
  );
};

export default React.memo(TopNavigation);
