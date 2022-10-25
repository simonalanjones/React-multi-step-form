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
    const selected = e.target.value; // selected name
    let selection = formOptions[selected]; // get filename from index
    setOption(formOptions[e.target.value].name);
    fetchData(selection.file).then(stepsData => {
      console.log(stepsData);
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
            className="mt-1 w-full rounded border py-2 px-3"
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
