import Collapse from '../../components/Collapse/index'
import Carrousel from '../../components/Carrousel'
import '../../style/pages/Fiche-Logement/style.scss'
import homes from '../../datas/homes.json'
import { useParams } from 'react-router-dom'
import Rating from '../../components/Rating'

function FicheLogement() {
  const { id } = useParams()
  const logement = homes.find((home) => home.id === id)

  if (!logement) {
    return <div>Logement non trouvé</div>
  }

  return (
    <div className="fiche-logement">
      <div className="carrousel">
        <Carrousel key={FicheLogement.id} pictures={logement.pictures} />
      </div>
      <div className="house-details">
        <div className="overview">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="host">
          <div className="host-info">
            <div className="host-name">{logement.host.name}</div>
            <img
              src={logement.host.picture}
              alt={`${logement.host.name}`}
              className="host-picture"
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="collapse-menu">
        <div className="collapse-description">
          <Collapse title="Description" content={logement.description} />
        </div>
        <div className="collapse-equipments">
          <Collapse
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default FicheLogement
