import "./icones.css";

import sacola from '../../imagens/sacola.svg'
import perfil from '../../imagens/perfil.svg'

const icones = [sacola, perfil];

function Icones() {
  return (
    <ul className="App-lista">
      {icones.map((icone) => (
        <li className="App-icon" key={icone.key}>
          <img src={icone} alt="ícone"></img>
        </li>
      ))}
    </ul>
  );
}

export default Icones;
