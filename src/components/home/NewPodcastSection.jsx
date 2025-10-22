import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

// Add YouTube API Script
const loadYouTubeAPI = () => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

const NewPodcastSection = () => {
  // Load YouTube API on component mount
  React.useEffect(() => {
    loadYouTubeAPI();
  }, []);
  const videos = ["_ajLWLW1amQ", "lJ_8jTDQfH0"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayerStateChange = (event) => {
    // YouTube iframe events: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering)
    setIsPlaying(event.data === 1);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % videos.length),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div className="relative flex flex-col justify-center items-center w-full px-4 py-12 md:py-16 bg-gradient-to-b from-[#0A0A1F] to-[#000005] overflow-hidden">
      {/* Studio Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a4d,#0d0d2b,#000005)] opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
      </div>
      
      {/* IDEAPOD Heading */}
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
          IDEAPOD
        </h2>
      </div>

      {/* Swipeable Card with Enhanced Design */}
      <div className="group relative w-full max-w-2xl bg-gradient-to-br from-[#0A0A1F] via-[#000005] to-[#0A0A1F] rounded-xl overflow-hidden z-[10] transition-all duration-300 hover:scale-[1.02] border border-white/30 hover:border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] select-none">
        {/* Video Container */}
        <div className="h-72 p-3">
          {videos.map((videoId, index) => (
            <div
              key={videoId}
              className={`absolute top-3 left-3 right-3 h-[calc(100%-24px)] transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&autoplay=0&mute=0&enablejsapi=1`}
                title={`YouTube video ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                onLoad={(e) => {
                  // Initialize YouTube Player API
                  if (window.YT) {
                    new window.YT.Player(e.target, {
                      events: {
                        onStateChange: handlePlayerStateChange
                      }
                    });
                  }
                }}
              ></iframe>
            </div>
          ))}
        </div>

        {/* Controls Section - Inside the card, visible when video is not playing */}
        <div
          {...swipeHandlers}
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ease-in-out border-t border-white/10 bg-[#0A0A1F]/60 backdrop-blur-sm
            ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)}
              className="transform hover:scale-110 transition-all duration-200 text-white/70 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex flex-col items-center">
              <span className="text-white/90 text-sm font-medium mb-1">
                Episode {currentIndex + 1}/{videos.length}
              </span>
              <p className="text-white/50 text-xs">Swipe or use arrows</p>
            </div>

            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % videos.length)}
              className="transform hover:scale-110 transition-all duration-200 text-white/70 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subtitle - Below the card */}
      <div className="text-center mt-8 px-4 max-w-lg mx-auto">
        <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium">
          Our Innovation Podcast Series
        </p>
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          Exploring ideas, innovation, and entrepreneurship
        </p>
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% auto;
          animation: gradientMove 6s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default NewPodcastSection;
