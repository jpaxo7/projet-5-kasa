import { Link } from 'react-router-dom'
import logo from '../../assets/Logo/kasa-red.png'
import '../../style/components/Header/style.scss'

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo du site" />
      </div>
      <div>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="../pages/A-Propos">A Propos</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
