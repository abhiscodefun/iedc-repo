const ArisePage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-end items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-[#332702]">
      <div className="absolute top-0 w-full overflow-hidden z-[5]">
        <div className="flex" style={{width: '200%'}}>
          <span className="text bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text
                          text-[18rem] md:text-[30rem] font-bold select-none pointer-events-none leading-none flex-shrink-0 animate-first-text">
            ASPIRE
          </span>
          <span className="text bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text
                          text-[18rem] md:text-[30rem] font-bold select-none pointer-events-none leading-none flex-shrink-0 animate-second-text">
            ASPIRE
          </span>
        </div>
      </div>
      {/* Animated Perspective Grid */}
      <div
        className="absolute bottom-0 w-full h-[120vh] origin-bottom rotate-x-[70deg]
                      bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)]
                      bg-[size:60px_60px] animate-gridMove perspective-1000 z-0"
      ></div>

      {/* Glow Overlay for depth effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-[2]"></div>
      <div className="z-10 flex flex-col items-center gap-y-8 ">
        <input
          className="bg-gray-900 max-w-xl w-full text-gray-300 px-4 md:px-6 py-3 md:py-4 placeholder-gray-400 rounded-full
                     shadow-[0_0_30px_20px_#ffffff] focus:outline-red-500 text-sm md:text-base"
          placeholder="Describe your idea"
        />

        <div
          className="flex flex-col justify-center items-center gap-x-32 gap-y-8 p-4 md:p-8 w-full max-w-4xl
                        bg-gradient-to-r from-black to-[#00091a]/40 rounded-2xl backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row gap-x-32 gap-y-8 w-full">
            <div className="p-4 md:p-8 bg-transparent flex flex-col w-full md:w-auto">
              <input
                type="text"
                placeholder="Name"
                className="m-1 p-2 md:p-3 bg-transparent text-white border-b-2 border-blue-700 focus:outline-none text-sm md:text-base"
              />
              <input
                type="text"
                placeholder="College"
                className="m-1 p-2 md:p-3 bg-transparent text-white border-b-2 border-blue-700 focus:outline-none text-sm md:text-base"
              />
            </div>

            <div className="p-4 md:p-8 bg-transparent flex flex-col w-full md:w-auto">
              <input
                type="text"
                placeholder="Current Year"
                className="m-1 p-2 md:p-3 bg-transparent text-white border-b-2 border-blue-700 focus:outline-none text-sm md:text-base"
              />
              <input
                type="text"
                placeholder="Class"
                className="m-1 p-2 md:p-3 bg-transparent text-white border-b-2 border-blue-700 focus:outline-none text-sm md:text-base"
              />
            </div>
          </div>

          <button
            className="w-full md:w-48 bg-[#5B4FFF] p-2 md:p-3 rounded-2xl font-bold font-sans bg-gradient-to-r from-[#514DFF] via-black to-[#514DFF] hover:text-gray-200
                       text-base md:text-lg text-[#7C78E3]"
          >
            SUBMIT
          </button>
        </div>
      </div>


      {/* Custom Animation (inside Tailwind config or global CSS) */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 0 60px, 60px 0; }
        }
        .animate-gridMove {
          animation: gridMove 8s linear infinite;
        }
        @keyframes first-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes second-text {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-first-text {
          animation: first-text 8s linear infinite;
        }
        .animate-second-text {
          animation: second-text 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ArisePage;