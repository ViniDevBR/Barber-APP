//REACT
import { useState } from 'react'
import { FlatList, Modal } from 'react-native'
//COMPONENTS
import { Input } from '../Input'
import { Select } from '../Select'
//STYLED COMPONENTS
import {
  Container,
  DataContainer,
  Text,
  LateralView,
  NameClient
} from './styles'
//API MOCK
import { services } from '../../clients'
//UTILS
import { formatCoin } from '../../utils/formatCoin'
//TYPES
import { IServices } from '../../@types/Clients'

interface Props {
  visible: boolean
  onClose: VoidFunction
}

export function ModalAddClient(props: Props) {
  const [selectedItems, setValueItems] = useState<IServices[]>([])
  const finalValue = selectedItems.reduce((acc, ccr) => acc + ccr.price, 0)

  function handleSelectItem(service: IServices) {
    if (selectedItems.includes(service)) {
      setValueItems(prev => prev.filter(value => value.id !== service.id))
    }
    setValueItems(prev => prev.concat(service))
  }

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={props.onClose}
    >
      <Container>
        <Text>Adicionar Cliente</Text>

        <DataContainer>
          <LateralView />

          <NameClient>
            <Text variant='title'>Nome</Text>
            <Input name='Nome' placeholder='Nome do cliente' icon='user' />
          </NameClient>
        </DataContainer>

        <DataContainer>
          <LateralView />

          <NameClient>
            <Text variant='title'>Serviço</Text>
            <FlatList
              data={services}
              keyExtractor={service => service.id}
              renderItem={({ item: service }) => {
                return (
                  <Select service={service} onSelectItem={handleSelectItem} />
                )
              }}
            />
          </NameClient>
        </DataContainer>

        <DataContainer>
          <Input
            name='value'
            icon='dollar-sign'
            value={formatCoin(finalValue)}
          />
        </DataContainer>
      </Container>
    </Modal>
  )
}
