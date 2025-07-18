import { Card, Descricao, Infos, Titulo, TituloContainer } from './styles'

import hiokiImg from '../../assets/images/hioki-sushi.png'
import star from '../../assets/images/estrela.svg'
import Button from '../Button'
import Tag from '../Tag'

type Props = {
  description: string
  image: string
  title: string
  infos: string[]
  rank: string
}

const Product = ({ description, image, title, rank, infos }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div className="container-infos">
      <TituloContainer>
        <Titulo>{title}</Titulo>
        <div className="nota-estrela">
          <span>{rank}</span>
          <img src={star} alt="" />
        </div>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Button type="link" title="clique aqui e saiba mais sobre o restaurante">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Product
