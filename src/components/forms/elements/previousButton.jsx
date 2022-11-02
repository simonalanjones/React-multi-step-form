import React from 'react';

const PreviousButton = React.forwardRef((props, ref) => {
  return (
    <button
      type="button"
      className="inline-flex justify-center rounded-md border border-gray-300 bg-gray-200 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={props.onClick}
    >
      Previous
    </button>
  );
});

export default PreviousButton;
