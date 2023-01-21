import { useField, Field } from 'formik';
import Label from './label';

const Checkbox1 = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label
        text={label}
        htmlFor={props.id || props.name}
        className="form-label"
      />

      <Field
        type="checkbox"
        name={props.name}
        id={props.id || props.name}
        className="sm:text-sm; mt-1 rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500 "
      />
    </>
  );
};

export default Checkbox1;
