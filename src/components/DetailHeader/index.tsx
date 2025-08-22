import {
  BackgroundImg,
  CartButton,
  Hamburger,
  HeaderBar,
  HeaderList,
  Hero,
  HeroTxt,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.png'
import { Link, useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'

import carrinho from '../../assets/images/carrinhos.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'
import Loader from '../Loader'

const DetailHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  const { id } = useParams<{ id: string }>()
  const {
    data: capaRestaurant,
    isLoading,
    isError
  } = useGetRestaurantQuery(id!)

  if (isLoading) {
    return <Loader />
  }

  if (isError || !capaRestaurant) {
    return <p>Erro ao carregar o restaurante</p>
  }

  return (
    <BackgroundImg>
      <HeaderBar className="container">
        <HeaderList>
          <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
          <li className="mobile-menu-restaurant">
            <Link to="/">Restaurantes</Link>
          </li>
          <li>
            <img src={logo} alt="Logo E-food" />
          </li>
          <li>
            <CartButton onClick={openCart}>
              {items.length} <span> - produto(s) no carrinho</span>
              <img
                className="cartIcon"
                src={carrinho}
                alt="Icone carrinho de compras"
              />
            </CartButton>
          </li>
        </HeaderList>
        <NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Restaurantes
              </Link>
            </li>
          </ul>
        </NavMobile>
      </HeaderBar>
      <Hero style={{ backgroundImage: `url(${capaRestaurant?.capa})` }}>
        <HeroTxt className="container">
          <span>{capaRestaurant?.tipo}</span>
          <h2>{capaRestaurant?.titulo}</h2>
        </HeroTxt>
      </Hero>
    </BackgroundImg>
  )
}

export default DetailHeader
