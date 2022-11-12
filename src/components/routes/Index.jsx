import { useState, useEffect } from 'react';
import IndexView from '../views/Index.view';
import TeamList from '../TeamList';
import FormList from '../FormList';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [teams, setTeams] = useState([]);
  const [forms, setForms] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  // 1st function: load the teams array
  useEffect(() => {
    fetchData().then(formData => {
      console.log(formData);
      setTeams(formData);
    });
  }, []);

  // 2nd function: set forms if team id given
  // team id is param: urlName
  useEffect(() => {
    if (params.urlName && teams.length > 0) {
      const team = teams.find(
        element => element.team.urlName === params.urlName
      );
      // check result found
      if (team !== undefined) {
        setForms(team.forms);
      } else {
        console.log('team name not found:', params.urlName);
      }
    }
  });

  // have service to get teams/forms/ etc
  async function fetchData() {
    const response = await fetch('./../src/configs/index.json');
    return await response.json();
  }

  const selectedTeam = id => {
    //console.log(id);
    navigate(`/team/${id}`);
  };

  return (
    <IndexView
      teams={
        <TeamList
          options={teams}
          selected={params.urlName}
          selectedCallback={selectedTeam}
        />
      }
      forms={<FormList forms={forms} />}
    />
  );
};

export default Index;
