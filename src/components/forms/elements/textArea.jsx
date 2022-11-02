import { useField, Field } from 'formik';
import RequiredMark from './requiredMark';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className="block text-sm leading-7 text-gray-600"
        htmlFor={props.id || props.name}
      >
        {label}
        {props.required && <RequiredMark />}

        <Field
          rows={props.rows !== undefined ? props.rows : 2}
          as="textarea"
          className={
            meta.touched && meta.error
              ? 'w-full rounded border border-rose-600 py-1 px-3'
              : 'focus:ring-indigo-20 leading-1 w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2'
          }
          id={field.name}
          name={field.name}
          value={field.value || ''}
        ></Field>
      </label>
      {props.labelHelper && (
        <p className="pt-1 text-xs leading-4 text-gray-400">
          {props.labelHelper}
        </p>
      )}
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextArea;
