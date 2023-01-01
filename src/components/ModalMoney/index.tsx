import { Container, ModalContainer, Overlay } from './styles'

interface Props {
  visible: boolean
  onClose: VoidFunction
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

      </Container>
    </ModalContainer>
  )
}
