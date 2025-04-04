import Lancamentos from "../componentes/Lancamentos/lancamentos";
import Pesquisa from "../componentes/Pesquisa/pesquisa";

import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <Lancamentos />
    </AppContainer>
  );
}

export default Home;
