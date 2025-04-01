import styled from 'styled-components'

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Livro({ resultados = [] }) {
    return (
        <div>
            {resultados.map(livro => (
                <Resultado key={livro.nome}>
                    <img src={livro.src} alt="Imagem Livro"></img>
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </div>
    );
}

export default Livro