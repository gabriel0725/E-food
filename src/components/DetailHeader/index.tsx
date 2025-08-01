import { BackgroundImg, HeaderBar, HeaderList, Hero, HeroTxt } from './styles'

import logo from '../../assets/images/logo.png'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurant } from '../../pages/Home'

const DetailHeader = () => {
  const { id } = useParams<{ id: string }>()
  const [capaRestaurant, setCapaRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        const restauranteEncontrado = res.find(
          (restaurante: Restaurant) => restaurante.id === Number(id)
        )
        setCapaRestaurant(restauranteEncontrado)
      })
  }, [id])

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
            <a href="#">0 produto(s) no carrinho</a>
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
