import Restaurant from '../../models/Restaurant'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
  grid: '2' | '3'
}

const ProductsList = ({ restaurants, grid }: Props) => (
  <Container>
    <div className="container">
      <List grid={grid}>
        {restaurants.map((restaurants) => (
          <Product
            key={restaurants.id}
            description={restaurants.description}
            image={restaurants.image}
            title={restaurants.title}
            infos={restaurants.infos}
            rank={restaurants.rank}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
