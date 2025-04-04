import Logo from "./../Logo/logo";
import Opcoes from "./../Opcoes/opcoes";
import Icones from "./../Icones/icones";

import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Link to="/">
       <Logo />
      </Link>
      <AppMenu>
        <Opcoes />
        <Icones />
      </AppMenu>
    </AppHeader>
  );
}

export default Header;
