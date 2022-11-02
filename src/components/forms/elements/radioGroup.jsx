import { useField } from 'formik';
import RequiredMark from './requiredMark';

const RadioGroup = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const radios = options.map((option, index) => (
    <div key={index} className="form-check">
      <input
        className={
          meta.error
            ? 'rounded border border-rose-600'
            : 'h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
        }
        {...field}
        id={`${field.name}${index}`}
        data-testid={`${field.name}${option}`}
        name={field.name}
        value={option}
        type="radio"
        checked={meta.value === option}
      />
      <label htmlFor={`${field.name}${index}`} className="mb-2 px-2 text-sm">
        {option}
      </label>

      {index === options.length - 1 && meta.touched && meta.error && (
        <div className="text-sm text-red-600">{meta.error}</div>
      )}
    </div>
  ));

  return (
    <>
      <p className="pb-2 text-sm">
        {label}
        {props.required && <RequiredMark />}
      </p>
      {radios}
    </>
  );
};

export default RadioGroup;
