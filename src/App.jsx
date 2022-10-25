import { useState, useEffect } from 'react';
import Wizard from './components/Wizard';
import FormSwitcher from './components/forms/elements/formSwitcher';

// load the index as a JSON file
//import { index as formOptions } from './configs';

function App() {
  // the form data used by the wizard
  //const [formConfig, setFormConfig] = useState([]);
  const [stepsData, setStepsData] = useState(null); // all the wizard steps
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
  // async function fetchData(filename) {
  // 	const response = await fetch(`src/configs/${filename}.json`);
  // 	return await response.json();
  // }
  // pass progress step function callback to wizard
  // so wizard can notify progress of stepNumber
  const callBackFn = async stepsData => {
    console.log('callback called in App', stepsData);
    setStepsData(stepsData);

    // let selection = formOptions[selectionIndex]; // get filename from index
    // fetchData(selection.file).then((stepsData) => {
    // 	console.log(stepsData);
    // set the entire form data
    //setStepsData(stepsData);
  };

  return (
    <>
      <div className="container mx-auto max-w-screen-2xl">
        {<FormSwitcher callBack={callBackFn} />}
        {stepsData && <Wizard stepsData={stepsData} />}
      </div>
    </>
  );
}
export default App;
