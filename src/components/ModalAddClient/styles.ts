import styled, { css } from 'styled-components/native'

interface IText {
  variant?: 'title'
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

export const DataContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
`

export const DataContent = styled.View`
  flex: 1;
  margin-left: 8px;
`

export const LateralView = styled.View`
  background-color: ${({theme}) => theme.COLORS.BLUE_100};
  width: 5px;
  height: 92%;
  margin-top: 7px;
`
