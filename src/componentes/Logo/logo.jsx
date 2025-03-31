import logo from '../../imagens/logo.svg'
import './Logo.css'

function Logo () {
    return (
        <div className='App-logo'> 
          <img src={logo} alt='Logo AluraBooks' className='logo-image'></img>
          <p><strong>Alura</strong>Books</p>
        </div>
    )
} 

export default Logo