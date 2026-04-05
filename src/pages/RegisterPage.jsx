import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const SectionTitle = ({ title }) => (
  <div className="text-center">
    <div className="relative inline-block pb-4">
      <h3 className="text-4xl sm:text-5xl font-bold text-white">{title}</h3>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-violet-300 rounded-full"></div>
    </div>
  </div>
);

const RegisterPage = () => {
  const [formData, setFormData] = useState({ NAME: '', YEAR: '', BRANCH: '', SECTION: '', 'CONTACT NUMBER': '', 'EMAIL ID': '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxaNmM7-VwO5unwtRJYIfA_HT_ZEjizdvQ4qKnZzAzGRCzY-0hvcHOkEQ-fPiz0eeZ8/exec';
    const form = new FormData();
    for (const key in formData) { form.append(key, formData[key]); }
    fetch(scriptURL, { method: 'POST', body: form })
      .catch(error => console.error('Google Sheets API Error!', error.message));
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ NAME: '', YEAR: '', BRANCH: '', SECTION: '', 'CONTACT NUMBER': '', 'EMAIL ID': '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#111111] font-sans overflow-hidden" style={{ fontFamily: "'Inter', 'Roboto', 'Segoe UI', -apple-system, sans-serif" }}>
      <style>
        {`
          @keyframes scroll-seamless {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-seamless {
            display: flex;
            white-space: nowrap;
            width: max-content;
            animation: scroll-seamless 90s linear infinite;
          }
        `}
      </style>
      <div className="bg-[#f9fafb] border-b border-gray-800 py-3 relative z-50 flex items-center overflow-hidden w-full">
        <div className="animate-scroll-seamless">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mx-6 text-red-500 font-medium text-[16px] tracking-wide">
              Execom members selection coming soon !
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 sm:py-14 mt-4">
        <div className="bg-[#141414] p-8 md:p-12 rounded-xl shadow-[0_18px_50px_rgba(0,0,0,0.6)] border border-gray-800 min-h-[550px] flex flex-col items-center justify-center">
          {!isSubmitted ? (
            <>
              <SectionTitle title="Register as a member" />
              <form onSubmit={handleSubmit} className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="NAME" placeholder="Name" value={formData.NAME} onChange={handleChange} required className="p-4 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:border-violet-300 focus:bg-gray-800 outline-none transition placeholder-gray-500" />
                <input type="text" name="YEAR" placeholder="Year" value={formData.YEAR} onChange={handleChange} required className="p-4 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:border-violet-300 focus:bg-gray-800 outline-none transition placeholder-gray-500" />
                <input type="text" name="BRANCH" placeholder="Branch" value={formData.BRANCH} onChange={handleChange} required className="p-4 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:border-violet-300 focus:bg-gray-800 outline-none transition placeholder-gray-500" />
                <input type="text" name="SECTION" placeholder="Section" value={formData.SECTION} onChange={handleChange} className="p-4 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:border-violet-300 focus:bg-gray-800 outline-none transition placeholder-gray-500" />
                <div className="md:col-span-2"><input type="tel" name="CONTACT NUMBER" placeholder="Contact Number" value={formData['CONTACT NUMBER']} onChange={handleChange} required className="w-full p-4 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:border-violet-300 focus:bg-gray-800 outline-none transition placeholder-gray-500" /></div>
                <div className="md:col-span-2"><input type="email" name="EMAIL ID" placeholder="Email ID" value={formData['EMAIL ID']} onChange={handleChange} required className="w-full p-4 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:border-violet-300 focus:bg-gray-800 outline-none transition placeholder-gray-500" /></div>
                <div className="md:col-span-2 text-center mt-4">
                  <button type="submit" disabled={isSubmitting} className="bg-violet-300 text-black font-bold py-4 px-12 rounded-full hover:bg-violet-200 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center animate-[fade-in-pop_0.6s_ease-out_forwards]">
              <svg className="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="mt-6 text-3xl font-bold text-white">Congratulations!</h3>
              <p className="mt-3 text-lg text-gray-300">You're officially on board. Welcome to the voyage!</p>
              <p className="mt-1 text-gray-400">We'll be in touch with you shortly.</p>
              <button onClick={() => navigate('/')} className="mt-8 bg-violet-300 text-black font-bold py-3 px-8 rounded-full hover:bg-violet-200 transition-colors">
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#111111]">
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;
