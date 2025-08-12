import { styled } from 'styled-components'
import { cores } from '../../styles'

import fechar from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 40px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const DishDetail = styled.div`
  padding: 8px;
  position: relative;
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 16px;

  p,
  span {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.bege};
  }
`

export const CartItem = styled.li`
  display: flex;
  max-width: 344px;
  width: 100%;
  height: 100px;
  margin-bottom: 16px;
  background-color: ${cores.bege};
  position: relative;
  padding-top: 8px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 0 8px 12px 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
