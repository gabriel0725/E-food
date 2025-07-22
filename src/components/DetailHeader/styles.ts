import styled from 'styled-components'

import bgImg from '../../assets/images/fundo.png'
import heroImg from '../../assets/images/apresentacao.png'
import { cores } from '../../styles'

export const BackgroundImg = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  height: 466px;
  padding-bottom: 40px;
`

export const HeaderBar = styled.header`
  text-align: center;
`

export const HeaderList = styled.ul`
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;
`

export const Hero = styled.div`
  background-image: url(${heroImg});
  height: 280px;
  background-size: cover;
  background-position: center;
`

export const HeroTxt = styled.div`
  position: relative;
  display: flex;
  font-size: 32px;
  padding-top: 214px;

  span {
    color: ${cores.branca};
    font-weight: 100;
    position: absolute;
    top: 24px;
  }

  h2 {
    color: ${cores.branca};
    font-weight: bold;
    font-size: 32px;
  }
`
