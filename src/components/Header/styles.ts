import styled from 'styled-components'

import bgImg from '../../assets/images/fundo.png'

export const BackgroundImg = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  height: 384px;
  padding-bottom: 40px;
`

export const HeaderBar = styled.header`
  text-align: center;
`

export const LogoImage = styled.img`
  margin-top: 64px;
  margin-bottom: 138px;
`

export const Hero = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`
