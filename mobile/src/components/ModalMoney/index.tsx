//STYLED COMPONENTS
import { Container, ModalContainer, Overlay, TextContent, ButtonsContainer } from './styles'
//COMPONENTS
import { Button } from '../Button'
//UTILS
import { formatCoin } from '../../utils/formatCoin'

interface Props {
  visible: boolean
  onClose: VoidFunction
  onCleanValues: (type: 'day' | 'month') => void
  onSyncMoney: VoidFunction
  valueDay: number
  valueMonth: number
}

export function ModalMoney({ onCleanValues, ...props }: Props) {
  return (
    <ModalContainer
      visible={props.visible}
      transparent
      animationType='fade'
      onRequestClose={props.onClose}
      onShow={props.onSyncMoney}
    >
      <Overlay onPress={props.onClose}/>
      <Container>
        <TextContent>
          Renda
        </TextContent>
        <TextContent variant='content'>
          Total do dia: <TextContent variant='content'>{formatCoin(props.valueDay)}</TextContent>
        </TextContent>
        <TextContent variant='content'>
          Total do mês: <TextContent variant='content'>{formatCoin(props.valueMonth)}</TextContent>
        </TextContent>

        <ButtonsContainer>
          <Button variant='cancel' title='Resetar Dia' onPress={() => onCleanValues('day')}/>
          <Button title='Resetar Mês' onPress={() => onCleanValues('month')}/>
        </ButtonsContainer>
      </Container>
    </ModalContainer>
  )
}
