import DetailHeader from '../../components/DetailHeader'
import Loader from '../../components/Loader'
import ProductsList from '../../components/ProductsList'
import { useGetFeaturedRestaurantQuery } from '../../services/api'

const Detail = () => {
  const { data: cardapio, isLoading: isLoadingCardapio } =
    useGetFeaturedRestaurantQuery()

  if (cardapio) {
    return (
      <>
        <DetailHeader />
        <ProductsList
          isLoading={isLoadingCardapio}
          grid={'3'}
          foods={cardapio}
        />
      </>
    )
  }

  return <Loader />
}
export default Detail
