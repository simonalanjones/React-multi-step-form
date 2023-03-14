import { useNavigate } from 'react-router-dom';
import FormListItem from './FormListItem';
const FormList = ({ forms }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-6 grid grid-cols-1 gap-6 sm:mr-6 md:grid-cols-2">
      {forms.map((option, index) => (
        <FormListItem
          key={index}
          name={option.name}
          description={option.description}
          url={() => navigate(`/form/${option.urlName}`)}
        />
      ))}
    </div>
  );
};

export default FormList;
