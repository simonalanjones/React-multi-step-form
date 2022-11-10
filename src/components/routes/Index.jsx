import { useState, useEffect } from 'react';
import IndexView from '../views/Index.view';
import TeamList from '../TeamList';
import FormList from '../FormList';
import { useParams } from 'react-router-dom';

const Index = () => {
  const [teams, setTeams] = useState([]);
  const [forms, setForms] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchData().then(formData => {
      setTeams(formData);
    });
  }, []);

  useEffect(() => {
    if (params.id && teams.length > 0) {
      setForms(teams[params.id].forms);
      console.log(teams[params.id]);
    }
  });

  // have service to get teams/forms/ etc
  async function fetchData() {
    const response = await fetch('./../src/configs/index.json');
    return await response.json();
  }

  return (
    <>
      <IndexView
        teams={<TeamList options={teams} selected={params.id} />}
        forms={<FormList forms={forms} />}
      />
    </>
  );
};

export default Index;
