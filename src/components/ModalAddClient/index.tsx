//REACT
import { useState } from 'react'
import { FlatList, Modal, ScrollView } from 'react-native'
//COMPONENTS
import { Input } from '../Input'
import { Select } from '../Select'
//STYLED COMPONENTS
import {
  Container,
  DataContainer,
  Text,
  LateralView,
  DataContent
} from './styles'
import { useTheme } from 'styled-components/native'
//API MOCK
import { services } from '../../clients'
//UTILS
import { formatCoin } from '../../utils/formatCoin'
//TYPES
import { IServices } from '../../@types/Clients'
import { Fidelity } from '../Fidelity'

interface Props {
  visible: boolean
  onClose: VoidFunction
}

export function ModalAddClient(props: Props) {
  const [selectedItems, setSelectedItems] = useState<IServices[]>([])

  const finalValue = selectedItems.reduce((acc, ccr) => acc + ccr.price, 0)

  function handleSelectItem(service: IServices) {
    if (selectedItems.includes(service)) {
      setSelectedItems(prevState => {
        const itemIndex = prevState.findIndex(salvedService => salvedService.id === service.id)
        const removeItem = [...prevState]
        removeItem.splice(itemIndex, 1)

        return removeItem
      })
    } else {
      setSelectedItems(prevState => prevState.concat(service))
    }
  }

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={props.onClose}
    >
      <ScrollView >
        <Container>
          <Text>Adicionar Cliente</Text>

          <DataContainer>
            <LateralView />

            <DataContent>
              <Text variant='title'>Nome</Text>
              <Input name='Nome' placeholder='Nome do cliente' icon='user' />
            </DataContent>
          </DataContainer>

          <DataContainer>
            <LateralView />

            <DataContent>
              <Text variant='title'>Serviço</Text>
              <FlatList
                scrollEnabled={false}
                data={services}
                keyExtractor={service => service.id}
                ListHeaderComponent={
                  <>
                  
                  </>
                }
                renderItem={({ item: service }) => {
                  return (
                    <Select service={service} onSelectItem={handleSelectItem} />
                  )
                }}
              />
            </DataContent>
          </DataContainer>


          <DataContainer>
            <LateralView />

            <DataContent>
              <Text variant='title'>Fidelidade</Text>
              <Fidelity />
            </DataContent>
          </DataContainer>

          <DataContainer>
            <LateralView />

            <DataContent>
              <Text variant='title'>Valor</Text>
              <Input
                name='value'
                icon='dollar-sign'
                value={formatCoin(finalValue)}
              />
            </DataContent>
          </DataContainer>
        </Container>
      </ScrollView>
    </Modal>
  )
}
