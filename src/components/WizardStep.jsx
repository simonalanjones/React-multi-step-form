import { MemoizedContainer as Container } from './Container';

const WizardStep = ({ stepsData }) => {
  console.log('wizard step rendering...', stepsData);
  //console.log('rendering...', stepsData);
  const step = stepsData.map((item, index) => {
    return <Container element={item} key={index} />;
  });

  return step;
};

export default WizardStep;
