import { useEffect, useState } from 'react';
import Wizard from './components/Wizard';

const Feedback = () => {
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

  // this is wrong, need a submit callback instead
  const callbackProgress = () => {
    console.log('progress callback');
  };

  // need a function callback to handle submit
  return (
    stepsData && (
      <>
        <div
          className="mx-auto 
         min-w-fit border bg-white"
        >
          <Wizard stepsData={stepsData} progressCallback={callbackProgress} />
        </div>
      </>
    )
  );
};

export default Feedback;
