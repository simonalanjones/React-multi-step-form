import IndexView from '../views/Index.view';
import TeamList from '../TeamList';
import FormList from '../FormList';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useTeams from '../hooks/useTeams';

const Index = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { teams, forms } = useTeams(params.urlName);

  const selectedTeam = (id) => {
    navigate(`/team/${id}`);
  };

  const selectedForm = (id) => {
    console.log(id);
    navigate(`/form/${id}`);
  };

  const feedbackLink = () => {
    navigate('/feedback');
  };

  return (
    <IndexView
      feedbackLink={feedbackLink}
      teams={
        <TeamList
          options={teams}
          selected={params.urlName}
          selectedCallback={selectedTeam}
        />
      }
      forms={<FormList forms={forms} selectedCallback={selectedForm} />}
    />
  );
};

export default Index;
