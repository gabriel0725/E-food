import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

type CardProps = {
  grid: '2' | '3'
}

export const Card = styled.div<{ grid: '2' | '3' }>`
  background-color: ${(props) =>
    props.grid === '3' ? `${cores.laranja}` : `${cores.branca}`};
  color: ${(props) => (props.grid === '3' ? `${cores.bege}` : 'inherit')};
  border: 1px solid ${cores.laranja};
  position: relative;
  padding-bottom: 12px;
  margin-bottom: 48px;
  max-height: ${(props) => (props.grid === '3' ? `340px` : `auto`)};

  .nota-estrela {
    display: ${(props) => (props.grid === '3' ? `none` : `flex`)};
  }

  img {
    width: 100%;
    padding: ${(props) => (props.grid === '3' ? '8px' : '0px')};
  }

  .fotoRestaurante {
    height: ${(props) => (props.grid === '3' ? `168px` : `218px`)};
    object-fit: cover;
  }

  .container-infos {
    padding: 0 8px;
  }

  .nota-estrela span {
    color: ${(props) => (props.grid === '3' ? `${cores.bege}` : 'inherit')};
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
    align-items: center;
  }

  .nota-estrela span {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3<{ grid: '2' | '3' }>`
  color: ${(props) => (props.grid === '3' ? `${cores.bege}` : 'inherit')};
`

export const Descricao = styled.p<{ grid: '2' | '3' }>`
  color: ${(props) => (props.grid === '3' ? `${cores.bege}` : 'inherit')};
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
