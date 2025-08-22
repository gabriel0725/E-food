import { SyncLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <SyncLoader color={cores.bege} />
  </Container>
)

export default Loader
