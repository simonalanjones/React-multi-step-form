import React from 'react';

const PreviousButton = React.forwardRef((props, ref) => {
  return (
    <button
      type="button"
      className="rounded-md border 
      border-gray-300 
      bg-white 
      py-2 px-3 
      text-sm font-medium leading-5 text-gray-700 
      shadow-sm 
      focus:outline-none 
      focus:ring-2 
      focus:ring-gray-500 
      focus:ring-offset-2 hover:bg-gray-50"
      onClick={props.onClick}
    >
      Previous
    </button>
  );
});

export default PreviousButton;
