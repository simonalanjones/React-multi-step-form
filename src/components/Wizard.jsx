import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { createYupSchema } from '../yupSchemaCreator';
import NextButton from './forms/elements/nextButton';
import PreviousButton from './forms/elements/previousButton';
import Progress from './Progress';
import WizardStep from './WizardStep';
// import { Debug } from './Debug';

// const Step = ({ title, selected, lastStep, previous, current }) => {
// 	const icon =
// 		previous === true ? (
// 			<svg
// 				xmlns="http://www.w3.org/2000/svg"
// 				viewBox="0 0 20 20"
// 				fill="currentColor"
// 				className="h-5 w-5"
// 			>
// 				<path
// 					fillRule="evenodd"
// 					d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
// 					clipRule="evenodd"
// 				/>
// 			</svg>
// 		) : current === true ? (
// 			<svg height="50" width="50">
// 				<circle cx="14" cy="25" r="5" fill="#4f46e5" />
// 			</svg>
// 		) : null;

// 	const postLength = lastStep !== true ? 12 : 0;

// 	const textColour =
// 		current === true
// 			? 'text-indigo-600'
// 			: previous === true
// 			? 'text-gray-600'
// 			: 'text-gray-400';

// 	const textWeight =
// 		previous === true || current === true ? 'font-bold' : 'font-bold';
// 	const postColour =
// 		previous === true && selected === false ? 'bg-indigo-600' : 'bg-gray-300';

// 	const fillColour = previous === true ? 'bg-indigo-600' : 'bg-white';

// 	const borderColour =
// 		current === true || previous === true
// 			? 'border-indigo-600'
// 			: 'border-gray-300';

// 	return (
// 		<>
// 			<div className={`relative flex pb-${postLength}`}>
// 				<div className="absolute inset-0 flex h-full w-8 items-center justify-center">
// 					<div
// 						className={`pointer-events-none h-full w-0.5 ${postColour}`}
// 					></div>
// 				</div>
// 				<div
// 					className={`relative z-10 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${fillColour} border-2 border-solid ${borderColour} text-white`}
// 				>
// 					{icon}
// 				</div>
// 				<div className="flex-grow pl-4">
// 					<h2
// 						className={`title-font mb-1 mt-1 text-sm uppercase ${textColour} ${textWeight}`}
// 					>
// 						{title}
// 					</h2>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// const Steps = ({ headings, currentStep }) => {
// 	// currentStep is 0-3  (zero index based)
// 	return (
// 		<>
// 			{headings.map((item, index) => (
// 				<Step
// 					title={item}
// 					key={index}
// 					selected={currentStep === index ? true : false}
// 					previous={index < currentStep ? true : false}
// 					current={index + 1 === currentStep + 1}
// 					lastStep={false}
// 				/>
// 			))}
// 			<Step
// 				title={'finish'}
// 				key={headings.length}
// 				lastStep={true}
// 				selected={false}
// 				previous={false}
// 				current={false}
// 			/>
// 		</>
// 	);
// };

function Wizard({ stepsData }) {
	let initialValues = {};
	const [stepNumber, setStepNumber] = useState(0);
	const [snapshot, setSnapshot] = useState(initialValues);

	const formElements = stepsData[stepNumber].items;

	//console.log(formElements);

	const headings = stepsData.map(function (sub) {
		return sub.heading;
	});

	const result = stepsData.map(function (sub) {
		return sub.items.flat();
	});

	result.flat().map((element) => {
		initialValues[element.id] = '';
	});

	const yepSchema = stepsData[stepNumber].items
		.flat()
		.reduce(createYupSchema, {});
	const validateSchema = yup.object().shape(yepSchema);

	const next = (values) => {
		setSnapshot(values);
		setStepNumber(Math.min(stepNumber + 1, stepsData.length - 1));
	};

	const previous = (values) => {
		setSnapshot(values);
		setStepNumber(Math.max(stepNumber - 1, 0));
	};

	const handleSubmit = async (values, bag) => {
		bag.setTouched({});
		next(values);
	};

	return (
		<Formik
			initialValues={snapshot}
			onSubmit={handleSubmit}
			validationSchema={validateSchema}
		>
			{(formik) => (
				<Form noValidate className="mx-auto mt-12 max-w-6xl pb-2">
					{/* <p>props:{JSON.stringify(formik.values)}</p> */}

					<div className="flex flex-row">
						<div className="mr-24 mt-2 h-64 w-64">
							<Progress headings={headings} currentStep={stepNumber} />
						</div>
						{/* <div className="w-full rounded-lg bg-gray-100 px-8 py-8"> */}
						<div className="w-full">
							{/* <h1 className="pb-6 text-xl">{stepsData[stepNumber].heading}</h1> */}
							<WizardStep stepsData={formElements} />
							{stepNumber !== 0 && (
								<PreviousButton onClick={() => previous(formik.values)} />
							)}
							<NextButton />
						</div>
						{/* <Debug /> */}
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default Wizard;
