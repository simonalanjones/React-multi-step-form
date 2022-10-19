import { useState, useEffect } from 'react';
import Wizard from './components/Wizard';
import FormSwitcher from './components/forms/elements/formSwitcher';

import { formSteps as stepsData } from './configs/form';

// load the index as a JSON file
import { index as formOptions } from './configs';

function App() {
	// the form data used by the wizard
	const [formConfig, setFormConfig] = useState([]);

	// the selection of the dropdown used to trigger a data load of form config
	const [formSelection, setFormSelection] = useState('');

	async function fetchData(filename) {
		const response = await fetch(`src/configs/${filename}.json`);
		const movies = await response.json();
		return movies;
	}

	// make this a general purpose loader of json
	const getData = async (filename) => {
		fetch(`src/configs/${filename}.json`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				//console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				console.log('inside async function', myJson);
				return myJson;
			});
	};

	// useEffect(() => {
	// 	if (formSelection != '') {

	// 		let selection = formOptions[formSelection]; // get filename from index

	// 		console.log(filename);
	// 		let _config = getData(selection.file);
	// 		console.log(_config);
	// 	}
	// }, [formSelection]);

	const callBackFn = async (theVar) => {
		//setFormSelection(theVar);
		let selection = formOptions[theVar]; // get filename from index
		// console.log('selected file:', selection.file);
		// await getData(selection.file).then((data) => {
		// 	console.log('data after call:', data);
		// });
		fetchData(selection.file).then((data) => {
			console.log(data);
			setFormConfig(data);
		});
	};

	return (
		<>
			{/* <header className="body-font bga-indigo-600 text-gray-600">
				<div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
					<a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
							viewBox="0 0 24 24"
						>
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<span className="ml-3 text-xl">
							Provider Management referral form
						</span>
					</a>
					<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
						<a key={1} className="mr-5 hover:text-gray-900">
							First Link
						</a>
						<a key={2} className="mr-5 hover:text-gray-900">
							Second Link
						</a>
						<a key={3} className="mr-5 hover:text-gray-900">
							Third Link
						</a>
					</nav>
					<button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
						Button
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="ml-1 h-4 w-4"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button>
				</div>
			</header> */}

			<div className="container mx-auto max-w-screen-2xl">
				{<FormSwitcher options={formOptions} callBack={callBackFn} />}
				<div className="">
					{/* <Wizard stepsData={stepsData} /> */}
					<Wizard stepsData={formConfig} />
				</div>
			</div>
		</>
	);
}
export default App;
