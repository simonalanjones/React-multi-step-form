import { useField } from 'formik';
//import Label from './label';
//import LabelHelper from './labelHelper';
import ErrorText from './errorText';
import RequiredMark from './requiredMark';

const RadioGroup = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const radios = options.map((option, index) => (
    <div key={index} className="form-check mb-1">
      <input
        className={
          meta.touched && meta.error
            ? 'rounded-lg border border-rose-600'
            : 'h-4 w-4 border-gray-300 text-blue-600 shadow focus:ring-blue-500'
        }
        {...field}
        id={`${field.name}${index}`}
        data-testid={`${field.name}${option}`}
        name={field.name}
        value={option}
        type="radio"
        checked={meta.value === option}
      />

      <label htmlFor={`${field.name}${index}`} className="form-label-radio">
        {option}
      </label>

      {index === options.length - 1 && meta.touched && meta.error && (
        <ErrorText error={meta.error} />
      )}
    </div>
  ));

  return (
    <>
      <p className="pb-2 text-sm font-medium text-gray-700">
        {label}
        {props.required && <RequiredMark />}
      </p>
      {radios}
    </>
  );
};

export default RadioGroup;
