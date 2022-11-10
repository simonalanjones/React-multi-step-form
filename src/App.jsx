import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { useState } from 'react';
import Wizard from './components/Wizard';
import Progress from './components/Progress';
import logo from './assets/axa-logo-0-2048x2048.png';
//import Feedback from './Feedback';
import MenuSelection from './MenuSelection';
//import FormCompletion from './Form';
import Form from './Form';
import Index from './components/routes/Index';
import Feedback from './components/routes/Feedback';

function App() {
  const [stepsData, setStepsData] = useState(null); // all the wizard steps
  const [stepNumber, setStepNumber] = useState(null);
  const [headings, setHeadings] = useState(null);

  const [isSelecting, setIsSelecting] = useState(true);
  const [isUsingFeedback, setIsUsingFeedback] = useState(false);
  const [isCompletingForm, setIsCompletingForm] = useState(false);

  const giveFeedback = () => {
    console.log('leave feedback');
    setIsUsingFeedback(true);
  };

  const onSubmit = values => {
    console.log('submit in App with values:', values);
  };

  const callbackSelectedForm = stepsData => {
    console.log(stepsData);
    // initiate a call to the FormCompletion component with stepsData = stepsData
    // or store it in state along with state for isCompletingForm
  };

  // const callbackForm = stepsData => {
  //   setStepsData(stepsData);
  //   let headings = [];
  //   stepsData.map(step => {
  //     headings.push(step.heading);
  //   });
  //   setHeadings(headings);
  //   setIsSelecting(false);
  // };

  const callbackProgress = stepNumber => {
    setStepNumber(stepNumber);
  };

  // have service to get teams/forms/ etc

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="team/:id" element={<Index />} />
          <Route path="form/:id" element={<Form />} />
        </Routes>
      </Router>
      {/* {isSelecting && !isUsingFeedback && (
        <MenuSelection callBack={callbackSelectedForm} />
      )}
      {isUsingFeedback && <Feedback onSubmit={onSubmit} />} */}

      {/* <div className="flex h-screen flex-col">
        <div className="hidden bg-blue-800 py-4 sm:block"></div>

        <div className="flex flex-grow bg-slate-50 p-8">
          <div className="mx-auto flex w-screen max-w-4xl flex-col">
            <div className="flex-grow">
              {stepsData && !isSelecting && (
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
      </div> */}
    </>
  );
}
export default App;
