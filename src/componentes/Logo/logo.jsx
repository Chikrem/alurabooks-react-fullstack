import logo from "../../imagens/logo.svg";

import styled from "styled-components";

const AppLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const LogoImg = styled.img`
  margin-right: 10px;
  height: 60px;
  width: 60px;
`;

function Logo() {
  return (
    <AppLogo>
      <LogoImg src={logo} alt="Logo AluraBooks"></LogoImg>
      <p>
        <strong>Alura</strong>Books
      </p>
    </AppLogo>
  );
}

export default Logo;
