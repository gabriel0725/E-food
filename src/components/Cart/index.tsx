import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  DishDetail,
  Prices,
  CartItem,
  Title,
  InputGroup,
  Row
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import * as Yup from 'yup'

import { formataPreco } from '../ProductsList'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [step, setStep] = useState<'cart' | 'address' | 'payment' | 'finish'>(
    'cart'
  )
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const goToFinish = () => setStep('finish')
  const goToPayment = () => setStep('payment')
  const goToAddress = () => setStep('address')
  const goToCart = () => setStep('cart')

  const form = useFormik({
    initialValues: {
      fullname: '', //
      address: '',
      city: '',
      postalCode: '',
      houseNumber: '',
      addressComplement: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'Por favor informar o endereço completo')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'Por favor informar o nome da cidade completa')
        .required('O campo é obrigatório'),
      postalCode: Yup.string()
        .min(9, 'Por favor informar o CEP')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string()
        .min(2, 'Por favor informar o número da residencia')
        .required('O campo é obrigatório'),
      addressComplement: Yup.string().min(
        5,
        'informar o complemento do endereço (apto, bloco etc)'
      ),
      cardDisplayName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'Por favor informar o mês corretamente')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'Por favor informar o ano corretamente')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Por favor informar o código de segurança corretamente')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullname
        },
        delivery: {
          address: values.address,
          city: values.city,
          postalCode: values.postalCode,
          houseNumber: values.houseNumber,
          addressComplement: values.addressComplement
        },
        payment: {
          cardDisplayName: values.cardDisplayName,
          cardNumber: values.cardNumber,
          month: Number(values.expiresMonth),
          year: Number(values.expiresYear),
          code: Number(values.cardCode)
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    setStep('cart')
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
        {step === 'cart' && (
          <>
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
            <Button
              type="button"
              title="continuar com a entrega"
              onClick={goToAddress}
            >
              Continuar com a entrega
            </Button>
          </>
        )}

        {step === 'address' && (
          <form onSubmit={form.handleSubmit}>
            <InputGroup>
              <Title>Entrega</Title>
              <label htmlFor="fullname">Quem irá receber</label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                value={form.values.fullname}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('fullname') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('address') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="postalCode">CEP</label>
                <input
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  value={form.values.postalCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('postalCode') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="houseNumber">Número</label>
                <input
                  id="houseNumber"
                  type="text"
                  name="houseNumber"
                  value={form.values.houseNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('houseNumber') ? 'error' : ''}
                />
              </InputGroup>
            </Row>
            <InputGroup>
              <label htmlFor="addressComplement">Complemento (opcional)</label>
              <input
                id="addressComplement"
                type="text"
                name="addressComplement"
                value={form.values.addressComplement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={
                  checkInputHasError('addressComplement') ? 'error' : ''
                }
              />
              <ul className="btnPaymentStep">
                <li>
                  <Button
                    type="button"
                    title="continuar com o pagamento"
                    onClick={(form.handleSubmit, goToPayment)}
                  >
                    Continuar para o pagamento
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    title="Voltar para o carrinho"
                    onClick={goToCart}
                  >
                    Voltar para o carrinho
                  </Button>
                </li>
              </ul>
            </InputGroup>
          </form>
        )}

        {step === 'payment' && (
          <form onSubmit={form.handleSubmit}>
            <InputGroup>
              <Title>{`Pagamento - Valor a pagar ${formataPreco(getTotalPrice())}`}</Title>
              <label htmlFor="cardDisplayName">Nome no cartão</label>
              <input
                id="cardDisplayName"
                type="text"
                name="cardDisplayName"
                value={form.values.cardDisplayName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardDisplayName') ? 'error' : ''}
              />
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup maxWidth="88px">
                <label htmlFor="cardCode">CVV</label>
                <input
                  id="cardCode"
                  type="text"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  id="expiresMonth"
                  type="text"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  id="expiresYear"
                  type="text"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                />
              </InputGroup>
            </Row>
            <InputGroup>
              <ul className="btnPaymentStep">
                <li>
                  <Button
                    type="button"
                    title="continuar com o pagamento"
                    onClick={(form.handleSubmit, goToFinish)}
                  >
                    {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    title="voltar para a entrega"
                    onClick={goToAddress}
                  >
                    Voltar para edição do endereço
                  </Button>
                </li>
              </ul>
            </InputGroup>
          </form>
        )}

        {step === 'finish' && (
          <>
            <Title> Pedido realizado - {data?.orderId}</Title>
            <Button
              type="submit"
              title="continuar com o pagamento"
              onClick={closeCart}
            >
              Concluir
            </Button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
