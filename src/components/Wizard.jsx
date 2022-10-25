import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { createYupSchema } from '../yupSchemaCreator';
import NextButton from './forms/elements/nextButton';
import PreviousButton from './forms/elements/previousButton';
//import Progress from './Progress';
import WizardStep from './WizardStep';
import { Debug } from './Debug';

function Wizard({ stepsData }) {
  console.log('wizard incoming....', stepsData);
  // const stepsData = config;
  const [stepNumber, setStepNumber] = useState(); // the wizard step (0-X)
  const [formConfig, setFormConfig] = useState(null); // the current form elements for the step
  const [snapshot, setSnapshot] = useState({}); // all form fields and values as flattened array

  //setStepsData(config);
  // ** CHANGE IN FORM SELECTION **
  useEffect(() => {
    if (stepsData.length > 0) {
      console.log('stepsData.length checked...');
      const result = stepsData.map(function (sub) {
        return sub.items.flat();
      });

      let initialValues = {};
      result.flat().map(element => {
        initialValues[element.id] = '';
      });

      setSnapshot(initialValues);
      setStepNumber(0);
      setFormConfig(stepsData[0].items);
    } else {
      console.log('wrong data passed to wizard');
    }
  }, [stepsData]);

  // update form when stepNumber changes
  useEffect(() => {
    if (Number.isInteger(stepNumber)) {
      console.log('change to stepNumber');
      setFormConfig(stepsData[stepNumber].items);
    }
  }, [stepNumber]);

  // const headings = () => {
  // 	stepsData.map(function (sub) {
  // 		return sub.heading;
  // 	});
  // };

  const validateSchema = () => {
    const yepSchema = stepsData[stepNumber].items
      .flat()
      .reduce(createYupSchema, {});
    const validateSchema = yup.object().shape(yepSchema);
    return validateSchema;
  };

  const next = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, stepsData.length - 1));
  };

  const previous = values => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    next(values);
  };

  const handleReset = async (values, bag) => {
    //bag.setTouched({}, false);
    //bag.setErrors({});
  };

  return (
    <>
      {Object.keys(snapshot).length}

      {/* {<FormSwitcher options={formOptions} callBack={callBackFn} />} */}

      {Object.keys(snapshot).length > 0 && (
        <Formik
          initialValues={snapshot}
          onSubmit={handleSubmit}
          onReset={handleReset}
          //validationSchema={validateSchema()}
          enableReinitialize={true}
        >
          {formik => (
            <Form
              noValidate
              className="mx-auto mt-12 max-w-6xl bg-gray-100 pb-2"
            >
              <p>stepNumber:{stepNumber}</p>

              <div className="flex flex-row">
                <div className="mr-24 mt-2 h-64 w-64">
                  {/* <Progress headings={headings} currentStep={stepNumber} /> */}
                </div>
                {/* <div className="w-full rounded-lg bg-gray-100 px-8 py-8"> */}
                <div className="m-8 w-full rounded-lg  border shadow-sm">
                  <div className="bg-white p-8">
                    {/* <h1 className="pb-6 text-xl">
											{stepsData[stepNumber].heading}
										</h1> */}

                    {formConfig && <WizardStep stepsData={formConfig} />}
                  </div>

                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    {stepNumber !== 0 && (
                      <PreviousButton onClick={() => previous(formik.values)} />
                    )}
                    <NextButton />
                  </div>
                </div>
                <Debug />
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}

export default Wizard;
