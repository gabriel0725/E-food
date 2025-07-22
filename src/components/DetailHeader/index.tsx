import { BackgroundImg, HeaderBar, HeaderList, Hero, HeroTxt } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const DetailHeader = () => (
  <BackgroundImg>
    <HeaderBar className="container">
      <HeaderList>
        <li>
          <Link to="/">Restaurantes</Link>
        </li>
        <li>
          <img src={logo} alt="Logo E-food" />
        </li>
        <li>
          <a href="#">0 produto(s) no carrinho</a>
        </li>
      </HeaderList>
    </HeaderBar>
    <Hero>
      <HeroTxt className="container">
        <span>Italiana</span>
        <h2>La Dolce Vita Trattoria</h2>
      </HeroTxt>
    </Hero>
  </BackgroundImg>
)

export default DetailHeader
