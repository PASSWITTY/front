import  { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make API call to the backend
    try {
      const response = await fetch('http://52.200.203.32:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('API request error:', error);
      alert('oops. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      <label className="block text-sm font-semibold text-gray-600">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>
      <br />
      <label className="block mt-4 text-sm font-semibold text-gray-600">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>
      <br />
      <button
        type="submit"
        className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
