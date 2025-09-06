import React from 'react';
import { useFormSubmission } from '../../hooks/useFormSubmission';

const EventRegistrationPopup = ({ event, onClose }) => {
  const SCRIPT_URL = 'your-event-registration-form-url';
  const INITIAL_STATE = {
    NAME: '',
    BRANCH: '',
    SEMESTER: '',
    'CONTACT NUMBER': '',
    'EMAIL': '',
    'EVENT': event.title
  };

  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
  } = useFormSubmission(INITIAL_STATE, SCRIPT_URL);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-6">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          
          {!isSubmitted ? (
            <>
              <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="NAME"
                  placeholder="Name"
                  value={formData.NAME}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded"
                />
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Email"
                  value={formData.EMAIL}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded"
                />
                <input
                  type="tel"
                  name="CONTACT NUMBER"
                  placeholder="Contact Number"
                  value={formData['CONTACT NUMBER']}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded"
                />
                <select
                  name="BRANCH"
                  value={formData.BRANCH}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="ME">ME</option>
                  <option value="CE">CE</option>
                </select>
                <select
                  name="SEMESTER"
                  value={formData.SEMESTER}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded"
                >
                  <option value="">Select Semester</option>
                  {[1,2,3,4,5,6,7,8].map(sem => (
                    <option key={sem} value={sem}>S{sem}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Register Now'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
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
              <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
              <p className="text-gray-600">We'll contact you with further details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationPopup;
