import { useState } from 'react';
import Wizard from './components/Wizard';
import Progress from './components/Progress';
import FormSwitcher from './components/forms/elements/formSwitcher';
import logo from './assets/axa-logo-0-2048x2048.png';
//import Layout from './components/Layout';
import FormSelector from './components/FormSelector';

function App() {
  const [stepsData, setStepsData] = useState(null); // all the wizard steps
  const [stepNumber, setStepNumber] = useState(null);
  const [headings, setHeadings] = useState(null);

  const [isSelecting, setIsSelecting] = useState(true);
  const [isUsingFeedback, setIsUsingFeedback] = useState(false);

  const giveFeedback = () => {};

  const callbackForm = stepsData => {
    setStepsData(stepsData);
    let headings = [];
    stepsData.map(step => {
      headings.push(step.heading);
    });
    setHeadings(headings);
    setIsSelecting(false);
  };

  const callbackProgress = stepNumber => {
    setStepNumber(stepNumber);
  };

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="hidden bg-blue-800 py-4 sm:block"></div>

        {isSelecting && <FormSelector callBack={callbackForm} />}

        {stepsData && !isSelecting && (
          <div className="flex flex-grow bg-slate-50 p-8">
            <div className="mx-auto flex w-screen max-w-4xl flex-col">
              <div className="flex-grow">
                <div className="flex h-full justify-center">
                  <div className="apx-6 w-64 py-12 lg:mr-16">
                    <Progress headings={headings} currentStep={stepNumber} />
                  </div>
                  <div className="w-full border bg-white">
                    <Wizard
                      stepsData={stepsData}
                      progressCallback={callbackProgress}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="h-8 bg-slate-50 text-center">
          {/* <img width="48" height="48" src={logo} alt="AXA logo" /> */}
          the footer
        </div>
      </div>
    </>
  );
}
export default App;
