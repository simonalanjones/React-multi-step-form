import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Wizard from '../Wizard';
import Progress from '../Progress';
import FormView from '../views/Form.view';
import useForm from '../hooks/useForm';

const Form = () => {
  const [stepNumber, setStepNumber] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { stepsData, headings, formTitle } = useForm(params.id);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //console.log(params);

  const restart = () => {
    setIsComplete(false);
    setIsSubmitting(false);
    setIsSubmitted(false);
    setStepNumber(0);
  };

  const onStepChange = (stepNumber) => {
    setStepNumber(stepNumber);
  };

  const onSubmit = (data) => {
    console.log('you submitted', data);
    setIsComplete(true);
    setIsSubmitting(true);
    mockSubmit();
  };

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function mockSubmit() {
    console.log('submitting data');
    await wait(2000);
    console.log('submit data complete');
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  // function passed on that can be used to choose another form
  // this is only needed if the button is embedded in wizard (inner view)
  // not needed if button is outside formview
  const onChangeForm = () => {
    console.log('change requested');
    navigate('/');
  };

  const SubmittingPanel = () => {
    return (
      <div className="h-full">
        <div className="flex h-full flex-col justify-center rounded-md border border-slate-100 bg-gray-50/30">
          <div className="max-h-max">
            <div class="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline h-16 w-16 animate-spin fill-blue-600 text-gray-100 dark:text-gray-100"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Saving...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SubmittedPanel = () => {
    return (
      <div className="h-full">
        <div className="_justify-center flex h-full flex-col rounded-md border border-slate-100 bg-gray-50/30">
          <div className="max-h-max">
            <div className="mt-8 mb-8 text-center">
              <div className="relative z-10 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="green"
                  className="h-16 w-16"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-xl">Success</p>
              <p className="text-md py-1 text-gray-500">
                Your form has been submitted
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <div className=" flex w-64 rounded-md bg-gray-200 py-2 hover:cursor-pointer hover:bg-gray-300">
                <div
                  className="mx-auto text-sm font-semibold text-slate-500 "
                  onClick={() => restart()}
                >
                  Use this form again
                </div>
              </div>

              <div className="flex  w-64 rounded-md bg-gray-200 py-2 hover:cursor-pointer  hover:bg-gray-300">
                <div
                  className="mx-auto text-sm font-semibold text-slate-500"
                  onClick={() => navigate('/')}
                >
                  Back to forms index
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const processPanel = () => {
    if (!isSubmitting && !isSubmitted) {
      return (
        <Wizard
          stepsData={stepsData}
          progressCallback={onStepChange}
          onSubmit={onSubmit}
        />
      );
    } else if (isSubmitting) {
      return <SubmittingPanel />;
    } else if (isSubmitted) {
      return <SubmittedPanel />;
    }
  };

  return (
    stepsData && (
      <FormView
        title={formTitle}
        onChangeHandler={onChangeForm}
        progress={
          <Progress
            headings={headings}
            currentStep={stepNumber}
            isComplete={isComplete}
            isSubmitted={isSubmitted}
          />
        }
        process={processPanel()}
      />
    )
  );
};

export default Form;
