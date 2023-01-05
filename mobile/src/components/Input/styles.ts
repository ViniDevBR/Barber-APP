import { TextInput } from 'react-native'
import styled from 'styled-components/native'

interface Props {
  isFocused: boolean
}

export const InputContainer = styled.View<Props>`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  padding: 12px 16px;
  border-width: 1px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background-color: #ffffff;
  color: ${({ theme }) => theme.COLORS.GRAY_650};
  background-color: transparent;
`
