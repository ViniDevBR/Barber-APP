import styled, { css } from 'styled-components/native'

interface Props {
  isFocused: boolean
}

export const Container = styled.Pressable<Props>`
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ isFocused }) => isFocused && css`
    background-color: ${({ theme }) => theme.COLORS.GREEN_100};
  `};
`

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const Text = styled.Text<Props>`
  color: ${({ theme }) => theme.COLORS.BLACK};

  ${({ isFocused }) => isFocused && css`
    color: ${({ theme }) => theme.COLORS.BLACK};
  `};
`
