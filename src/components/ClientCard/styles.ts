import styled, { css } from 'styled-components/native'

interface INameProps {
  variant?: 'price' | 'finish'
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Name = styled.Text<INameProps>`
  font-size: ${({theme}) => theme.FONT_SIZE.SEMI_LARGE};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.EXTRA_BOLD};

  ${({variant}) => variant === 'price' && css`
    color: ${({theme}) => theme.COLORS.GREEN_500};
  `}

  ${({variant}) => variant === 'finish' && css`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: ${({theme}) => theme.FONT_WEIGHT.MEDIUM};
    font-size: ${({theme}) => theme.FONT_SIZE.SMALL};
  `}
`

export const NameContainer = styled.View`

`

export const Image = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`

export const PriceContainer = styled.View`

`

export const ButtonFinish = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  margin-top: 12px;
  padding: 4px 12px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
