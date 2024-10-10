import Banner from '../../components/Banner/Index'
import Collapse from '../../components/Collapse/index'
import aboutBannerImage from '../../assets/Images/About-banner.png'
import '../../style/pages/A-Propos/style.scss'
import aboutList from '../../datas/about-list'

function APropos() {
  return (
    <div className="a-propos">
      <Banner backgroundImage={aboutBannerImage} />
      <div className="collapse-container">
        {aboutList.map(({ title, content, index }) => (
          <Collapse index={index} title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default APropos
