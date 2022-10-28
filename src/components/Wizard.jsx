import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { createYupSchema } from '../yupSchemaCreator';
import NextButton from './forms/elements/nextButton';
import PreviousButton from './forms/elements/previousButton';
import WizardStep from './WizardStep';
//import { Debug } from './Debug';

function Wizard({ stepsData, progressCallback }) {
  const [stepNumber, setStepNumber] = useState(); // the wizard step (0-X)
  const [formConfig, setFormConfig] = useState(null); // the current form elements for the step
  const [snapshot, setSnapshot] = useState({}); // all form fields and values as flattened array

  useEffect(() => {
    if (stepsData.length > 0) {
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
    }
  }, [stepsData]);

  // update form and notify progress when stepNumber changes
  useEffect(() => {
    if (Number.isInteger(stepNumber)) {
      setFormConfig(stepsData[stepNumber].items);
      progressCallback(stepNumber);
    }
  }, [stepNumber]);

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
    bag.setTouched({});
    next(values);
  };

  // push this into another view component
  return (
    <>
      {Object.keys(snapshot).length > 0 && (
        <Formik
          initialValues={snapshot}
          onSubmit={handleSubmit}
          validationSchema={validateSchema()}
          enableReinitialize={true}
        >
          {formik => (
            <Form noValidate>
              <div className="flex flex-row">
                {/* <div className="w-full rounded-lg bg-gray-100 px-8 py-8"> */}
                <div className="m-8 w-full">
                  {/* <h1 className="pb-6 text-xl">
                      {stepsData[stepNumber].heading}
                    </h1> */}

                  {formConfig && <WizardStep stepsData={formConfig} />}

                  <div className="flex items-start justify-between bg-gray-50 px-4 py-3 sm:px-6">
                    {stepNumber !== 0 && (
                      <PreviousButton onClick={() => previous(formik.values)} />
                    )}
                    <NextButton />
                  </div>
                </div>
                {/* <Debug /> */}
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}

export default Wizard;
