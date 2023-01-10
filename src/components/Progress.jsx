import {
  PreviousStep,
  FutureStep,
  CurrentStep,
  FinalStep,
  FinalStepActive,
  FinalStepSubmitted,
} from './ProgressStep';

const Progress = ({ headings, currentStep, isComplete, isSubmitted }) => {
  // currentStep is 0-x  (zero index based)
  const steps = headings.map((item, index) => {
    if (index < currentStep) {
      return <PreviousStep key={index} title={item} />;
    } else if (index === currentStep && !isComplete) {
      return <CurrentStep key={index} title={item} />;
    } else if (index === currentStep && isComplete) {
      return <PreviousStep key={index} title={item} />;
    } else if (index > currentStep) {
      return <FutureStep key={index} title={item} />;
    }
  });

  const finalStep = () => {
    if (!isComplete && !isSubmitted) {
      return <FinalStep key="finish" title="finish" />;
    } else if (isComplete && !isSubmitted) {
      return <FinalStepActive key="finish" title="finish" />;
    } else if (isComplete && isSubmitted) {
      return <FinalStepSubmitted key="finish" title="finish" />;
    }
  };

  return (
    <>
      {steps}
      {finalStep()}
    </>
  );
};

export default Progress;
