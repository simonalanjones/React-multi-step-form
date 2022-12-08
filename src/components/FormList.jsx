import { useNavigate } from 'react-router-dom';
import FormListItem from './FormListItem';
const FormList = ({ forms, selectedCallback }) => {
  const navigate = useNavigate();

  if (Array.isArray(forms)) {
    return forms.map((option, index) => (
      <FormListItem
        key={index}
        name={option.name}
        description={option.description}
        url={() => navigate(`/form/${option.urlName}`)}
      />
    ));
  }
};

export default FormList;
