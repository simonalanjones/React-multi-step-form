import useConfig from './useConfig';
import { useEffect } from 'react';
const useFormTeam = (urlName) => {
  useEffect(() => {
    formsIndex().then((formData) => {
      //setTeams(formData);
      //console.log(formData);
    });
  }, []);

  const { formsIndex } = useConfig();
  //console.log(formsIndex);

  return 'ashjdgfasjhdgasdhjg';
};

export default useFormTeam;
