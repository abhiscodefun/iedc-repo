import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const imageList = [
  {
    src: "/xylem_founder.png",
    name: "Ananthu S",
    title: "Founder - Xylem Learning",
  },
  {
    src: "/fl_founder.png",
    name: "Franklin Josemon",
    title: "Founder - Franklin Lectures",
  },
  {
    src: "/entri_founder.png",
    name: "Mohammed Nisham",
    title: "Founder - Entri Learning",
  },
];

export default function InspirationSection({ onJoinClick, onContactClick }) {
  const navigate = useNavigate();
  const CARD_W = 360;
  const CARD_H = 460;
  const inset = 4;
  const rx = 20;
  const rectW = CARD_W - inset * 2;
  const rectH = CARD_H - inset * 2;
  const perimeter = 2 * (rectW + rectH);

  const VISIBLE_DURATION = 6000;
  const FLIP_DURATION_MS = 1500;

  const [current, setCurrent] = useState(0);
  const [tracerHidden, setTracerHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTracerHidden(true);
      setCurrent((p) => (p + 1) % imageList.length);
      setTimeout(() => setTracerHidden(false), FLIP_DURATION_MS);
    }, VISIBLE_DURATION);
    return () => clearInterval(intervalRef.current);
  }, []);

  const PostIdeaButton = () => (
    <button
      onClick={() => navigate('/arise')}
      className="px-5 py-2 rounded-full font-semibold border-2 border-yellow text-white hover:bg-cyan-400/10 transition-colors duration-300"
    >
      Post Idea
    </button>
  );

  return (
    <div className="min-h-screen bg-[#070708] text-white relative">
      {/* Transparent Navbar */}
      <header className="relative bg-transparent text-white">
        <div className="w-full mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-white">
          {/* Left Logos */}
          <div className="text-black font-semibold text-base md:text-lg tracking-wide">
            IEDC ASET
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <img src="/aset_logo.png" alt="ASET" className="h-6 md:h-8 object-contain opacity-90" />
            <img src="/iedc_logo.jpg" alt="IEDC" className="h-8 md:h-10 object-contain opacity-90" />
          </div>

          {/* Center Title */}


          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="menu"
          >
            ☰
          </button>
        </div>

        {/* Sub-navbar */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-6 md:gap-10">
          <nav className="hidden md:flex items-center gap-8 text-gray-200 font-medium">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/events" className="hover:text-cyan-400 transition-colors">
              Events
            </Link>
            <button onClick={onContactClick} className="hover:text-cyan-400 transition-colors text-left">
              Contact
            </button>
          </nav>

          {/* Post Idea button */}
          <div className="flex items-center gap-4 ml-2">
            <div className="hidden md:inline-block">
              <PostIdeaButton />
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 py-3 flex flex-col gap-3 text-gray-100 bg-black/90 border-t border-white/10">
            <Link to="/" className="py-1 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/events" className="py-1 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
            <button onClick={() => { onContactClick(); setMenuOpen(false); }} className="py-1 hover:text-cyan-400 text-left">
              Contact
            </button>
            <div className="flex gap-3 mt-2">
              <PostIdeaButton />
            </div>
          </div>
        )}
      </header>

      {/* Main Section */}
      <main className="pt-4 md:pt-8 pb-4 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-[#111214] rounded-3xl p-6 md:p-12 shadow-[0_18px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* LEFT: Person Cards */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div
                  className="relative bg-black rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
                  style={{ 
                    width: `min(280px, 90vw, ${CARD_W}px)`, 
                    height: `min(${Math.round(280 * (CARD_H / CARD_W))}px, calc(90vw * ${CARD_H / CARD_W}), ${CARD_H}px)` 
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageList[current].src}
                      src={imageList[current].src}
                      alt={imageList[current].name}
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{
                        duration: FLIP_DURATION_MS / 1000,
                        ease: "easeInOut",
                      }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Neon Tracer Lines */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ opacity: tracerHidden ? 0 : 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <svg viewBox={`0 0 ${CARD_W} ${CARD_H}`} className="w-full h-full">
                      <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                          <stop offset="0%" stopColor="#00bfff" />
                          <stop offset="60%" stopColor="#a0e9ff" />
                          <stop offset="100%" stopColor="#fff6c2" />
                        </linearGradient>
                      </defs>
                      <rect
                        x={inset}
                        y={inset}
                        width={rectW}
                        height={rectH}
                        rx={rx}
                        ry={rx}
                        fill="none"
                        stroke="url(#g1)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={`${Math.round(perimeter * 0.12)} ${Math.round(
                          perimeter - perimeter * 0.12
                        )}`}
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          dur="6s"
                          repeatCount="indefinite"
                          values={`0; -${perimeter}`}
                        />
                      </rect>
                    </svg>
                  </motion.div>
                </div>

                {/* Name + Title */}
                <div className="mt-4 md:mt-6 text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={imageList[current].name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-white drop-shadow-[0_0_10px_rgba(196,181,253,0.18)]">
                        {imageList[current].name}
                      </h3>
                      <p className="text-gray-300 mt-1 text-xs md:text-sm">
                        {imageList[current].title}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* RIGHT: Motivation Text */}
            <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-4">
              <h1 className="text-3xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-violet-300 to-white drop-shadow-[0_0_12px_rgba(196,181,253,0.15)]">
                If they can,
                <br />
                You can too.
              </h1>
              <p className="text-gray-300 mt-4 md:mt-6 max-w-lg text-sm md:text-base">
                Join IEDC to connect with founders, learn from their journeys, and build your own idea.
              </p>

              <div className="mt-6 md:mt-8">
                <button 
                  onClick={onJoinClick}
                  className="px-6 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform text-sm md:text-base"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
