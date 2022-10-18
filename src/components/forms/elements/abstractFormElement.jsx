import DateInput from './dateInput';
import TextInput from './textInput';
import TextArea from './textArea';
import RadioGroup from './radioGroup';
import SelectOptions from './selectOptions';

const AbstractFormElement = ({ item }) => {
	const fieldMap = {
		txt: TextInput,
		radio: RadioGroup,
		select: SelectOptions,
		textArea: TextArea,
		date: DateInput,
	};
	const FormElement = fieldMap[item.type];

	return (
		<FormElement
			labelHelper={
				item.labelHelper !== undefined ? item.labelHelper : undefined
			}
			label={item.label}
			name={item.id}
			id={item.id}
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
