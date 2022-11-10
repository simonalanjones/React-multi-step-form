import { useEffect, useState } from 'react';
import Wizard from './components/Wizard';

const Feedback = onSubmit => {
  const [stepsData, setStepsData] = useState(null);

  async function fetchForm() {
    const response = await fetch(`/src/configs/feedback.json`);
    return await response.json();
  }

  useEffect(() => {
    fetchForm().then(formData => {
      setStepsData(formData);
    });
  }, []);

  //   const onSubmit = values => {
  //     console.log('feedback returned with:', values);
  //   };

  return (
    stepsData && (
      <>
        <div className="flex h-screen flex-col">
          <div className="hidden bg-blue-800 py-4 sm:block"></div>

          <div className="flex flex-grow bg-slate-50 p-8">
            <div className="mx-auto flex w-screen max-w-4xl flex-col">
              <div className="mx-auto min-w-fit border bg-white">
                <Wizard stepsData={stepsData} onSubmit={onSubmit} />
              </div>
            </div>
          </div>

          <div className="h-8 bg-slate-50 text-center">
            the footer.{' '}
            <span onClick={() => giveFeedback()}>Leave feedback</span>
          </div>
        </div>
      </>
    )
  );
};

export default Feedback;
