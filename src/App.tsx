import { GlobalCss } from './styles'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Cart />
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}

export default App
