import React from 'react';
import { useFormSubmission } from '../../hooks/useFormSubmission';

const JoinSection = () => {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxaNmM7-VwO5unwtRJYIfA_HT_ZEjizdvQ4qKnZzAzGRCzY-0hvcHOkEQ-fPiz0eeZ8/exec';
  const INITIAL_STATE = {
    NAME: '',
    YEAR: '',
    BRANCH: '',
    SECTION: '',
    'CONTACT NUMBER': '',
    'EMAIL ID': ''
  };

  const {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit,
  } = useFormSubmission(INITIAL_STATE, SCRIPT_URL);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl font-bold mb-8 text-center">Join the Voyage</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="NAME"
                placeholder="Name"
                value={formData.NAME}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />
              <select
                name="YEAR"
                value={formData.YEAR}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              >
                <option value="">Select Year</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
              </select>
              {/* Add other form fields */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center animate-fade-in-pop">
            <svg
              className="w-16 h-16 mx-auto text-green-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
            <p className="text-gray-600">You're officially on board. Welcome to the voyage!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinSection;
