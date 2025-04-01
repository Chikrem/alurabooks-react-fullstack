import styled from "styled-components";
import { livros } from "./dadosLancamentos"
import Titulo from "../Titulo/titulo";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function Lancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor={"#EB9B00"}
                tamanho={"36px"} 
                alinhamento={"center"}
                    >ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt="Livro" key={livro.id}/>
                ) ) }
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    );
}

export default Lancamentos