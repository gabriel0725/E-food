import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
