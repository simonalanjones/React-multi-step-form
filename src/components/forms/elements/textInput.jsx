import { useField, Field } from 'formik';
import RequiredMark from './requiredMark';

const TextInput = ({ label, ...props }) => {
	//console.log(props);
	const [field, meta] = useField(props);

	// const TextInput = React.forwardRef((props, ref) => {
	// 	const [field, meta] = useField(props);
	//https://stackoverflow.com/questions/43458971/react-dev-tools-show-my-component-as-unknown/43459021
	return (
		<>
			<label
				className="block text-sm leading-7 text-gray-600"
				htmlFor={props.id || props.name}
			>
				{label}
				{props.required && <RequiredMark />}
			</label>
			<Field
				as="input"
				autoComplete="false"
				className={
					meta.touched && meta.error
						? 'w-full rounded border border-rose-600 py-2 px-3'
						: 'w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200'
				}
				id={field.name}
				{...field}
				{...props}
			></Field>

			{/* <input
				autoComplete="false"
				type="text"
				ref={ref}
				className={
					meta.touched && meta.error
						? 'mt-1 w-full rounded border border-rose-600 py-2 px-3 text-sm'
						: 'mt-1 w-full rounded border py-2 px-3 text-sm focus:border-indigo-500 focus:ring-indigo-500'
				}
				id={field.name}
				{...field}
				{...props}
			/> */}
			{meta.touched && meta.error ? (
				<div className="pt-1 text-sm text-red-600">{meta.error}</div>
			) : null}
		</>
	);
};

export default TextInput;
