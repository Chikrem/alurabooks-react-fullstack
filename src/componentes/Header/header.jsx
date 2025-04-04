import Logo from "./../Logo/logo";
import Opcoes from "./../Opcoes/opcoes";
import Icones from "./../Icones/icones";

import styled from "styled-components";

const AppHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const AppMenu = styled.div`
  display: flex;
`

function Header() {
  return (
    <AppHeader>
      <Logo />
      <AppMenu>
        <Opcoes />
        <Icones />
      </AppMenu>
    </AppHeader>
  );
}

export default Header;
