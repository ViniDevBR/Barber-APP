import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { Container, IconContainer, Text } from './styles'
import { Feather } from '@expo/vector-icons'

interface Props {
  id: string
  name: string
  price: number
  onAddPrice: (price: number, id: string) => void
}

export function Select(props: Props) {
  const { COLORS } = useTheme()
  const [isFocused, setIsFocused] = useState<boolean>(false)

  function handleAddPrice(price: number, id: string) {
    setIsFocused(!isFocused)
    if (!isFocused) {
      props.onAddPrice(price, id)
    }
  }

  return (
    <Container
      isFocused={isFocused}
      onPress={() => handleAddPrice(props.price, props.id)}
    >
      <Text isFocused={isFocused}>{props.name}</Text>

      <IconContainer>
        {isFocused ? (
          <Feather
            name='check-circle'
            size={24}
            color={isFocused ? COLORS.GREEN_500 : COLORS.GRAY_650}
          />
        ) : (
          <Feather
            name='circle'
            size={24}
            color={isFocused ? COLORS.GREEN_500 : COLORS.GRAY_650}
          />
        )}
      </IconContainer>
    </Container>
  )
}
