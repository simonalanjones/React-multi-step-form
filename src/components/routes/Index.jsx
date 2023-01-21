import IndexView from '../views/Index.view';
import TeamList from '../TeamList';
import FormList from '../FormList';
import FormListEmpty from '../FormListEmpty';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useTeams from '../hooks/useTeams';

const Index = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { teams, forms } = useTeams(params.urlName);

  // sort the list of forms (A-Z)
  forms.sort((a, b) => (a.name > b.name ? 1 : -1));
  // sort teams array (A-Z)
  teams.sort((a, b) => (a.team.name > b.team.name ? 1 : -1));

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

  const formsComp = (forms) => {
    if (forms.length > 0) {
      return <FormList forms={forms} selectedCallback={selectedForm} />;
    }
    return <FormListEmpty />;
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
      forms={formsComp(forms)}
    />
  );
};

export default Index;
