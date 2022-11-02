import { useField, Field } from 'formik';
import RequiredMark from './requiredMark';

const SelectOptions = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);

  const choices = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  return (
    <>
      <label htmlFor={field.name} className="block">
        {label}
        {props.required && <RequiredMark />}
      </label>

      <Field
        className={
          meta.touched && meta.error
            ? 'mt-1 w-full rounded border border-rose-600 py-2 px-3'
            : 'mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        }
        as="select"
        id={props.name}
        name={props.name}
      >
        <option value="">Select an option</option>
        {choices}
      </Field>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default SelectOptions;
