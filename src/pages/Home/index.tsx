import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import Illustration from '../../assets/Illustration.svg';

import { HomeContainer } from './styles';

export function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <img src={Illustration} alt='' />
      <Button width={13.3} onClick={() => navigate('/task')}>
        INICIAR
      </Button>
    </HomeContainer>
  );
}
