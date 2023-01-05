//REACT
import { useState } from 'react'
//STYLED COMPONENTS && ICONS
import { useTheme } from 'styled-components/native'
import { Container, IconContainer, Text } from './styles'
import { Feather } from '@expo/vector-icons'
//TYPES
import { IServices } from '../../@types/Clients'

interface Props {
  service: IServices
  onSelectItem: (service: IServices) => void
}

export function Select({ onSelectItem, service }: Props) {
  const { COLORS } = useTheme()
  const [isFocused, setIsFocused] = useState<boolean>(false)

  function handleAddPrice(service: IServices) {
    setIsFocused(!isFocused)
    onSelectItem(service)
  }

  return (
    <Container isFocused={isFocused} onPress={() => handleAddPrice(service)}>
      <Text isFocused={isFocused}>{service.name}</Text>

      <IconContainer>
        {isFocused ? (
          <Feather
            name='check-circle'
            size={24}
            color={COLORS.GREEN_500}
          />
        ) : (
          <Feather
            name='circle'
            size={24}
            color={COLORS.GRAY_650}
          />
        )}
      </IconContainer>
    </Container>
  )
}
