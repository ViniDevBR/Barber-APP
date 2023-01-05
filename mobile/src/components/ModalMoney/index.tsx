//STYLED COMPONENTS
import { Container, ModalContainer, Overlay, TextContent } from './styles'
//COMPONENTS
import { Button } from '../Button'
//UTILS
import { formatCoin } from '../../utils/formatCoin'

interface Props {
  visible: boolean
  onClose: VoidFunction
  onCleanValue: VoidFunction
  valueDay: number
  valueMonth: number
}

export function ModalMoney(props: Props) {
  return (
    <ModalContainer
      visible={props.visible}
      transparent
      animationType='fade'
      onRequestClose={props.onClose}
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

        <Button title='Limpar' onPress={props.onCleanValue}/>
      </Container>
    </ModalContainer>
  )
}
