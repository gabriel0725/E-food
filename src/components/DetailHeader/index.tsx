import {
  BackgroundImg,
  CartButton,
  HeaderBar,
  HeaderList,
  Hero,
  HeroTxt
} from './styles'

import logo from '../../assets/images/logo.png'
import { Link, useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const DetailHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

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
    return <p>Carregando...</p>
  }

  if (isError || !capaRestaurant) {
    return <p>Erro ao carregar o restaurante</p>
  }

  return (
    <BackgroundImg>
      <HeaderBar className="container">
        <HeaderList>
          <li>
            <Link to="/">Restaurantes</Link>
          </li>
          <li>
            <img src={logo} alt="Logo E-food" />
          </li>
          <li>
            <CartButton onClick={openCart}>
              {items.length} produto(s) no carrinho
            </CartButton>
          </li>
        </HeaderList>
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
