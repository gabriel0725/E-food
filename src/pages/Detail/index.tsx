import DetailHeader from '../../components/DetailHeader'
import ProductsList from '../../components/ProductsList'
import { useGetFeaturedRestaurantQuery } from '../../services/api'

const Detail = () => {
  const { data: cardapio } = useGetFeaturedRestaurantQuery()

  if (cardapio) {
    return (
      <>
        <DetailHeader />
        <ProductsList grid={'3'} foods={cardapio} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Detail
