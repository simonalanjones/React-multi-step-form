import React from 'react';

const NextButton = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      type="submit"
      className="text-md mx-auto rounded bg-blue-500 px-4 pb-2.5 pt-2.5 text-white hover:bg-blue-600"
    >
      Next
    </button>
  );
});

export default NextButton;
