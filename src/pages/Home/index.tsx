import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import Footer from '../../components/Footer'
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
  const { data: restaurantes } = useGetFeaturedRestaurantQuery()

  if (restaurantes) {
    return (
      <>
        <Header />
        <ProductsList grid={'2'} restaurants={restaurantes} />
        <Footer />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
