import styled from 'styled-components'
import { postFavoritos } from '../../servicos/favoritos';

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

async function insertFavorito(id) {
    await postFavoritos(id)
    alert(`Livro de id:${id} inserido!`)
}

function Livro({ resultados = [] }) {
    return (
        <div>
            {resultados.map(livro => (
                <Resultado onClick={() => insertFavorito(livro.id)} key={livro.nome}>
                    <img src={livro.src} alt="Imagem Livro"></img>
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </div>
    );
}

export default Livro