import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #151515;
  padding: 38px 20px;
`

export const ModalContainer = styled.Modal``

export const Overlay = styled.Pressable`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.OVERLAY};
`
