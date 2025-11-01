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
          className={`font-semibold hover:text-black  transition-colors ${location.pathname === '/' ? 'text-black border-b-2 border-black dark:border-white' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Home
        </Link>
        <Link
          to="/events"
          className={`font-semibold hover:text-black transition-colors ${location.pathname === '/events' ? 'text-black dark:text-white border-b-2 border-black dark:border-white' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Events
        </Link>
        <Link
          to="/arise"
          className="group relative px-6 py-2 rounded-lg bg-gray-100 transition-all duration-300 
                    hover:scale-[1.02] outline-button"
        >
          {/* Button content */}
          <span className="relative z-10 font-semibold text-gray-800">
            Post Idea
          </span>
        </Link>

        <style>{`
          .outline-button {
            position: relative;
            border: 2px solid transparent;
          }

          .outline-button::before {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: 8px;
            padding: 2px;
            background: linear-gradient(
              90deg,
              #000,
              #7c3aed,
              #8b5cf6,
              #7c3aed,
              #000
            );
            background-size: 200% 100%;
            -webkit-mask: 
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            mask: 
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: outlineMove 2s linear infinite;
          }

          @keyframes outlineMove {
            0% {
              background-position: 100% 0;
            }
            100% {
              background-position: -100% 0;
            }
          }
        `}</style>
      </div>
    </nav>
  );
};

export default React.memo(TopNavigation);
