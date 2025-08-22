import styled from 'styled-components'
import bgImg from '../../assets/images/fundo.png'

import { breakpoints, cores } from '../../styles'

export const BackgroundImg = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  height: 466px;
  padding-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 400px;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${cores.bege};
    padding: 16px;
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
    width: 200px;
    border-radius: 8px;
    z-index: 999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    a {
      color: ${cores.laranja};
      font-weight: bold;
      text-decoration: none;
      display: block;
      padding: 8px 0;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`

export const HeaderBar = styled.header`
  text-align: center;
  position: relative;
`

export const HeaderList = styled.ul`
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: flex;
    max-height: 128px;
    height: 100%;

    li img {
      padding: 16px 0;
    }

    ${HeaderBar} & .mobile-menu-restaurant {
      display: none;
    }
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 22px;

    h2 {
      font-size: 24px;
    }
  }
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  .cartIcon {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    align-items: center;

    .cartIcon {
      max-width: 24px;
      display: block;
    }

    span {
      display: none;
    }
  }
`

export const Hamburger = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.laranja};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
