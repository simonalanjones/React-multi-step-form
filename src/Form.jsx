import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Wizard from './components/Wizard';
import Progress from './components/Progress';
import FormView from './components/views/Form.view';

const Form = () => {
  const [stepsData, setStepsData] = useState(null); // all the wizard steps
  const [stepNumber, setStepNumber] = useState(null);
  const [headings, setHeadings] = useState(null);
  const [formTitle, setFormTitle] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  async function fetchForm(filename) {
    const response = await fetch(`../src/configs/${filename}.json`);
    return await response.json();
  }

  async function fetchData() {
    const response = await fetch('./../src/configs/index.json');
    return await response.json();
  }

  async function findElement() {}

  const getFilename = urlName =>
    fetchData()
      .then(formData => {
        return formData
          .find(product => product.forms.find(item => item.urlName === urlName))
          .forms.find(item => item.urlName === urlName);
      })
      .then(form => {
        console.log(form);
        setFormTitle(form.name);
        return form.file;
        //console.log('found:', element);
      })
      .catch(error => {
        console.log('error:', error);
      });

  useEffect(() => {
    const filename = getFilename(params.id).then(filename => {
      console.log(filename);
      fetchForm(filename).then(formData => {
        setStepsData(formData);
        let headings = [];
        formData.map(step => {
          headings.push(step.heading);
        });
        setHeadings(headings);
      });
    });
  }, []);

  const callbackProgress = stepNumber => {
    setStepNumber(stepNumber);
  };

  const onSubmit = data => {
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
            progressCallback={callbackProgress}
            onSubmit={onSubmit}
          />
        }
      />
    )
  );
};

export default Form;
