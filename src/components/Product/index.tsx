import { Card, Descricao, Infos, Titulo, TituloContainer } from './styles'

import star from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  description: string
  image: string
  title: string
  infos?: string[]
  rank?: string
  grid: '2' | '3'
  children: React.ReactNode
}

const Product = ({
  description,
  image,
  title,
  rank,
  infos,
  grid,
  children
}: Props) => (
  <Card grid={grid}>
    <img src={image} alt={title} />
    <Infos>
      {infos?.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div className="container-infos">
      <TituloContainer>
        <Titulo grid={grid}>{title}</Titulo>
        <div className="nota-estrela">
          <span>{rank}</span>
          <img src={star} alt="" />
        </div>
      </TituloContainer>
      <Descricao grid={grid}>{description}</Descricao>
      {children}
    </div>
  </Card>
)

export default Product
