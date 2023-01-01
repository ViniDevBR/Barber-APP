import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  padding: 12px 20px;
  border-radius: 8px;
`
export const Name = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SEMI_LARGE};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.EXTRA_BOLD};
`

export const NameContainer = styled.View`
  
`
