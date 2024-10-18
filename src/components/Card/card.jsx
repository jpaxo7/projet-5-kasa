import '../../style/components/Card/card.scss'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  return (
    <li
      className="card"
      style={{ backgroundImage: `url(${cover})` }}
      alt={`${title} cover`}
    >
      <Link to={`../../pages/Fiche-Logement/${id}`}>
        <div className="overlay"></div>
        <h2 className="card-title">{title}</h2>
      </Link>
    </li>
  )
}

export default Card
