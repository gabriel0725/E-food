import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  DishDetail,
  Prices,
  CartItem
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import teste from '../../assets/images/marguerita.png'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <DishDetail>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => dispatch(remove(item.id))}
                />
              </CartItem>
            ))}
          </ul>
        </DishDetail>
        <Prices>
          <p>Valor total:</p>
          <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <Button type="button" title="continuar com a compra">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
