//REACT
import { FlatList, FlatListProps } from 'react-native'
import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IClient } from '../clients'

interface TTitle {
  weight?: 'regular' | 'bold'
  variant?: 'logo' | 'hour' | 'total'
}

export const ContainerSafe = styled(SafeAreaView)`
  flex: 1;

  background-color: #151515;
  padding: 38px 20px;
`

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom-width: 5px;
  border-bottom-color: #fff;
  padding-bottom: 16px;
`

export const Welcome = styled.View``

export const TotalRS = styled.TouchableOpacity`
  padding: 20px 0 20px 20px;
`

export const Title = styled.Text<TTitle>`
  font-size: ${({ theme }) => theme.FONT_SIZE.REGULAR};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};

  ${({ weight }) => weight === 'bold' && css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.BIG};
  `}

  ${({ variant }) => variant === 'logo' && css`
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.BIG};
  `}

  ${({ variant }) => variant === 'hour' && css`
    font-size: ${({ theme }) => theme.FONT_SIZE.SEMI_SMALL};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.EXTRA_LIGHT};
    padding-left: 3px;
  `}

  ${({variant}) => variant === 'total' && css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.COLORS.GREEN_100};
  `}
`

export const Client = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const IconClient = styled.TouchableOpacity`
  padding: 20px 0 16px 20px;
`

export const ClientList = styled(FlatList as new (props: FlatListProps<IClient>) => FlatList<IClient>).attrs({
  contentContainerStyle: {
    paddingBottom: 100
  }})`
  padding: 0 5px;
`
