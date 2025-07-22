import logo from '../../assets/images/logo.png'
import { BackgroundImg, HeaderBar, Hero, LogoImage } from './styles'

const Header = () => (
  <BackgroundImg>
    <HeaderBar className="container">
      <LogoImage src={logo} alt="Logo E-food" />
      <Hero>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Hero>
    </HeaderBar>
  </BackgroundImg>
)

export default Header
