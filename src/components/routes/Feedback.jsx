import { useEffect, useState } from 'react';
import FeedbackView from '../views/Feedback.view';
import Wizard from '../Wizard';

const Feedback = () => {
  const [stepsData, setStepsData] = useState(null);

  async function fetchForm() {
    const response = await fetch('../src/configs/feedback.json');
    return await response.json();
  }

  const onSubmit = () => {
    console.log('hit submit');
  };

  useEffect(() => {
    fetchForm().then(formData => {
      setStepsData(formData);
    });
  }, []);

  return (
    stepsData && (
      <FeedbackView>
        <Wizard stepsData={stepsData} onSubmit={onSubmit} />
      </FeedbackView>
    )
  );
};

export default Feedback;
