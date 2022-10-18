import { ProgressStep as Step } from './ProgressStep';

const Progress = ({ headings, currentStep }) => {
	// currentStep is 0-x  (zero index based)
	return (
		<>
			{headings.map((item, index) => (
				<Step
					title={item}
					key={index}
					selected={currentStep === index ? true : false}
					previous={index < currentStep ? true : false}
					current={index + 1 === currentStep + 1}
					lastStep={false}
				/>
			))}
			<Step
				title={'finish'}
				key={headings.length}
				lastStep={true}
				selected={false}
				previous={false}
				current={false}
			/>
		</>
	);
};

export default Progress;
