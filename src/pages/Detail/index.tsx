import DetailHeader from '../../components/DetailHeader'
import Footer from '../../components/Footer'
import ProductsList from '../../components/ProductsList'
import { useGetFeaturedRestaurantQuery } from '../../services/api'

const Detail = () => {
  const { data: cardapio } = useGetFeaturedRestaurantQuery()

  if (cardapio) {
    return (
      <>
        <DetailHeader />
        <ProductsList grid={'3'} foods={cardapio} />
        <Footer />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Detail
