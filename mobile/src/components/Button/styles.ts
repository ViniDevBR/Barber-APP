import styled, { css } from 'styled-components/native'

interface IButton {
  variant?: string
}

export const Container = styled.TouchableOpacity<IButton>`
  background-color: ${({ theme }) => theme.COLORS.RED};
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 50px;
  flex: 1;

  ${({ variant }) => variant === 'cancel' && css`
    margin-right: 10px;
  `}

  ${({ variant }) => variant === 'add' && css`
    margin-left: 10px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_500};
  `}

  ${({ disabled }) => disabled && css`
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  `}
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.REGULAR};
`
