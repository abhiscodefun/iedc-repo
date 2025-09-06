import React from 'react';
import { useFormSubmission } from '../hooks/useFormSubmission';

const TshirtPage = () => {
  const SCRIPT_URL = 'your-tshirt-form-script-url';
  const INITIAL_STATE = {
    NAME: '',
    BRANCH: '',
    SEMESTER: '',
    'CONTACT NUMBER': '',
    SIZE: '',
    ADDRESS: ''
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
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">T-Shirt Order Form</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="NAME"
                placeholder="Name"
                value={formData.NAME}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />
              {/* Add other form fields */}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-black text-white rounded"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Order'}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Order Submitted!</h3>
            <p>Thank you for your order. We'll contact you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TshirtPage;
