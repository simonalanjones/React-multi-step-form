import { useState, useEffect } from 'react';
import Wizard from './components/Wizard';
//import FormSwitcher from './components/forms/elements/formSwitcher';

// load the index as a JSON file
// import { index as formOptions } from './configs';

function App() {
	// the form data used by the wizard
	// const [formConfig, setFormConfig] = useState([]);

	// async function fetchData(filename) {
	// 	const response = await fetch(`src/configs/${filename}.json`);
	// 	const movies = await response.json();
	// 	return movies;
	// }

	// const callBackFn = async (theVar) => {
	// 	let selection = formOptions[theVar]; // get filename from index
	// 	fetchData(selection.file).then((data) => {
	// 		//console.log(data);
	// 		setFormConfig(data);
	// 	});
	// };

	return (
		<>
			<div className="container mx-auto max-w-screen-2xl">
				{/* {<FormSwitcher options={formOptions} callBack={callBackFn} />} */}
				<Wizard />
			</div>
		</>
	);
}
export default App;
