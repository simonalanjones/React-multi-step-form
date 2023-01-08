import React from 'react';

const NextButton = ({ label = 'Next' }) => (
  <button
    type="submit"
    className="rounded-md border border-transparent bg-blue-700 
      py-2 px-4 text-sm font-medium leading-5 text-white shadow-sm
      focus:outline-none focus:ring-2 focus:ring-blue-700 
      focus:ring-offset-2 hover:bg-blue-800"
  >
    {label}
  </button>
);

export default NextButton;
