import styled, { css } from 'styled-components/native'

interface IProps {
  variant?: 'price' | 'finish'
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Name = styled.Text<IProps>`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.EXTRA_BOLD};

  ${({ variant }) => variant === 'price' && css`
    color: ${({ theme }) => theme.COLORS.GREEN_500};
    font-size: ${({ theme }) => theme.FONT_SIZE.SEMI_LARGE};
  `}

  ${({ variant }) => variant === 'finish' && css`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
    font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  `}
`

export const NameContainer = styled.View`
  align-self: flex-start;
`

export const EmptyFlatList = styled.View`
  width: 30px;
  height: 30px;
`

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 4px;
`

export const PriceContainer = styled.View`
  align-items: center;
`

export const ButtonFinish = styled.TouchableOpacity<IProps>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  margin-top: 5px;
  padding: 4px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;

  ${({ variant }) => variant === 'finish' && css`
    background-color: ${({ theme }) => theme.COLORS.LIGHT_RED};
  `}
`
