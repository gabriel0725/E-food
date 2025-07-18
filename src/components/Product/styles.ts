import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid ${cores.laranja};
  position: relative;
  padding-bottom: 12px;
  margin-bottom: 48px;

  .container-infos {
    padding: 0 8px 0 8px;
  }
`

export const TituloContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;

  .nota-estrela {
    display: flex;
    align-items: center;
  }

  .nota-estrela span {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  display: block;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
