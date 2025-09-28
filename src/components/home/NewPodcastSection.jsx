import React from 'react';

const NewPodcastSection = () => {
  return (
    <div className="bg-gray-100 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
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
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/_ajLWLW1amQ?si=O7gx_JEL6qkdAn6X"
                  title="IEDC Podcast"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
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
        .animate-border-glow {
          animation: border-glow 3s ease-in-out infinite;
        }

        @keyframes border-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3), 0 0 10px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default NewPodcastSection;