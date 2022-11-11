import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//import { useState } from 'react';
//import logo from './assets/axa-logo-0-2048x2048.png';

import Form from './Form';
import Index from './components/routes/Index';
import Feedback from './components/routes/Feedback';
import IndexLayout from './components/views/layouts/IndexLayout';

function App() {
  const onSubmit = values => {
    console.log('submit in App with values:', values);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route element={<IndexLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="team/:id" element={<Index />} />
            <Route path="form/:id" element={<Form />} />
          </Route>
        </Routes>
      </Router>

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
