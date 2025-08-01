import styled from 'styled-components'
import bgImg from '../../assets/images/fundo.png'

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
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
  }
`

export const HeroTxt = styled.div`
  position: relative;
  display: flex;
  font-size: 32px;
  padding-top: 214px;
  z-index: 1;

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
