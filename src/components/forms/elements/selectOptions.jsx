import { useField, Field } from 'formik';
import Label from './label';
import LabelHelper from './labelHelper';
import ErrorText from './errorText';

const SelectOptions = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);

  const choices = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  return (
    <>
      <Label
        text={label}
        required={props.required}
        htmlFor={props.id || props.name}
      />

      <Field
        className={
          meta.touched && meta.error ? 'form-input-error' : 'form-input-ok'
        }
        as="select"
        id={field.name}
        name={field.name}
      >
        <option value="">Select an option</option>
        {choices}
      </Field>
      {props.labelHelper && <LabelHelper helperText={props.labelHelper} />}
      {meta.touched && meta.error && <ErrorText error={meta.error} />}
    </>
  );
};

export default SelectOptions;
