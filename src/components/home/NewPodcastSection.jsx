import React from 'react';

const NewPodcastSection = () => {
  const verticalBeats = Array.from({ length: 30 }, (_, i) => (
    <rect
      key={`beat-${i}`}
      x="6"
      y={i * 20}
      width="12"
      height="10"
      fill="url(#beatsGradient)"
      className={`animate-beat-vertical-${(i % 5) + 1}`}
    />
  ));

  return (
    <div className="bg-gray-900 py-12 sm:py-16 relative overflow-hidden">
      {/* Background Audio Beats */}
      <div className="absolute inset-0 flex justify-center items-center opacity-60">
        <svg
          className="w-6 h-full"
          viewBox="0 0 24 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="beatsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
              <stop offset="20%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#1E40AF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <g className="audio-beats-vertical">{verticalBeats}</g>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative text-white rounded-2xl shadow-2xl overflow-hidden
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                        p-8 border-2 border-transparent
                        animate-neon-border">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-8">
            <div className="text-center sm:text-left">
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-300 via-gray-200 to-yellow-900 bg-clip-text text-transparent">
                IDEAPOD!
              </h1>
              <p className="text-xl sm:text-2xl font-light text-gray-100 italic hidden sm:block">
                your weekly pump of startup stories
              </p>
            </div>
            <div className="text-center sm:text-left mt-4 sm:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Episode #1
              </h2>
            </div>
          </div>

          {/* YouTube & Description */}
          <div className="flex flex-col lg:flex-row gap-8 items-start relative">
            {/* YouTube Embed */}
            <div className="w-full lg:w-2/3">
              <div className="relative aspect-video overflow-hidden shadow-lg rounded-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/_ajLWLW1amQ?si=O7gx_JEL6qkdAn6X"
                  title="IEDC Podcast"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/3 flex flex-col justify-between h-full hidden sm:flex">
              <p className="text-lg text-gray-100 leading-relaxed font-light">
                Get to know about startup, business, and IEDC through IDEAPOD! An
                introduction to the epitome of ideas.
              </p>

              {/* Spotify Link */}
              <div className="mt-auto pt-4">
                <a
                  href="https://open.spotify.com/show/2jQ8WwxwUbaWDvWbmAdK5d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors font-light text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 168 168"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M84 0C37.58 0 0 37.58 0 84s37.58 84 84 84 84-37.58 84-84S130.42 0 84 0zm38.66 121.82c-1.54 2.36-4.77 3.07-7.13 1.52-19.45-12.67-43.9-15.54-72.88-8.3-2.78.75-5.55-1.06-6.3-3.83-.75-2.78 1.06-5.55 3.83-6.3 32.98-8.89 60.96-5.7 83.56 9.47 2.36 1.55 3.07 4.77 1.52 7.14zm9.96-22.83c-1.93 2.95-6.02 3.87-8.96 1.94-22.29-14.57-56.28-18.83-82.61-10.06-3.31 1.08-6.86-0.74-7.94-4.05-1.08-3.31.74-6.86 4.05-7.94 30.79-10.06 68.39-5.32 93.45 11.29 2.94 1.93 3.87 6.02 1.95 8.82zm.17-23.4c-26.3-16.12-69.91-17.62-95.97-9.41-4.02 1.15-8.32-1.22-9.46-5.24-1.14-4.02 1.22-8.32 5.24-9.46 29.51-8.47 77.36-6.73 107.17 10.26 3.73 2.29 4.87 7.18 2.58 10.9-2.28 3.74-7.18 4.87-10.56 2.95z"
                    />
                  </svg>
                  Listen on Spotify
                </a>
              </div>

              {/* Speakers */}
              <div className="mt-6 w-full bg-gray-100 rounded-full p-4 flex justify-around text-gray-900 font-medium">
                Speakers: Adheeba | Saniya
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        .audio-beats-vertical rect {
          transform-origin: center bottom;
        }
        .animate-beat-vertical-1 { animation: verticalBeat 3.2s ease-in-out infinite; }
        .animate-beat-vertical-2 { animation: verticalBeat 3.4s ease-in-out infinite 0.2s; }
        .animate-beat-vertical-3 { animation: verticalBeat 3.6s ease-in-out infinite 0.4s; }
        .animate-beat-vertical-4 { animation: verticalBeat 3.8s ease-in-out infinite 0.6s; }
        .animate-beat-vertical-5 { animation: verticalBeat 3.0s ease-in-out infinite 0.8s; }

        @keyframes verticalBeat {
          0%, 100% { height: 4px; y: 296px; opacity: 0.3; }
          10% { height: 8px; y: 292px; opacity: 0.4; }
          20% { height: 16px; y: 284px; opacity: 0.6; }
          30% { height: 24px; y: 276px; opacity: 0.8; }
          40% { height: 32px; y: 268px; opacity: 1; }
          50% { height: 20px; y: 280px; opacity: 0.9; }
          60% { height: 28px; y: 272px; opacity: 0.8; }
          70% { height: 12px; y: 288px; opacity: 0.6; }
          80% { height: 18px; y: 282px; opacity: 0.7; }
          90% { height: 6px; y: 294px; opacity: 0.4; }
        }

        /* Subtle neon border animation (violet ↔ indigo) */
        @keyframes neonGlow {
          0%, 100% { border-color: #8b5cf6; box-shadow: 0 0 6px #8b5cf6, 0 0 12px #7c3aed; }
          50% { border-color: #7c3aed; box-shadow: 0 0 6px #7c3aed, 0 0 12px #8b5cf6; }
        }
        .animate-neon-border {
          animation: neonGlow 3s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default NewPodcastSection;
