import { Link } from 'react-router-dom'
import logo from '../../assets/Logo/kasa-red.png'
import '../../style/components/Header/style.scss'
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const isOnHomePage = location.pathname === '/'
  const isOnAboutPage = location.pathname === '/pages/A-Propos'

  return (
    <header>
      <div>
        <img src={logo} alt="Logo du site" />
      </div>
      <div>
        <nav>
          {isOnHomePage ? <p>Acceuil</p> : <Link to="/">Accueil</Link>}
          {isOnAboutPage ? (
            <p>A Propos</p>
          ) : (
            <Link to="/pages/A-Propos">A Propos</Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
