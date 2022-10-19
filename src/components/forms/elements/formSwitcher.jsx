import { Formik, Field, Form } from 'formik';

const FormSwitcher = ({ options, callBack }) => {
	//console.log('called with:', callBack);

	const choices = options.map((option, index) => (
		<option key={index} value={index}>
			{option.name}
		</option>
	));

	const handleChange = (e) => {
		const selected = e.target.value; // selected name
		//console.log(options[e.target.value]);
		//console.log(selected);
		callBack(selected);
	};
	return (
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
	);
};

export default FormSwitcher;
