// Início Aula-1

import './App.css';
import Logo from './componentes/Logo/logo';

import sacola from './imagens/sacola.svg'
import perfil from './imagens/perfil.svg'

const opcoesHeader = ['CATEGORIA','FAVORITOS','MINHA ESTANTE']
const icones = [sacola, perfil]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <ul className='App-lista'>
          { opcoesHeader.map( (texto) => (
            <li className='App-item' key={texto.key}><p>{texto}</p></li>
          ) ) }
          { icones.map( (icone) => (
            <li className='App-icon' key={icone.key}><img src={icone} alt='ícone'></img></li>
          ) ) }
        </ul>
      </header>
    </div>
  );
}

export default App;
