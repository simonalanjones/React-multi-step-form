import { useField, Field } from 'formik';
import Label from './label';
import LabelHelper from './labelHelper';
import ErrorText from './errorText';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label
        text={label}
        required={props.required}
        htmlFor={props.id || props.name}
      />
      <Field
        rows={props.rows !== undefined ? props.rows : 2}
        as="textarea"
        className={
          meta.touched && meta.error ? 'form-input-error' : 'form-input-ok'
        }
        id={field.name}
        name={field.name}
        value={field.value || ''}
      />
      {props.labelHelper && <LabelHelper helperText={props.labelHelper} />}
      {meta.touched && meta.error && <ErrorText error={meta.error} />}
    </>
  );
};

export default TextArea;
