import { TouchableOpacityProps } from 'react-native'
import { Container, Text } from './styles'

interface IButton extends TouchableOpacityProps{
  title: string
  variant?: 'cancel' | 'add'
}

export function Button({ ...props }: IButton) {
  return (
    <Container variant={props.variant} {...props}>
      <Text>{props.title}</Text>
    </Container>
  )
}
