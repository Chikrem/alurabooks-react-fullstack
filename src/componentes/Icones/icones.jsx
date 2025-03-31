import styled from "styled-components";

import sacola from "../../imagens/sacola.svg";
import perfil from "../../imagens/perfil.svg";

const icones = [sacola, perfil];

const AppLista = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;
  font-size: 1.25rem;
`;

const AppIcon = styled.li`
  list-style: none;
  cursor: pointer;
  margin-right: 8px;
  margin-left: 8px;
`;

function Icones() {
  return (
    <AppLista>
      {icones.map((icone) => (
        <AppIcon key={icone.key}>
          <img src={icone} alt="ícone"></img>
        </AppIcon>
      ))}
    </AppLista>
  );
}

export default Icones;
