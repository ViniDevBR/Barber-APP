import styled, { css } from 'styled-components/native'
interface IText {
  variant?: 'content'
}

export const Container = styled.View`
  background-color: #151515;
  padding: 38px 20px;
`

export const ModalContainer = styled.Modal``

export const Overlay = styled.Pressable`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.OVERLAY};
`

export const TextContent = styled.Text<IText>`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.BIG};
  margin-bottom: 28px;

  ${({ variant }) => variant === 'content' && css`
    font-size: ${({ theme }) => theme.FONT_SIZE.REGULAR};
    margin-bottom: 0px;
  `}
`
