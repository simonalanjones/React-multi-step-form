import { isInteger } from 'formik';
import { useState, useEffect } from 'react';

const FormSelector = ({ callBack }) => {
  const [options, setOptions] = useState(null);
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(null);

  useEffect(() => {
    fetchData().then(formData => {
      setOptions(formData);
    });
  }, []);

  async function fetchData() {
    const response = await fetch(`src/configs/index.json`);
    return await response.json();
  }

  async function fetchForm(filename) {
    const response = await fetch(`src/configs/${filename}.json`);
    return await response.json();
  }

  const selected = index => {
    const filename = options[selectedTeamIndex].forms[index].file;
    fetchForm(filename).then(stepsData => {
      //   console.log(stepsData);
      callBack(stepsData);
    });
  };

  const selectForm = index => {
    //console.log(index);
    setSelectedTeamIndex(index);
    //console.log(options[0]);
  };

  const classForList = index => {
    return index !== selectedTeamIndex
      ? 'block w-full cursor-pointer aborder-b border-gray-200 py-3 px-6 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500'
      : 'block w-full cursor-pointer aborder-b border-gray-200 bg-blue-700 py-3 px-6 text-white dark:border-gray-600 dark:bg-gray-800';
  };

  const Forms = () => {
    if (selectedTeamIndex !== null) {
      const _forms = options[selectedTeamIndex].forms;
      const _count = _forms.length;
      return (
        <div className="flex flex-col">
          {_forms.map((option, index) => (
            <div
              className={`grow ${
                index + 1 != _count ? 'aborder-b' : ''
              } px-4 py-4 ${index % 2 ? 'bg-slate-100' : ''}`}
              key={index}
            >
              <div className="flex">
                <div>
                  <p className="font-semibold text-slate-600">{option.name}</p>
                  <p className="max-w-xl pt-1 text-sm text-slate-500">
                    {option.description}
                  </p>
                </div>
                <div className="grow self-center text-right">
                  <button
                    onClick={() => selected(index)}
                    type="button"
                    className="rounded-full border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Use form
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  const Teams = () => {
    if (options) {
      return (
        <div className="abg-white aborder mt-4 border-gray-200 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          {options.map((option, index) => (
            <a
              onClick={() => selectForm(index)}
              key={index}
              href="#"
              className={classForList(index)}
            >
              {option.team}
            </a>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-6xl ">
        <div className="flex flex-row gap-12 py-4">
          <aside className=" w-full sm:w-1/3 md:w-1/4">
            <div className="top-0 w-full">
              <Teams />
            </div>
          </aside>
          <main
            role="main"
            className="apx-2 aborder-b w-full pt-1 sm:w-2/3 md:w-3/4"
          >
            <Forms />
          </main>
        </div>
      </div>
    </>
  );
};

export default FormSelector;
