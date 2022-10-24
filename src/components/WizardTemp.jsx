import { useState } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import * as yup from 'yup';
import { createYupSchema } from '../yupSchemaCreator';
import NextButton from './forms/elements/nextButton';
import PreviousButton from './forms/elements/previousButton';
import Progress from './Progress';
import WizardStep from './WizardStep';
import { Debug } from './Debug';
import FormSwitcher from './forms/elements/formSwitcher';
//import { useEffect } from 'react';

function Wizard({ stepsData }) {
	console.log(stepsData.length);
	if (stepsData.length !== 0) {
		let initialValues = {};
		const [stepNumber, setStepNumber] = useState(0);
		const [snapshot, setSnapshot] = useState(initialValues);

		const formElements = stepsData[stepNumber].items;

		const headings = stepsData.map(function (sub) {
			return sub.heading;
		});

		const result = stepsData.map(function (sub) {
			return sub.items.flat();
		});

		result.flat().map((element) => {
			initialValues[element.id] = '';
		});
		console.log('initial values:', initialValues);

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
			<>
				<Formik
					initialValues={snapshot}
					onSubmit={handleSubmit}
					validationSchema={validateSchema}
					enableReinitialize={true}
				>
					{(formik) => (
						<Form
							noValidate
							className="mx-auto mt-12 max-w-6xl bg-gray-100 pb-2"
						>
							{<FormSwitcher options={formOptions} callBack={callBackFn} />}

							<p>props:{JSON.stringify(formik.values)}</p>

							<div className="flex flex-row">
								<div className="mr-24 mt-2 h-64 w-64">
									<Progress headings={headings} currentStep={stepNumber} />
								</div>
								{/* <div className="w-full rounded-lg bg-gray-100 px-8 py-8"> */}
								<div className="m-8 w-full rounded-lg  border shadow-sm">
									<div className="bg-white p-8">
										<h1 className="pb-6 text-xl">
											{stepsData[stepNumber].heading}
										</h1>
										<WizardStep stepsData={formElements} />
									</div>

									<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
										{stepNumber !== 0 && (
											<PreviousButton onClick={() => previous(formik.values)} />
										)}
										<NextButton />
									</div>

									<button
										onClick={() => {
											formik.setValues({
												dummyCodeName: 'another field',
												specialistType: 'a new field',
												//items: values.items.filter((newE) => newE !== e), // Remove clicked item
											});
										}}
									>
										remove
									</button>
								</div>
								<Debug />
							</div>
						</Form>
					)}
				</Formik>
			</>
		);
	}
}

export default Wizard;
