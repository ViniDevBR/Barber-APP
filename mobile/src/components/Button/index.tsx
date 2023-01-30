import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { Container, Text } from './styles'

interface IButton extends TouchableOpacityProps{
  title: string
  variant?: 'cancel' | 'add'
  isLoading?: boolean
}

export function Button({ isLoading, ...props }: IButton) {
  return (
    <Container variant={props.variant} {...props}>
      {isLoading ? (
        <ActivityIndicator size='large' color='#FFF'/>
      ) : (
        <Text>{props.title}</Text>
      )}
    </Container>
  )
}
