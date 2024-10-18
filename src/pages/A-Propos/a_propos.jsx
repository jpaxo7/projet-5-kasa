import Banner from '../../components/Banner/banner'
import Collapse from '../../components/Collapse/collapse'
import aboutBannerImage from '../../assets/Images/About-banner.png'
import '../../style/pages/A-Propos/a_propos.scss'
import aboutList from '../../datas/about-list'

function APropos() {
  return (
    <div className="a-propos">
      <Banner backgroundImage={aboutBannerImage} />
      <div className="collapse-container">
        {aboutList.map(({ title, content }, index) => (
          <Collapse key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default APropos
