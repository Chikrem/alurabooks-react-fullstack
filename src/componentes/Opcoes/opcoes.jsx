import "./opcoes.css";

const opcoesHeader = ['CATEGORIA','FAVORITOS','MINHA ESTANTE']

function Opcoes() {
  return (
    <ul className="App-lista">
      {opcoesHeader.map((texto) => (
        <li className="App-item" key={texto.key}>
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}

export default Opcoes;
