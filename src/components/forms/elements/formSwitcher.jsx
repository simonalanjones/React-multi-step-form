import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

const FormSwitcher = ({ options, callBack }) => {
	//console.log('called with:', callBack);
	const [option, setOption] = useState(null);

	const choices = options.map((option, index) => (
		<option key={index} value={index}>
			{option.name}
		</option>
	));

	const handleChange = (e) => {
		const selected = e.target.value; // selected name
		//console.log(options[e.target.value].name);
		setOption(options[e.target.value].name);
		//console.log(selected);
		callBack(selected);
	};
	return (
		<>
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
			{option && <p>{option}</p>}
		</>
	);
};

export default FormSwitcher;
