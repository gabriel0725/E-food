import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonOrange = styled(Link)`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  padding: 6px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
  cursor: pointer;
`

export const BtnContainer = styled.div`
  background-color: ${cores.bege};
  text-align: center;
`

export const ButtonBege = styled.button`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
