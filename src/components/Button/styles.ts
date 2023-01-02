import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.RED};
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  border-radius: 8px;
`

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
`
