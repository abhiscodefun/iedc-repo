import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const NewPodcastSection = () => {
  const videos = ["_ajLWLW1amQ", "lJ_8jTDQfH0"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % videos.length),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div className="relative flex flex-col justify-center items-center w-full bg-black p-8 pb-0">

      {/* Animated Gradient IDEAPOD text behind the card */}
      <div className="hidden md:flex absolute top-4 left-0 w-full z-[0] justify-center">
        <h1
          className="text-transparent font-extrabold uppercase tracking-wider drop-shadow-lg text-[clamp(3rem,15vw,15rem)] text-center"
          style={{
            background: "linear-gradient(90deg, #4f46e5, #ffffff, #4f46e5)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            animation: "gradientMove 5s linear infinite",
          }}
        >
          IDEAPOD
        </h1>
      </div>

      {/* Swipeable Card with Padding (on top of text) */}
      <div className="relative w-full max-w-2xl h-72 bg-black shadow-[0_0_20px_#FFFFFF] overflow-hidden p-4 z-[10] mt-40">
        {videos.map((videoId, index) => (
          <div
            key={videoId}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="w-full h-full p-4">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&autoplay=0&mute=0`}
                title={`YouTube video ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe Control Area */}
      <div
        {...swipeHandlers}
        className="flex justify-center items-center text-gray-300 text-sm select-none cursor-grab h-24 w-full mt-4"
      >
        &larr; Swipe here to traverse &rarr;
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default NewPodcastSection;
