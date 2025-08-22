import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Button from '../Button'
import InputMask from 'react-input-mask'
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
import { close, remove, clear } from '../../store/reducers/cart'
import * as Yup from 'yup'
import { formataPreco } from '../ProductsList'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [step, setStep] = useState<'cart' | 'address' | 'payment' | 'finish'>(
    'cart'
  )
  const [loadingStep, setLoadingStep] = useState(false)
  const navigate = useNavigate()
  const [purchase, { data, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const goToStep = (nextStep: typeof step) => {
    setLoadingStep(true)
    setTimeout(() => {
      setStep(nextStep)
      setLoadingStep(false)
    }, 500)
  }

  const goToFinish = () => goToStep('finish')
  const goToPayment = () => goToStep('payment')
  const goToAddress = () => goToStep('address')
  const goToCart = () => goToStep('cart')

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      code: Yup.string().required('O campo é obrigatório'),
      month: Yup.string()
        .required('O campo é obrigatório')
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido'),
      year: Yup.string()
        .required('O campo é obrigatório')
        .matches(/^[0-9]{4}$/, 'Ano inválido')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.code),
            expires: { month: Number(values.month), year: Number(values.year) }
          }
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
    return isTouched && isInvalid
  }

  const closeCart = () => {
    dispatch(close())
    setStep('cart')
  }

  const getTotalPrice = () =>
    items.reduce((acc, item) => acc + (item.preco || 0), 0)

  const handleSubmitAddress = async () => {
    await form.validateForm()
    if (
      !form.errors.receiver &&
      !form.errors.description &&
      !form.errors.city &&
      !form.errors.zipCode &&
      !form.errors.number
    ) {
      form.handleSubmit()
      goToPayment()
    } else {
      form.setTouched(
        {
          receiver: true,
          description: true,
          city: true,
          zipCode: true,
          number: true
        },
        true
      )
    }
  }

  const handleSubmitPayment = async () => {
    await form.validateForm()
    if (
      !form.errors.cardName &&
      !form.errors.cardNumber &&
      !form.errors.code &&
      !form.errors.month &&
      !form.errors.year
    ) {
      form.handleSubmit()
      goToFinish()
    } else {
      form.setTouched(
        {
          cardName: true,
          cardNumber: true,
          code: true,
          month: true,
          year: true
        },
        true
      )
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {loadingStep ? (
          <Loader />
        ) : (
          <>
            {step === 'cart' && (
              <>
                <DishDetail>
                  {items.length === 0 ? (
                    <p>O carrinho está vazio</p>
                  ) : (
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
                  )}
                </DishDetail>
                {items.length > 0 && (
                  <>
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
              </>
            )}

            {step === 'address' && (
              <form onSubmit={form.handleSubmit}>
                {/* Campos do endereço */}
                <InputGroup>
                  <Title>Entrega</Title>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    id="receiver"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('receiver') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="description">Endereço</label>
                  <input
                    id="description"
                    name="description"
                    value={form.values.description}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('description') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </InputGroup>
                <Row>
                  <InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                    />
                  </InputGroup>
                </Row>
                <InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <ul className="btnPaymentStep">
                    <li>
                      <Button
                        type="button"
                        title="continuar com o pagamento"
                        onClick={handleSubmitAddress}
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
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardName') ? 'error' : ''}
                  />
                </InputGroup>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </InputGroup>
                  <InputGroup maxWidth="88px">
                    <label htmlFor="code">CVV</label>
                    <InputMask
                      id="code"
                      name="code"
                      value={form.values.code}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('code') ? 'error' : ''}
                      mask="999"
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="month">Mês de vencimento</label>
                    <InputMask
                      id="month"
                      name="month"
                      value={form.values.month}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('month') ? 'error' : ''}
                      mask="99"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="year">Ano de vencimento</label>
                    <InputMask
                      id="year"
                      name="year"
                      value={form.values.year}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('year') ? 'error' : ''}
                      mask="9999"
                    />
                  </InputGroup>
                </Row>
                <InputGroup>
                  <ul className="btnPaymentStep">
                    <li>
                      <Button
                        type="button"
                        title="continuar com o pagamento"
                        onClick={handleSubmitPayment}
                      >
                        {isLoading
                          ? 'Finalizando compra...'
                          : 'Finalizar compra'}
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
                <Title>Pedido realizado - {data?.orderId}</Title>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <Button
                  type="button"
                  title="concluir"
                  onClick={() => {
                    dispatch(clear())
                    closeCart()
                    navigate('/')
                  }}
                >
                  Concluir
                </Button>
              </>
            )}
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
