import { HeaderContainer } from "./HeaderStyle";
import logo from '../../image/logo-sistema-solar.png';

export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <img src={ logo } alt="Solar System" />
    </HeaderContainer>
  )
}
