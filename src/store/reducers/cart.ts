import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Dish = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type CartState = {
  items: Dish[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      const alreadyInCart = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!alreadyInCart) {
        state.items.push(action.payload)
      } else {
        alert('O item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
