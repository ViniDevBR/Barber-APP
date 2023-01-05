import styled, { css } from 'styled-components/native'

interface IButton {
  variant?: string
}

export const Container = styled.TouchableOpacity<IButton>`
  background-color: ${({theme}) => theme.COLORS.RED};
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  border-radius: 8px;

  ${({variant}) => variant === 'cancel' && css`
    flex: 1;
    margin-right: 10px;
  `}

  ${({variant}) => variant === 'add' && css`
    flex: 1;
    margin-left: 10px;
    background-color: ${({theme}) => theme.COLORS.GREEN_500};
  `}

  ${({disabled}) => disabled && css`
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
  `}
`

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.REGULAR};
`
