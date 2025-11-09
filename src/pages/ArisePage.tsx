import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitIdea } from "../utils/supabase";

const ArisePage = () => {
  // State for form inputs
  const [idea, setIdea] = useState("");
  const [ideaTitle, setIdeaTitle] = useState("");
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [className, setClassName] = useState("");
  const [loading, setLoading] = useState(false);

  const jitter = {
    whileFocus: {
      x: [0, -3, 3, -3, 3, 0],
      transition: { duration: 0.4 },
    },
  };

  const handleSubmit = async () => {
    // Validation according to SQL schema:
    // Required (NOT NULL): idea, name, college, year
    // Optional (nullable): class
    if (!idea || !name || !college || !year) {
      alert("Please fill all required fields: Idea, Name, College, and Year");
      return;
    }

    setLoading(true);
    try {
      // Map form fields to database columns according to SQL schema:
      // - idea (TEXT NOT NULL): combine ideaTitle and idea if title exists
      // - name (TEXT NOT NULL): direct mapping
      // - college (TEXT NOT NULL): direct mapping
      // - year (TEXT NOT NULL): direct mapping
      // - class (TEXT, nullable): optional, map from className
      const ideaData = {
        idea: ideaTitle ? `${ideaTitle}\n\n${idea}` : idea,
        name: name.trim(),
        college: college.trim(),
        year: year.trim(),
        className: className.trim() // class is nullable in SQL, handled in supabase.js
      };

      const result = await submitIdea(ideaData);

      if (result.success) {
        alert("Idea successfully stored in database! ✅");
        setIdea("");
        setIdeaTitle("");
        setName("");
        setCollege("");
        setYear("");
        setClassName("");
      } else {
        // Show detailed error message
        const errorMsg = result.error || "Failed to store idea in database.";
        alert(`Error: ${errorMsg}\n\nCheck the console for more details.`);
        console.error("Submission error details:", result.errorDetails);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert(`Error: ${err.message || "An unexpected error occurred. Please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col justify-between min-h-screen bg-gradient-to-br 
      from-[#000000] via-[#050505] to-[#0a0a0a] relative overflow-hidden text-gray-200"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* PERSON IMAGE (hidden on mobile) */}
      <motion.img
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="hidden md:block absolute bottom-[35vh] left-1/2 -translate-x-1/2 
        md:left-auto md:right-[15vw] max-h-[60vh] z-0 select-none"
        src="/tovino.png"
        alt="person"
      />

      {/* HEADING */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.9, duration: 1, ease: "easeOut" }}
        className="z-20"
      >
        {/* Desktop heading */}
        <h1
          style={{
            fontFamily: "Impact, Haettenschweiler, 'Arial Black', sans-serif",
            letterSpacing: "3px",
          }}
          className="hidden md:block absolute top-16 left-[6vw] text-7xl lg:text-9xl font-extrabold 
          bg-gradient-to-r from-gray-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent 
          drop-shadow-[0_0_25px_rgba(0,0,0,0.8)] leading-tight"
        >
          YOUR IDEAS<br />MATTER
        </h1>

        {/* Mobile heading */}
        <div className="md:hidden mt-20 text-center px-4">
          <h1
            style={{
              fontFamily: "Impact, Haettenschweiler, 'Arial Black', sans-serif",
              letterSpacing: "2px",
            }}
            className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r 
            from-gray-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent 
            drop-shadow-[0_0_25px_rgba(0,0,0,0.8)] leading-tight"
          >
            YOUR IDEAS<br />MATTER
          </h1>
        </div>
      </motion.div>

      {/* ===== DESKTOP SECTION ===== */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-end absolute bottom-0 w-full px-8 md:px-16 gap-8 z-10">
        {/* Left Form */}
        <div className="flex flex-col gap-6 w-full md:w-[35vw] text-sm text-gray-300 mb-6 p-6 bg-[#0a0a0a]/85 rounded-3xl border border-gray-800 shadow-[0_0_25px_-5px_rgba(0,255,255,0.1)]">
          {/* First pair: Name, College */}
          <div className="flex justify-between gap-4">
            <motion.div
              className="flex-1 rounded-full transition-all duration-300 focus-within:p-[1px] 
              focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400"
            >
              <motion.input
                whileFocus="whileFocus"
                variants={jitter}
                className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
                focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>

            <motion.div
              className="flex-1 rounded-full transition-all duration-300 focus-within:p-[1px] 
              focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400"
            >
              <motion.input
                whileFocus="whileFocus"
                variants={jitter}
                className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
                focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
                placeholder="College"
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </motion.div>
          </div>

          {/* Second pair: Year, Class */}
          <div className="flex justify-between gap-4">
            <motion.div
              className="flex-1 rounded-full transition-all duration-300 focus-within:p-[1px] 
              focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400"
            >
              <motion.input
                whileFocus="whileFocus"
                variants={jitter}
                className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
                focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
                placeholder="Year"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </motion.div>

            <motion.div
              className="flex-1 rounded-full transition-all duration-300 focus-within:p-[1px] 
              focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400"
            >
              <motion.input
                whileFocus="whileFocus"
                variants={jitter}
                className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
                focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
                placeholder="Class (Optional)"
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
            </motion.div>
          </div>

          {/* Third pair: Optional/Placeholder - keeping visual consistency */}
          <div className="flex justify-between gap-4">
            <motion.div
              className="flex-1 rounded-full transition-all duration-300 focus-within:p-[1px] 
              focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400 opacity-50"
            >
              <motion.input
                whileFocus="whileFocus"
                variants={jitter}
                className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
                focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
                placeholder="Optional"
                type="text"
                disabled
              />
            </motion.div>

            <motion.div
              className="flex-1 rounded-full transition-all duration-300 focus-within:p-[1px] 
              focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400 opacity-50"
            >
              <motion.input
                whileFocus="whileFocus"
                variants={jitter}
                className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
                focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
                placeholder="Optional"
                type="text"
                disabled
              />
            </motion.div>
          </div>
        </div>

        {/* Right Idea Box */}
        <div className="relative w-full md:w-[50vw] bg-[#111] rounded-t-3xl rounded-b-none p-6 pb-0 z-10 shadow-[0_0_50px_-5px_theme(colors.blue.300)] border border-gray-800">
          <input
            className="w-full mb-4 bg-[#1b1b1b] border border-gray-800 rounded-full px-6 py-3 text-gray-100 
            text-base focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
            placeholder="Enter idea title..."
            type="text"
            value={ideaTitle}
            onChange={(e) => setIdeaTitle(e.target.value)}
          />
          <div className="relative w-full h-[35vh]">
            <textarea
              className="w-full h-full bg-[#1b1b1b] border border-gray-800 rounded-t-3xl rounded-b-none 
              p-8 text-gray-100 text-lg resize-none focus:outline-none focus:ring-1 focus:ring-yellow-100 
              placeholder-gray-400"
              placeholder="Describe your idea here..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <button
              className="absolute bottom-4 right-6 bg-white text-[#222] font-bold px-6 py-2 rounded-full 
              border border-green-400 shadow-[0_0_10px_1px_rgba(0,255,0,0.15)] 
              focus:outline-none hover:border-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE STACKED SECTION ===== */}
      <div className="flex flex-col md:hidden items-center w-full px-4 mt-10 gap-6 z-10">
        {/* Form Section */}
        <div className="flex flex-col gap-4 w-full text-sm text-gray-300 p-5 bg-[#121212]/90 rounded-3xl border border-gray-800 shadow-[0_0_25px_-5px_rgba(0,255,255,0.1)]">
          <motion.div
            className="rounded-full transition-all duration-300 focus-within:p-[1px] 
            focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400"
          >
            <motion.input
              whileFocus="whileFocus"
              variants={jitter}
              className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
              focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="rounded-full transition-all duration-300 focus-within:p-[1px] 
            focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400"
          >
            <motion.input
              whileFocus="whileFocus"
              variants={jitter}
              className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
              focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
              placeholder="College"
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="rounded-full transition-all duration-300 focus-within:p-[1px] 
            focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400"
          >
            <motion.input
              whileFocus="whileFocus"
              variants={jitter}
              className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
              focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
              placeholder="Year"
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="rounded-full transition-all duration-300 focus-within:p-[1px] 
            focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-red-500 focus-within:to-orange-400"
          >
            <motion.input
              whileFocus="whileFocus"
              variants={jitter}
              className="w-full bg-[#1b1b1b] border border-transparent p-3 pl-5 rounded-full 
              focus:outline-none text-gray-100 placeholder-gray-400 transition-all"
              placeholder="Class (Optional)"
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </motion.div>
        </div>

        {/* Idea Section */}
        <div className="relative w-full bg-[#111] rounded-t-3xl rounded-b-none p-5 pb-0 border border-gray-800 shadow-[0_0_20px_-10px_rgba(0,255,255,0.2)]">
          <input
            className="w-full mb-4 bg-[#1b1b1b] border border-gray-800 rounded-full px-5 py-3 
            text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
            placeholder="Enter idea title..."
            type="text"
            value={ideaTitle}
            onChange={(e) => setIdeaTitle(e.target.value)}
          />
          <div className="relative w-full h-[30vh]">
            <textarea
              className="w-full h-full bg-[#1b1b1b] border border-gray-800 rounded-t-3xl rounded-b-none 
              p-6 text-gray-100 text-base resize-none focus:outline-none focus:ring-1 focus:ring-yellow-100 
              placeholder-gray-400"
              placeholder="Describe your idea here..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <button
              className="absolute bottom-4 right-4 bg-white text-[#222] font-bold px-6 py-2 rounded-full 
              border border-green-400 shadow-[0_0_10px_1px_rgba(0,255,0,0.15)] 
              focus:outline-none hover:border-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArisePage;
