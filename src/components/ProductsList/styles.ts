import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 0;
  }
`

export const List = styled.ul<Omit<Props, 'restaurants' | 'isLoading'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid === '2'
      ? 'repeat(2, minmax(300px, 1fr))'
      : 'repeat(3, minmax(300px, 1fr))'};
  column-gap: ${(props) => (props.grid === '2' ? '80px' : '32px')};
  margin-top: ${(props) => (props.grid === '2' ? '80px' : '56px')};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: ${(props) =>
      props.grid === '2'
        ? 'repeat(2, minmax(300px, 1fr))'
        : 'repeat(2, minmax(300px, 1fr))'};

    column-gap: ${(props) => (props.grid === '2' ? '40px' : '32px')};
    margin-top: ${(props) => (props.grid === '2' ? '80px' : '56px')};
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: ${(props) =>
      props.grid === '2'
        ? 'repeat(1, minmax(300px, 1fr))'
        : 'repeat(1, minmax(300px, 1fr))'};

    column-gap: ${(props) => (props.grid === '2' ? '40px' : '32px')};
    margin-top: ${(props) => (props.grid === '2' ? '80px' : '56px')};
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .iconeFechar,
  .overlay {
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${cores.laranja};

  header {
    display: flex;
    justify-content: flex-end;

    img {
      align-items: end;
      cursor: pointer;
      padding-top: 8px;
      padding-right: 8px;
    }
  }

  > div {
    display: flex;
    padding: 8px 32px 32px 32px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  .infosDish {
    padding-left: 24px;
    p {
      font-size: 14px;
      line-height: 22px;
      padding: 16px 0;
    }
  }

  .infosDish h4,
  li p {
    color: ${cores.branca};
  }

  .imgDish {
    width: 100%;
    height: 280px;
    width: 280px;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }

  .btn_width {
    width: 45%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    .btn_width {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    > div {
      display: block;
      padding: 0;
    }

    .imgDish {
      height: 180px;
      width: 85%;
      justify-self: center;
    }

    ul {
      text-align: center;
      width: 80%;
      margin: 0 auto;
    }

    .infosDish {
      padding-top: 24px;
      padding-left: 0;
    }

    .btn_width {
      width: 100%;
      padding-bottom: 24px;
    }
  }
`
