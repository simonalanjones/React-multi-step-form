import DateInput from './dateInput';
import TextInput from './textInput';
import TextArea from './textArea';
import RadioGroup from './radioGroup';
import SelectOptions from './selectOptions';
import Checkbox from './checkbox';

const AbstractFormElement = ({ item }) => {
  const fieldMap = {
    text: TextInput,
    radio: RadioGroup,
    select: SelectOptions,
    textArea: TextArea,
    date: DateInput,
    checkbox: Checkbox,
  };
  const FormElement = fieldMap[item.type];

  return (
    <FormElement
      labelHelper={
        item.labelHelper !== undefined ? item.labelHelper : undefined
      }
      label={item.label}
      rows={item.rows !== undefined ? item.rows : 2}
      name={item.id !== undefined ? item.id : '*undefined*'}
      id={item.id !== undefined ? item.id : '*undefined*'}
      options={item.options !== undefined ? item.options : undefined}
      required={
        item.validations && item.validations[0].type === 'required'
          ? true
          : undefined
      }
    />
  );
};

export default AbstractFormElement;
