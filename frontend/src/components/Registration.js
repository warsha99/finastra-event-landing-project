import { useState } from 'react';
import axios from 'axios';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Use environment variable for API URL
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/register';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 second timeout
      });

      if (response.status === 201) {
        setSubmitted(true);
        // Optional: Reset form after submission
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      let errorMessage = 'Registration failed. Please try again later.';
      
      if (err.response) {
        // Server responded with error status
        errorMessage = err.response.data.error || 
                      `Server error: ${err.response.status}`;
      } else if (err.request) {
        // Request was made but no response
        errorMessage = 'Network error. Please check your connection.';
      }
      
      setError(errorMessage);
      console.error('Registration error:', {
        error: err,
        config: err.config,
        response: err.response
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (submitted) {
    return (
      <div className="p-4 max-w-md mx-auto">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Thank you for registering! We'll contact you soon.
        </div>
      </div>
    );
  }

  return (
    <section id="register" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-finastra-blue">
          Register Now
        </h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-finastra-blue"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-finastra-blue"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-finastra-blue"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-finastra-blue hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </section>
  );
}