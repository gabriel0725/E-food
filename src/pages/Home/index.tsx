import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ProductsList from '../../components/ProductsList'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantes, isLoading: isLoadingRestaurant } =
    useGetFeaturedRestaurantQuery()

  if (restaurantes) {
    return (
      <>
        <Header />
        <ProductsList
          isLoading={isLoadingRestaurant}
          grid={'2'}
          restaurants={restaurantes}
        />
      </>
    )
  }

  return <Loader />
}

export default Home
