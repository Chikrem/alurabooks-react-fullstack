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
        <AppItem key={index}>
          <p>{texto}</p>
        </AppItem>
      ))}
    </AppLista>
  );
}

export default Opcoes;
