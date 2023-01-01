import { Container, ModalContainer } from './styles'


interface Props {
  visible: boolean
  onClose: VoidFunction
  loading?: boolean
  onChangeStatus?: VoidFunction
}

export function ModalAddClient(props: Props) {
  return (
    <ModalContainer
      visible={props.visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={props.onClose}
    >
      <Container>

      </Container>
    </ModalContainer>
  )
}
