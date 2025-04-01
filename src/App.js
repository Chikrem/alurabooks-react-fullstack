// Início Aula-3

import Header from "./componentes/Header/header";
import Lancamentos from "./componentes/Lancamentos/lancamentos";
import Pesquisa from "./componentes/Pesquisa/pesquisa";

import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <Lancamentos />
    </AppContainer>
  );
}

export default App;
