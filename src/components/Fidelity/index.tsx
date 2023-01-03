//REACT
import { useState } from 'react'
//STYLED COMPONENTS && ICONS
import { useTheme } from 'styled-components/native'
import { Container, IconContainer, Text } from './styles'
import { Feather } from '@expo/vector-icons'
//TYPES
import { IServices } from '../../@types/Clients'

interface Props {
  onSelectItem?: (service: IServices) => void
}

export function Fidelity(props: Props) {
  const { COLORS } = useTheme()
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <Container isFocused={isFocused} onPress={() => setIsFocused(!isFocused)}>
      <Text isFocused={isFocused}>{isFocused ? 'Sim' : 'Não'}</Text>

      <IconContainer>
        {isFocused ? (
          <Feather
            name='check-circle'
            size={24}
            color={COLORS.GREEN_500}
          />
        ) : (
          <Feather
            name='x-circle'
            size={24}
            color={COLORS.RED}
          />
        )}
      </IconContainer>
    </Container>
  )
}
