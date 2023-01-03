import styled, { css } from 'styled-components/native'

interface IText {
  variant?: 'title'
}

interface IButton {
  variant?: 'cancel'
}

export const Container = styled.View`
  flex: 1;
  background-color: #151515;
  padding: 38px 20px;
`

export const Text = styled.Text<IText>`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.BIG};

  ${({variant}) => variant === 'title' && css`
    font-size: ${({theme}) => theme.FONT_SIZE.REGULAR};
    font-weight: ${({theme}) => theme.FONT_WEIGHT.BOLD};
    margin-bottom: 8px;
  `}
`

export const DataContainer = styled.View<IButton>`
  margin-top: 16px;
  flex-direction: row;

  ${({ variant }) => variant === 'cancel' && css`
    justify-content: space-between;
    align-items: center;
  `}
`

export const DataContent = styled.Pressable`
  flex: 1;
  margin-left: 8px;
`

export const LateralView = styled.View`
  background-color: ${({theme}) => theme.COLORS.BLUE_100};
  width: 5px;
  height: 92%;
  margin-top: 7px;
`
