import logo from '../../assets/Logo/kasa-white.png' 
import '../../style/components/Footer/style.scss'

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="Logo du site" />
            </div>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer