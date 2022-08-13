import { HomeContainer } from './styles';
import Illustration from '../../assets/Illustration.svg';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <HomeContainer>
      <img src={Illustration} alt='' />
      <Button width={13.3}>INICIAR</Button>
    </HomeContainer>
  );
}
