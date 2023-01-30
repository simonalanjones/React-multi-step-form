import { useState, useEffect } from 'react';
import { Formik, Form, isFunction } from 'formik';
import * as yup from 'yup';
import { createYupSchema } from '../yupSchemaCreator';
import NextButton from './forms/elements/nextButton';
import PreviousButton from './forms/elements/previousButton';
import WizardStep from './WizardStep';
//import { Debug } from './Debug';

function Wizard({ stepsData, progressCallback, onSubmit, isSubmitting }) {
  const [stepNumber, setStepNumber] = useState(); // the wizard step (0-X)
  const [formConfig, setFormConfig] = useState(null); // the current form elements for the step
  const [snapshot, setSnapshot] = useState({}); // all form fields and values as flattened array
  const isLastStep = stepNumber - (stepsData.length - 1) == 0 ? true : false;

  useEffect(() => {
    if (stepsData.length > 0) {
      const result = stepsData.map(function (sub) {
        return sub.items.flat();
      });

      let initialValues = {};
      result.flat().map((element) => {
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
      if (isFunction(progressCallback)) {
        progressCallback(stepNumber);
      }
    }
  }, [stepNumber]);

  const validateSchema = () => {
    const yepSchema = stepsData[stepNumber].items
      .flat()
      .reduce(createYupSchema, {});
    const validateSchema = yup.object().shape(yepSchema);
    return validateSchema;
  };

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, stepsData.length - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (isLastStep === true) {
      onSubmit(values, bag);
    }
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
          {(formik) => (
            <Form noValidate className="h-full">
              <div className="shadow sm:overflow-hidden sm:rounded-md"></div>
              {/* <h1 className="pb-6 text-xl">{stepsData[stepNumber].heading}</h1> */}
              <div className="flex h-full flex-col justify-between rounded-md border border-slate-200/80 bg-white shadow-sm">
                <div className="max-h-max max-w-3xl px-8 py-8">
                  {formConfig && <WizardStep stepsData={formConfig} />}
                </div>
                <div className="flex grow flex-col-reverse">
                  <div className="px-8 py-2 text-right text-sm text-gray-500">
                    Fields marked
                    <span className="mx-1 text-red-600">*</span>are required
                  </div>
                </div>

                <div className="rounded-b-md bg-gray-100 px-8 py-4">
                  {stepNumber !== 0 && (
                    <div className="float-left">
                      <PreviousButton onClick={() => previous(formik.values)} />
                    </div>
                  )}
                  <div className="float-right">
                    <NextButton label={isLastStep ? 'Submit' : 'Next'} />
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
