import Logo from './../Logo/logo';
import Opcoes from './../Opcoes/opcoes';
import Icones from './../Icones/icones';

import './header.css'

function Header () {

    return (
        <header className='App-header'>
        <Logo />
        <div className='App-menu'>
          <Opcoes />
          <Icones />
        </div>
      </header>
    )

}

export default Header