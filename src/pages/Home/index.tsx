import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Restaurant from '../../models/Restaurant'

import hiokiImg from '../../assets/images/hioki-sushi.png'
import laDolceImg from '../../assets/images/la-dolce.png'

const restaurantesList: Restaurant[] = [
  {
    id: 1,
    image: hiokiImg,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    rank: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: laDolceImg,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rank: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: laDolceImg,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rank: '4.6',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 4,
    image: hiokiImg,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    rank: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 5,
    image: hiokiImg,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    rank: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 6,
    image: hiokiImg,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    rank: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList grid={'2'} restaurants={restaurantesList} />
  </>
)

export default Home
