import {
  Container,
  DataContainer,
  Text,
  LateralView,
  NameClient
} from './styles'
import { FlatList, Modal } from 'react-native'
import { Input } from '../Input'
import { Select } from '../Select'
import { services } from '../../clients'
import { formatCoin } from '../../utils/formatCoin'
import { useState } from 'react'

interface Props {
  visible: boolean
  onClose: VoidFunction
  loading?: boolean
  onChangeStatus?: VoidFunction
}

export function ModalAddClient(props: Props) {
  const [valueItems, setValueItems] = useState<number[]>([])
  const finalValue = valueItems.reduce((acc, ccr) => acc + ccr, 0)

  function handleAddItem(price: number, id: string) {
    setValueItems(prev => prev.concat(price))
    setValueItems(prev => prev.filter(value => value))
  }
  console.log(valueItems)
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
                  <Select
                    name={service.name}
                    price={service.price}
                    id={service.id}
                    onAddPrice={handleAddItem}
                  />
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
