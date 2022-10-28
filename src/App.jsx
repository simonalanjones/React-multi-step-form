import { useState } from 'react';
import Wizard from './components/Wizard';
import Progress from './components/Progress';
import FormSwitcher from './components/forms/elements/formSwitcher';

function App() {
  const [stepsData, setStepsData] = useState(null); // all the wizard steps
  const [stepNumber, setStepNumber] = useState(null);
  const [headings, setHeadings] = useState(null);

  const callbackForm = stepsData => {
    setStepsData(stepsData);
    let headings = [];
    stepsData.map(step => {
      headings.push(step.heading);
    });
    setHeadings(headings);
  };

  const callbackProgress = stepNumber => {
    setStepNumber(stepNumber);
  };

  return (
    <>
      <div className="container mx-auto max-w-screen-xl">
        {<FormSwitcher callBack={callbackForm} />}
        {stepsData && (
          <>
            <div className="bg-gray-100">
              <div className="flex flex-wrap justify-center md:flex-nowrap">
                <div className="w-48 min-w-fit text-white">
                  <Progress headings={headings} currentStep={stepNumber} />
                </div>

                <div className="flex-auto">
                  <Wizard
                    stepsData={stepsData}
                    progressCallback={callbackProgress}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default App;
