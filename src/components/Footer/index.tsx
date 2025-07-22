import logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com 1.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'

import { FooterBar, LogoImage, MsgFooter, Socials } from './styles'

const Footer = () => (
  <FooterBar>
    <div className="container">
      <LogoImage src={logo} alt="Logo E-food" />
      <Socials>
        <li>
          <img src={instagram} alt="" />
        </li>
        <li>
          <img src={facebook} alt="" />
        </li>
        <li>
          <img src={twitter} alt="" />
        </li>
      </Socials>
      <MsgFooter>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </MsgFooter>
    </div>
  </FooterBar>
)

export default Footer
