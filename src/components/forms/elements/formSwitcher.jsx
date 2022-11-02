import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import { index as formOptions } from '../../../configs/index';

const FormSwitcher = ({ callBack }) => {
  const [option, setOption] = useState(null);

  async function fetchData(filename) {
    const response = await fetch(`src/configs/${filename}.json`);
    return await response.json();
  }

  const choices = formOptions.map((option, index) => (
    <option key={index} value={index}>
      {option.name}
    </option>
  ));

  const handleChange = e => {
    setOption(formOptions[e.target.value].name);
    fetchData(formOptions[e.target.value].file).then(stepsData => {
      callBack(stepsData);
    });
  };
  return (
    <>
      <Formik
        initialValues={{
          switcher: '',
        }}
      >
        <Form>
          <Field
            className="sm:text-md mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            as="select"
            id="switcher"
            name="switcher"
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            {choices}
          </Field>
        </Form>
      </Formik>
      {option && <p>{option}</p>}
    </>
  );
};

export default FormSwitcher;
