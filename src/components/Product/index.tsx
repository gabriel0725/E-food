import { Card, Descricao, Infos, Titulo, TituloContainer } from './styles'

import star from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  description: string
  image: string
  title: string
  infos?: string[]
  rank?: number
  grid: '2' | '3'
  children: React.ReactNode
  id: number
}

const Product = ({
  description,
  image,
  title,
  rank,
  infos,
  grid,
  children
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 82) {
      return descricao.slice(0, 80) + '...'
    }
    return descricao
  }

  const getTitulo = (titulo: string) => {
    if (titulo.length > 23) {
      return titulo.slice(0, 20) + '...'
    }
    return titulo
  }
  return (
    <Card grid={grid}>
      <img className="fotoRestaurante" src={image} alt={title} />
      <Infos>
        {infos?.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <div className="container-infos">
        <TituloContainer>
          <Titulo grid={grid}>{grid === '2' ? title : getTitulo(title)}</Titulo>
          <div className="nota-estrela">
            <span>{rank}</span>
            <img src={star} alt="" />
          </div>
        </TituloContainer>
        <Descricao grid={grid}>
          {grid === '2' ? description : getDescricao(description)}
        </Descricao>
        {children}
      </div>
    </Card>
  )
}

export default Product
