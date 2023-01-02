import { TouchableOpacityProps } from 'react-native'
import { Container, Text } from './styles'

interface IButton extends TouchableOpacityProps{
  title: string
}

export function Button(props: IButton) {
  return (
    <Container>
      <Text>{props.title}</Text>
    </Container>
  )
}
