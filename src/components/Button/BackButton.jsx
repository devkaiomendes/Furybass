import { useNavigate } from 'react-router-dom';
import { BackButtonContainer } from './styles';

const BackButton = ({ title }) => {
  const navigate = useNavigate();

  return (
    <BackButtonContainer onClick={() => navigate(-1)}>
      {title}
    </BackButtonContainer>
  );
};

export { BackButton };
