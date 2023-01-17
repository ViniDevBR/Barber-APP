//REACT
import { useState, useEffect } from 'react'
import { Modal, ScrollView } from 'react-native'
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
//UTILS
import { formatCoin } from '../../utils/formatCoin'
//TYPES
import { ISelects } from '../../@types/Clients'
import { API } from '../../utils/api'

interface Props {
  visible: boolean
  onClose: VoidFunction
}

export function ModalAddClient({ onClose, ...props }: Props) {
  const [fidelity, setFidelity] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<ISelects[]>([])
  const [textInput, setTextInput] = useState<string>('')
  const [services, setServices] = useState<ISelects[]>([])

  const finalValue = selectedItems.reduce((acc, ccr) => acc + ccr.price, 0)

  function handleSelectItem(service: ISelects) {
    if (selectedItems.includes(service)) {
      return setSelectedItems(prevState =>
        prevState.filter(salvedService => salvedService._id !== service._id)
      )
    }

    setSelectedItems(prevState => prevState.concat(service))
  }

  function handleNewClient() {
    const newClient = {
      name: textInput,
      services: fidelity ? [] : selectedItems.map(service => ({
        service: service._id
      }))
    }
    API.post('/clients', newClient)

    handleCancelButton()
  }

  function handleCancelButton() {
    setFidelity(false)
    setSelectedItems([])
    setTextInput('')
    onClose()
  }

  const valueOrFidelity = fidelity ? 0 : finalValue

  async function getInfosFromServer() {
    try {
      const { data } = await API.get('/services')
      setServices(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getInfosFromServer()
  },[])

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
                value={textInput}
                onChangeText={setTextInput}
              />
            </DataContent>
          </DataContainer>

          <DataContainer>
            <LateralView />

            <DataContent>
              <Text variant='title'>Serviço</Text>
              {services.map(service => (
                <Select
                  key={service._id}
                  service={service}
                  onSelectItem={handleSelectItem}
                />
              ))}
            </DataContent>
          </DataContainer>

          <DataContainer>
            <LateralView />

            <DataContent>
              <Text variant='title'>Fidelidade</Text>
              <Fidelity state={fidelity} setState={setFidelity} />
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
            <Button
              variant='cancel'
              title='Cancelar'
              onPress={handleCancelButton}
            />
            <Button
              variant='add'
              title='Adicionar'
              onPress={handleNewClient}
              disabled={!textInput}
            />
          </DataContainer>
        </Container>
      </ScrollView>
    </Modal>
  )
}
