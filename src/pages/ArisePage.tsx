import React, { useState } from "react";

const ArisePage = () => {
  // State for form inputs
  const [idea, setIdea] = useState("");
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [className, setClassName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!idea || !name || !college || !year || !className) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/.netlify/functions/sendIdea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea, name, college, year, className }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Idea sent to WhatsApp group! ✅");
        setIdea("");
        setName("");
        setCollege("");
        setYear("");
        setClassName("");
      } else {
        alert("Failed to send idea.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending idea.");
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-end items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-[#332702]">
      {/* Scrolling Big Text */}
      <div className="absolute top-0 w-full overflow-hidden z-[5]">
        <div className="flex" style={{ width: "200%" }}>
          <span
            className="text bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text
              text-[10rem] sm:text-[14rem] md:text-[20rem] lg:text-[30rem] xl:text-[35rem] font-bold select-none pointer-events-none leading-none
              flex-shrink-0 animate-first-text lg:animate-pulse xl:animate-pulse"
          >
            ARISE
          </span>
          <span
            className="text bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text
              text-[10rem] sm:text-[14rem] md:text-[20rem] lg:text-[30rem] xl:text-[35rem] font-bold select-none pointer-events-none leading-none
              flex-shrink-0 animate-second-text lg:animate-pulse xl:animate-pulse"
          >
            ARISE
          </span>
        </div>
      </div>

      {/* Animated Perspective Grid */}
      <div
        className="absolute bottom-0 w-full h-[120vh] origin-bottom rotate-x-[70deg]
        bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)]
        bg-[size:60px_60px] animate-gridMove perspective-1000 z-0"
      ></div>

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-[2]"></div>

      {/* Input Form */}
      <div className="z-10 flex flex-col items-center gap-y-8 w-full px-4 sm:px-8">
        <textarea
          className="bg-gray-900 w-full max-w-4xl text-gray-300 px-4 md:px-6 py-3 md:py-4 placeholder-gray-400 rounded-2xl
          shadow-[0_0_30px_20px_#ffffff] focus:outline-red-500 text-sm md:text-base resize-none overflow-hidden
          min-h-[60px] max-h-[300px]"
          placeholder="Describe your idea in detail..."
          value={idea}
          onChange={(e) => {
            setIdea(e.target.value);
            // Auto-resize textarea
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}
          rows={3}
          style={{ minHeight: '60px' }}
        />

        <div
          className="flex flex-col justify-center items-center gap-x-32 gap-y-8 p-4 md:p-8 w-full max-w-4xl
          bg-gradient-to-r from-black to-[#00091a]/40 rounded-2xl backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row gap-x-32 gap-y-8 w-full">
            <div className="p-4 md:p-8 bg-transparent flex flex-col w-full">
              <input
                type="text"
                placeholder="Name"
                className="m-1 p-2 md:p-3 bg-transparent text-white border-b-2 border-blue-700 focus:outline-none text-sm md:text-base w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="College"
                className="m-1 p-2 md:p-3 bg-transparent text-white border-b-2 border-blue-700 focus:outline-none text-sm md:text-base w-full"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>

            <div className="p-4 md:p-8 bg-transparent flex flex-col w-full">
              <input
                type="text"
                placeholder="Current Year"
                className="m-1 p-2 md:p-3 bg-transparent text-white border-b-2 border-blue-700 focus:outline-none text-sm md:text-base w-full"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <input
                type="text"
                placeholder="Class"
                className="m-1 p-2 md:p-3 bg-transparent text-white border-b-2 border-blue-700 focus:outline-none text-sm md:text-base w-full"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
            </div>
          </div>

          <button
            className="w-full md:w-48 bg-[#5B4FFF] p-2 md:p-3 rounded-2xl font-bold font-sans
            bg-gradient-to-r from-[#514DFF] via-black to-[#514DFF] hover:text-gray-200
            text-base md:text-lg text-[#7C78E3]"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 0 60px, 60px 0; }
        }
        .animate-gridMove {
          animation: gridMove 8s linear infinite;
        }

        /* Pulse/Breathing animation for larger screens */
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6); }
        }

        /* Horizontal scroll animations for smaller screens */
        @keyframes first-text {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes second-text {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-200%); }
        }

        /* Mobile and tablet - horizontal scroll */
        @media (max-width: 1023px) {
          .animate-first-text {
            animation: first-text 8s linear infinite;
          }
          .animate-second-text {
            animation: second-text 8s linear infinite;
          }
        }

        /* Desktop and larger - pulse/breathing effect */
        @media (min-width: 1024px) {
          .animate-pulse {
            animation: breathe 3s ease-in-out infinite, pulse-glow 2s ease-in-out infinite alternate !important;
          }
        }

        /* Textarea auto-resize */
        .auto-resize-textarea {
          min-height: 60px;
          max-height: 300px;
          resize: none;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ArisePage;
