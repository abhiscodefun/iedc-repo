import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const loadYouTubeAPI = () => {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

const NewPodcastSection = () => {
  React.useEffect(() => {
    loadYouTubeAPI();
  }, []);

  const videos = ["_ajLWLW1amQ", "lJ_8jTDQfH0"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayerStateChange = (event) => {
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
      {/* Background */}
      <div className="absolute inset-0 bg-[url(PodcastSection_bg.png)] bg-cover bg-center opacity-20"></div>

      {/* Heading */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
          IDEAPOD
        </h2>
      </div>

      {/* Video Card */}
      <div className="relative w-full max-w-4xl bg-[#0A0A1F]/90 rounded-2xl overflow-hidden z-10 shadow-lg border border-[#1E1E3A]">
        {/* Video Container */}
        <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
          {videos.map((videoId, index) => (
            <div
              key={videoId}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&autoplay=0&mute=0&enablejsapi=1`}
                title={`YouTube video ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                onLoad={(e) => {
                  if (window.YT) {
                    new window.YT.Player(e.target, {
                      events: {
                        onStateChange: handlePlayerStateChange,
                      },
                    });
                  }
                }}
              ></iframe>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div
          {...swipeHandlers}
          className={`flex items-center justify-between px-8 py-4 bg-[#141426] transition-opacity duration-300 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
            }
            className="text-white text-3xl font-bold hover:scale-110 transition-transform"
          >
            ◀
          </button>

          <div className="text-gray-400 text-sm tracking-wider">
            {currentIndex + 1}/{videos.length}
          </div>

          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % videos.length)
            }
            className="text-white text-3xl font-bold hover:scale-110 transition-transform"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-center mt-10 px-4 max-w-xl mx-auto">
        <p className="text-gray-300 text-lg sm:text-xl font-semibold">
          Our Innovation Podcast Series
        </p>
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          Exploring ideas, innovation, and entrepreneurship
        </p>
      </div>
    </div>
  );
};

export default NewPodcastSection;
