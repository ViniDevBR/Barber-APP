//REACT
import { Dispatch, SetStateAction } from 'react'
import { TouchableOpacityProps } from 'react-native'
//STYLED COMPONENTS && ICONS
import { useTheme } from 'styled-components/native'
import { Container, IconContainer, Text } from './styles'
import { Feather } from '@expo/vector-icons'

interface Props extends TouchableOpacityProps {
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}
export function Fidelity({ state, setState, ...props}: Props) {
  const { COLORS } = useTheme()

  return (
    <Container isFocused={state} onPress={() => setState(!state)} {...props}>
      <Text isFocused={state}>{state ? 'Sim' : 'Não'}</Text>

      <IconContainer>
        {state ? (
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
