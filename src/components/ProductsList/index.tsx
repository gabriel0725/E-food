import { useParams } from 'react-router-dom'
import Button from '../Button'
import Product from '../Product'
import { Container, List, Modal, ModalContent } from './styles'
import { Restaurant } from '../../pages/Home'
import { useState } from 'react'
import close from '../../assets/images/fechar.png'

export type Props = {
  restaurants?: Restaurant[]
  grid: '2' | '3'
  foods?: Restaurant[]
}

interface ModalState {
  porcao: string
  url: string
  isVisible: boolean
  preco: number
  descricao: string
  titulo: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ restaurants, foods, grid }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: '',
    porcao: '',
    preco: 0,
    descricao: '',
    titulo: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      url: '',
      porcao: '',
      preco: 0,
      descricao: '',
      titulo: ''
    })
  }

  const { id } = useParams()
  const isRestaurantsList = restaurants && restaurants.length > 0
  const isFoodsList = foods && foods.length > 0

  const currentRestaurant = foods?.find((rest) => rest.id === Number(id))

  const getRestaurantTags = (restaurante: Restaurant) => {
    const tags = []

    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List grid={grid}>
          {isRestaurantsList &&
            restaurants!.map((restaurant) => (
              <li key={restaurant.id}>
                <Product
                  id={restaurant.id}
                  description={restaurant.descricao}
                  image={restaurant.capa}
                  title={restaurant.titulo}
                  infos={getRestaurantTags(restaurant)}
                  rank={restaurant.avaliacao}
                  grid={grid}
                >
                  <Button
                    to={`/detail/${restaurant.id}`}
                    type={grid === '3' ? 'button' : 'link'}
                    title="botao"
                  >
                    {grid === '3' ? 'Mais detalhes' : 'Saiba mais'}
                  </Button>
                </Product>
              </li>
            ))}

          {isFoodsList &&
            currentRestaurant?.cardapio.map((dish) => (
              <li key={dish.id}>
                <Product
                  id={dish.id}
                  description={dish.descricao}
                  image={dish.foto}
                  title={dish.nome}
                  grid={grid}
                >
                  <Button
                    to={`/`}
                    type={grid === '3' ? 'button' : 'link'}
                    title="botao"
                    onClick={() => {
                      setModal({
                        isVisible: true,
                        url: dish.foto,
                        porcao: dish.porcao,
                        preco: dish.preco,
                        descricao: dish.descricao,
                        titulo: dish.nome
                      })
                    }}
                  >
                    {grid === '3' ? 'Mais detalhes' : 'Saiba mais'}
                  </Button>
                </Product>
              </li>
            ))}
        </List>

        {modal.isVisible && (
          <Modal className="visivel">
            <ModalContent className="container">
              <header>
                <img src={close} alt="Ícone de fechar" onClick={closeModal} />
              </header>
              <div>
                <img className="imgDish" src={modal.url} alt="prato" />
                <ul className="infosDish">
                  <li>
                    <h4>{modal.titulo}</h4>
                  </li>
                  <li>
                    <p>{modal.descricao}</p>
                  </li>
                  <li>
                    <p>Serve: {modal.porcao}</p>
                  </li>
                  <li>
                    <div className="btn_width">
                      <Button type="button" title="Adicionar ao carrinho">
                        {`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </ModalContent>
            <div onClick={closeModal} className="overlay"></div>
          </Modal>
        )}
      </div>
    </Container>
  )
}

export default ProductsList
