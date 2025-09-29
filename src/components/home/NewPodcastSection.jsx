import React from 'react';

const NewPodcastSection = () => {
  return (
    <div className="bg-gray-900 py-12 sm:py-16 relative overflow-hidden">
      {/* Background Audio Beats Animation - Tall and Narrow */}
      <div className="absolute inset-0 flex justify-center items-center opacity-60">
        <svg className="w-6 h-full" viewBox="0 0 24 600" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="beatsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
              <stop offset="20%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#1E40AF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <g className="audio-beats-vertical">
            {/* Vertical audio bars spanning full height */}
            {Array.from({ length: 30 }, (_, i) => (
              <rect
                key={`beat-${i}`}
                x="6"
                y={i * 20}
                width="12"
                height="10"
                fill="url(#beatsGradient)"
                className={`animate-beat-vertical-${(i % 5) + 1}`}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-2xl p-8 shadow-2xl relative">
          {/* Header with episode number */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-8">
            <div className="text-center sm:text-left">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-purple-600 mb-2">
                IDEAPOD!
              </h1>
              <p className="text-xl sm:text-2xl font-light text-gray-600 italic">
                your weekly pump of startup stories
              </p>
            </div>

            {/* Episode number */}
            <div className="text-center sm:text-left mt-4 sm:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Episode #1</h2>
            </div>
          </div>

          {/* YouTube embed and description */}
          <div className="flex flex-col lg:flex-row gap-8 items-start relative">
            {/* YouTube embed */}
            <div className="w-full lg:w-2/3">
              <div className="relative aspect-video overflow-hidden shadow-lg" style={{ margin: 0, padding: 0 }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/_ajLWLW1amQ?si=O7gx_JEL6qkdAn6X"
                  title="IEDC Podcast"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ margin: 0, border: 'none' }}
                ></iframe>
              </div>
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/3 flex flex-col justify-between h-full">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Get to know about startup, business and IEDC through IDEAPOD! An introduction to the epitome of ideas.
              </p>

              {/* Spotify link at bottom */}
              <div className="mt-auto pt-4">
                <a
                  href="https://open.spotify.com/show/2jQ8WwxwUbaWDvWbmAdK5d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-light text-base"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 16.859c-.217.257-.479.411-.826.411-.558 0-.999-.439-.999-.999 0-.558.441-.999.999-.999.347 0 .609.154.826.411.685.821.685 1.927 0 2.748zM16.638 13.847c-.265.318-.61.494-.985.494-.776 0-1.404-.628-1.404-1.404s.628-1.404 1.404-1.404c.375 0 .72.176.985.494.888 1.064.888 2.346 0 3.41zM19.708 10.835c-.318.381-.735.573-1.143.573-1.095 0-1.984-.889-1.984-1.984s.889-1.984 1.984-1.984c.408 0 .825.192 1.143.573 1.091 1.306 1.091 2.876 0 4.182z"/>
                  </svg>
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          0%, 100% {
            height: 4px;
            y: 296px;
            opacity: 0.3;
          }
          10% {
            height: 8px;
            y: 292px;
            opacity: 0.4;
          }
          20% {
            height: 16px;
            y: 284px;
            opacity: 0.6;
          }
          30% {
            height: 24px;
            y: 276px;
            opacity: 0.8;
          }
          40% {
            height: 32px;
            y: 268px;
            opacity: 1;
          }
          50% {
            height: 20px;
            y: 280px;
            opacity: 0.9;
          }
          60% {
            height: 28px;
            y: 272px;
            opacity: 0.8;
          }
          70% {
            height: 12px;
            y: 288px;
            opacity: 0.6;
          }
          80% {
            height: 18px;
            y: 282px;
            opacity: 0.7;
          }
          90% {
            height: 6px;
            y: 294px;
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default NewPodcastSection;