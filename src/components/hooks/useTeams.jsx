import { useEffect, useState } from 'react';
import useConfig from './useConfig';

const useTeams = (teamId) => {
  const [teams, setTeams] = useState([]);
  const [forms, setForms] = useState([]);
  const { formsIndex } = useConfig();

  useEffect(() => {
    formsIndex().then((formData) => {
      setTeams(formData);
    });
  }, []);

  useEffect(() => {
    if (teamId && teams.length > 0) {
      const team = teams.find((element) => element.team.urlName === teamId);

      // check result found
      if (team !== undefined) {
        setForms(team.forms);
      } else {
        console.log('team name not found:', teamId);
      }
    }

    //   // else no team set so add all forms into form list
    if (!teamId && forms.length === 0) {
      formsIndex().then((formData) => {
        const forms = formData.map((element) => element.forms).flat();
        setForms(forms);
      });
    }
  });

  return { teams, forms };
};

export default useTeams;
