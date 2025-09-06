import { useState } from 'react';

export const useFormSubmission = (initialState, scriptURL) => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: form });
      // Note: Google Scripts often return a redirect, so checking response.ok might not work as expected.
      // We'll assume success if the fetch doesn't throw an error.
      setIsSubmitted(true);
      setFormData(initialState); // Reset form on success
    } catch (err) {
      console.error('Google Sheets API Error!', err.message);
      setError('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit,
  };
};
