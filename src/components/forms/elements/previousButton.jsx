import React from 'react';

const PreviousButton = React.forwardRef((props, ref) => {
	return (
		<button
			type="button"
			className="text-md mx-auto rounded bg-slate-500 px-4 pb-2.5 pt-2.5 text-white hover:bg-slate-600"
			onClick={props.onClick}
		>
			Previous
		</button>
	);
});

export default PreviousButton;
