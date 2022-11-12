import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Wizard from './components/Wizard';
import Progress from './components/Progress';
import FormView from './components/views/Form.view';

const Form = () => {
  const [stepsData, setStepsData] = useState(null); // all the wizard steps
  const [stepNumber, setStepNumber] = useState(null);
  const [headings, setHeadings] = useState(null);
  const params = useParams();

  async function fetchForm(filename) {
    const response = await fetch(`../src/configs/${filename}.json`);
    return await response.json();
  }

  async function fetchData() {
    const response = await fetch('./../src/configs/index.json');
    return await response.json();
  }

  async function findElement() {}

  useEffect(() => {
    //console.log(params.id);

    const found = fetchData()
      .then(formData => {
        formData.map(element => {
          return element.forms.find(element => element.urlName === params.id);
        });
      })
      .then(element => {
        console.log(element);
      });

    //const team = teams.find(element => element.team.urlName === params.urlName);

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
    stepsData && (
      <FormView
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
