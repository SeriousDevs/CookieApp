import { memo } from 'react';
import Cookie from './Cookie/Cookie';
import { Container } from './main.styled'

const Main = () => {

  return (
    <Container>
      <Cookie/>
    </Container>
  )
}
 export default memo(Main)

