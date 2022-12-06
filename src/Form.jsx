import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Wizard from './components/Wizard';
import Progress from './components/Progress';
import FormView from './components/views/Form.view';
import useForm from './components/hooks/useForm';

const Form = () => {
  const [stepNumber, setStepNumber] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { stepsData, headings, formTitle } = useForm(params.id);

  const onStepChange = (stepNumber) => {
    setStepNumber(stepNumber);
  };

  const onSubmit = (data) => {
    console.log('you submitted', data);
  };

  const onChangeForm = () => {
    console.log('change requested');
    navigate('/');
  };

  return (
    stepsData && (
      <FormView
        title={formTitle}
        onChangeHandler={onChangeForm}
        progress={<Progress headings={headings} currentStep={stepNumber} />}
        wizard={
          <Wizard
            stepsData={stepsData}
            progressCallback={onStepChange}
            onSubmit={onSubmit}
          />
        }
      />
    )
  );
};

export default Form;
