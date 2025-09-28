import React from 'react';

const RedesignedPodcastSection = () => {
  return (
    <div className="bg-whitesmoke py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Violet container with ticket-like design */}
        <div className="relative bg-violet-600 rounded-3xl p-8 shadow-2xl overflow-hidden">
          {/* Ticket-like perforated edges */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-whitesmoke rounded-full"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-whitesmoke rounded-full"></div>

          {/* Top text section - positioned at borders */}
          <div className="relative mb-8">
            <h1 className="absolute top-0 left-0 text-5xl font-extrabold text-white">IDEAPOD!</h1>
            <p className="absolute top-0 right-0 text-xl font-semibold text-yellow-300">the weekly pump of startup stories</p>
          </div>

          {/* Main content area */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* YouTube embed - majority width */}
            <div className="w-full lg:w-3/5">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/2T25BBJ3mAg"
                  title="IEDC Podcast"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Description section */}
            <div className="w-full lg:w-2/5 flex flex-col justify-between relative">
              <p className="text-sm leading-relaxed text-white max-w-xs pr-24">
                Dive into inspiring conversations with entrepreneurs, innovators, and thought leaders from the startup ecosystem. Join us as we explore the latest trends in entrepreneurship, technology, and innovation.
              </p>

              {/* Episode number as 70% wide rectangle */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[70%]">
                <div className="bg-yellow-400 text-violet-900 font-extrabold text-2xl py-4 px-6 rounded-xl shadow-lg text-center">
                  EPISODE 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesignedPodcastSection;