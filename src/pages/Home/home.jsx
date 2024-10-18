import Banner from '../../components/Banner/Index'
import homeBannerImage from '../../assets/Images/Homepage-banner.png'
import '../../style/pages/Home/style.scss'
import homes from '../../datas/homes.json'
import Card from '../../components/Card/Index'

function Home() {
  return (
    <div className="homepage">
      <Banner
        backgroundImage={homeBannerImage}
        title="Chez vous, partout et ailleurs"
      />
      <ul className="card-container">
        {homes.map(({ id, title, cover }, index) => (
          <Card key={index} id={id} title={title} cover={cover} />
        ))}
      </ul>
    </div>
  )
}

export default Home
