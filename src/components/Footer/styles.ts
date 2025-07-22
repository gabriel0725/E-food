import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.footer`
  text-align: center;
  background-color: ${cores.bege};
  justify-content: center;
  padding-bottom: 40px;
`

export const LogoImage = styled.img`
  margin-top: 40px;
  margin-bottom: 34px;
`

export const Socials = styled.ul`
  display: flex;
  padding-bottom: 80px;
  justify-content: center;
  gap: 8px;
`

export const MsgFooter = styled.div`
  max-width: 480px;
  place-self: center;
  font-size: 10px;
`
