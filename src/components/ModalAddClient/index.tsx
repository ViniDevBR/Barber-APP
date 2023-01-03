//REACT
import { Dispatch, SetStateAction, useState } from 'react'
import { FlatList, Modal, ScrollView } from 'react-native'
//COMPONENTS
import { Input } from '../Input'
import { Select } from '../Select'
import { Fidelity } from '../Fidelity'
import { Button } from '../Button'
//STYLED COMPONENTS
import {
  Container,
  DataContainer,
  Text,
  LateralView,
  DataContent
} from './styles'
//API MOCK
import { services } from '../../clients'
//UTILS
import { formatCoin } from '../../utils/formatCoin'
//TYPES
import { IClient, IServices } from '../../@types/Clients'
//UUID
import { v1 as uuidv1} from 'uuid'

interface Props {
  visible: boolean
  onClose: VoidFunction
  onAddClient: Dispatch<SetStateAction<IClient[]>>
}

export function ModalAddClient({ onClose, onAddClient, ...props}: Props) {
  const [fidelity, setFidelity] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<IServices[]>([])
  const [textInput, setTextInput] = useState<string>('')

  const finalValue = selectedItems.reduce((acc, ccr) => acc + ccr.price, 0)

  function handleSelectItem(service: IServices) {
    if (selectedItems.includes(service)) {
      setSelectedItems(prevState =>
        prevState.filter(salvedService => salvedService.id !== service.id)
      )
    } else {
      setSelectedItems(prevState => prevState.concat(service))
    }
  }

  function handleNewClient() {
    onAddClient(prevState => prevState.concat([{
      id: uuidv1(),
      name: textInput,
      service: fidelity ? [] : selectedItems
    }]))
    
    setFidelity(false)
    setSelectedItems([])
    setTextInput('')
    onClose()
  }

  const valueOrFidelity = fidelity ? 0 : finalValue

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <ScrollView>
        <Container>
          <Text>Adicionar Cliente</Text>

          <DataContainer>
            <LateralView />

            <DataContent>
              <Text variant='title'>Nome</Text>
              <Input
                name='Nome'
                placeholder='Nome do cliente'
                icon='user'
                onChangeText={setTextInput}
              />
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
              <Fidelity state={fidelity} setState={setFidelity}/>
            </DataContent>
          </DataContainer>

          <DataContainer>
            <LateralView />

            <DataContent>
              <Text variant='title'>Valor</Text>
              <Input
                editable={false}
                name='value'
                icon='dollar-sign'
                value={formatCoin(valueOrFidelity)}
              />
            </DataContent>
          </DataContainer>

          <DataContainer variant='cancel'>
            <Button variant='cancel' title='Cancelar' onPress={onClose}/>
            <Button variant='add' title='Adicionar' onPress={handleNewClient} disabled={!textInput}/>
          </DataContainer>
        </Container>
      </ScrollView>
    </Modal>
  )
}
