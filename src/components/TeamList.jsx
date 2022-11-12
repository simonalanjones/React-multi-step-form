import { useState, useEffect } from 'react';

const TeamList = ({ options, selected, selectedCallback }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selected) {
      setSelectedIndex(selected);
    }
  }, []);

  const classForList = index => {
    return index !== selectedIndex
      ? 'block w-full cursor-pointer border-gray-200 py-3 px-6 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500'
      : 'block w-full cursor-pointer border-gray-200 bg-blue-700 py-3 px-6 text-white dark:border-gray-600 dark:bg-gray-800';
  };

  const selectTeam = urlName => {
    setSelectedIndex(urlName); // maintain internal state
    selectedCallback(urlName); // do callback to update page with forms
  };

  return (
    options && (
      <div className="mt-4 border-gray-200 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        {options.map((option, index) => (
          <p
            onClick={() => selectTeam(option.team.urlName)}
            key={index}
            className={classForList(option.team.urlName)}
          >
            {option.team.name}
          </p>
        ))}
      </div>
    )
  );
};

export default TeamList;
