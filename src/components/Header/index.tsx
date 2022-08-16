import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logo} alt='Plug Logo' />
      </Link>
    </HeaderContainer>
  );
}
