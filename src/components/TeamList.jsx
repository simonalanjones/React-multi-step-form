import { useState, useEffect } from 'react';
import TeamItem from './TeamItem';

const TeamList = ({ options, selected, selectedCallback }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(selected);
  }, []);

  const selectTeam = (urlName) => {
    setSelectedIndex(urlName); // maintain internal state
    selectedCallback(urlName); // do callback to update page with forms
  };

  return options.map((option, index) => (
    <TeamItem
      key={index}
      teamName={option.team.name}
      selected={option.team.urlName === selectedIndex}
      selectedCallback={() => selectTeam(option.team.urlName)}
    />
  ));
};

export default TeamList;
