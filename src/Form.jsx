import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Wizard from './components/Wizard';
import Progress from './components/Progress';

const Form = () => {
  const [stepsData, setStepsData] = useState(null); // all the wizard steps
  const [stepNumber, setStepNumber] = useState(null);
  const [headings, setHeadings] = useState(null);
  const params = useParams();

  const callbackForm = stepsData => {
    setStepsData(stepsData);
    let headings = [];
    stepsData.map(step => {
      headings.push(step.heading);
    });
    setHeadings(headings);
    setIsSelecting(false);
  };

  async function fetchForm(filename) {
    const response = await fetch(`../src/configs/${filename}.json`);
    return await response.json();
  }

  useEffect(() => {
    fetchForm(params.id).then(formData => {
      console.log(formData);
      setStepsData(formData);
      let headings = [];
      formData.map(step => {
        headings.push(step.heading);
      });
      setHeadings(headings);
    });
  }, []);

  const callbackProgress = stepNumber => {
    setStepNumber(stepNumber);
  };

  const onSubmit = data => {
    console.log('you submitted', data);
  };

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="hidden bg-blue-800 py-4 sm:block"></div>

        <div className="flex flex-grow bg-slate-50 p-8">
          <div className="mx-auto flex w-screen max-w-4xl flex-col">
            <div className="flex-grow">
              {stepsData && (
                <div className="flex h-full justify-center">
                  <div className="w-64 py-12 lg:mr-16">
                    <Progress headings={headings} currentStep={stepNumber} />
                  </div>
                  <div className="w-full border bg-white">
                    <Wizard
                      stepsData={stepsData}
                      progressCallback={callbackProgress}
                      onSubmit={onSubmit}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="h-8 bg-slate-50 text-center">
          the footer. <span onClick={() => giveFeedback()}>Leave feedback</span>
        </div>
      </div>
    </>
  );
};

export default Form;
