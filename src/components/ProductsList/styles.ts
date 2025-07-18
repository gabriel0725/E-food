import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.section`
  padding: 32px 0;
`

export const List = styled.ul<Omit<Props, 'restaurants'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid === '2' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: ${(props) => (props.grid === '2' ? '80px' : '32px')};
  margin-top: ${(props) => (props.grid === '2' ? '80px' : '56px')};
`
