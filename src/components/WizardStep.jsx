import { MemoizedContainer as Container } from './Container';

const WizardStep = ({ stepsData }) => {
	const step = stepsData.map((item, index) => {
		return <Container element={item} index={index} />;
	});

	return step;
};

export default WizardStep;
