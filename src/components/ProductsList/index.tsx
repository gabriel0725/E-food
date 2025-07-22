import { Key } from 'react'
import Food from '../../models/Food'
import Restaurant from '../../models/Restaurant'
import Button from '../Button'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurants?: Restaurant[]
  grid: '2' | '3'
  foods?: Food[]
}

const ProductsList = ({ restaurants, foods, grid }: Props) => {
  const isRestaurantsList = restaurants && restaurants.length > 0
  const isFoodsList = foods && foods.length > 0

  return (
    <Container>
      <div className="container">
        <List grid={grid}>
          {isRestaurantsList &&
            restaurants!.map((restaurant) => (
              <Product
                key={restaurant.id}
                description={restaurant.description}
                image={restaurant.image}
                title={restaurant.title}
                infos={restaurant.infos}
                rank={restaurant.rank}
                grid={grid}
              >
                <Button
                  to="/detail"
                  type={grid === '3' ? 'button' : 'link'}
                  title="botao"
                >
                  {grid === '3' ? 'Adicionar ao carrinho' : 'Saiba mais'}
                </Button>
              </Product>
            ))}

          {isFoodsList &&
            foods!.map((food) => (
              <Product
                key={food.id}
                description={food.description}
                image={food.image}
                title={food.title}
                grid={grid}
              >
                <Button
                  to="/detail"
                  type={grid === '3' ? 'button' : 'link'}
                  title="botao"
                >
                  {grid === '3' ? 'Adicionar ao carrinho' : 'Saiba mais'}
                </Button>
              </Product>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
