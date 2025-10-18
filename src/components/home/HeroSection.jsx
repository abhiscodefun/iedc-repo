import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from '../layout/TopNavigation';

const HeroText = memo(({ isVisible }) => (
  <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <h1 className="text-5xl md:text-7xl font-bold mb-4">
      Innovation and<br />Entrepreneurship<br />Development Cell
    </h1>
    <p className="text-xl md:text-2xl text-gray-600">
      SNGCE • 2023-24
    </p>
  </div>
));

const JoinButton = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
  >
    Join IEDC
  </button>
));

const HeroSection = ({ onJoinClick }) => {
  const [waveStyle, setWaveStyle] = useState({ buttonY: 0, rotation: 0 });
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    let frame;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const buttonY = Math.sin(elapsed / 1000) * 10;
      const rotation = Math.sin(elapsed / 1500) * 2;

      setWaveStyle({ buttonY, rotation });
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    const textTimer = setTimeout(() => setIsTextVisible(true), 500);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="relative h-[700px] bg-gray-50">
      <div className="relative w-full max-w-6xl mx-auto px-6">
        <div className="absolute top-0 left-0 right-0 px-6">
          <TopNavigation />
        </div>
        <div className="relative h-full flex items-center">
          <div className="relative">
            <HeroText isVisible={isTextVisible} />
            <div
              className="mt-12"
              style={{
                transform: `translateY(${waveStyle.buttonY}px) rotate(${waveStyle.rotation}deg)`
              }}
            >
              <JoinButton onClick={onJoinClick} />
            </div>
          </div>
          {/* Arise Button positioned at bottom */}
          <Link
            to="/arise"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            ARISE - let your ideas soar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
