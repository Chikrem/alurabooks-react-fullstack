import { Link } from "react-router-dom";
import styled from "styled-components";

const opcoesHeader = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE'];

const AppLista = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    font-size: 1.25rem;
`;

const AppItem = styled.li`
    list-style: none;
    cursor: pointer;
`;

function Opcoes() {
  return (
    <AppLista>
      {opcoesHeader.map((texto, index) => (
        <Link to={`/${texto.toLowerCase()}`} key={index}>
          <AppItem key={index}>
          <p>{texto}</p>
        </AppItem>
        </Link>
      ))}
    </AppLista>
  );
}

export default Opcoes;
