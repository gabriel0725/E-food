import { useEffect, useState } from 'react'
import DetailHeader from '../../components/DetailHeader'
import Footer from '../../components/Footer'
import ProductsList from '../../components/ProductsList'
import { Restaurant } from '../Home'

const Detail = () => {
  const [cardapio, setCardapio] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <DetailHeader />
      <ProductsList grid={'3'} foods={cardapio} />
      <Footer />
    </>
  )
}
export default Detail
