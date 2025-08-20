import styled from 'styled-components'

import bgImg from '../../assets/images/fundo.png'
import { breakpoints } from '../../styles'

export const BackgroundImg = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  height: 384px;
  padding-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
    padding-bottom: 0px;
  }
`

export const HeaderBar = styled.header`
  text-align: center;
`

export const LogoImage = styled.img`
  margin-top: 64px;
  margin-bottom: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 50px;
  }
`

export const Hero = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
`
