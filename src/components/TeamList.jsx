import { useState, useEffect } from 'react';

const TeamList = ({ options, selected, selectedCallback }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selected) {
      setSelectedIndex(selected);
    }
  }, []);

  const classForList = index => {
    return index !== selectedIndex;
    // ? 'block w-full cursor-pointer border-gray-200 py-3 px-6 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500'
    // : 'block w-full cursor-pointer border-gray-200 bg-blue-700 py-3 px-6 text-white dark:border-gray-600 dark:bg-gray-800';
  };

  const selectTeam = urlName => {
    setSelectedIndex(urlName); // maintain internal state
    selectedCallback(urlName); // do callback to update page with forms
  };
  //console.log(selectedIndex);
  return (
    options && (
      <div className="abg-gray-100 mx-auto w-fit">
        {options.map((option, index) =>
          option.team.urlName !== selectedIndex ? (
            <div
              key={index}
              className="mb-6 flex w-64 rounded-md bg-gray-200 py-2 hover:bg-gray-300"
              onClick={() => selectTeam(option.team.urlName)}
            >
              <div className="mx-auto text-sm font-semibold text-slate-500">
                {option.team.name}
              </div>
            </div>
          ) : (
            <div
              className="mb-6 flex w-64 rounded-md bg-blue-800 py-2"
              key={index}
            >
              <div className="mx-auto text-sm font-semibold text-white">
                {option.team.name}
              </div>
            </div>
          )
        )}
      </div>
    )
  );
};

export default TeamList;
