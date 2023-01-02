//REACT
import { useState } from 'react'
//STYLED-COMPONENTS && ICONS
import {
  ContainerSafe,
  Title,
  Header,
  Welcome,
  TotalRS,
  Client,
  IconClient,
  ClientList
} from './styles'
import { Ionicons } from '@expo/vector-icons'
//API MOCK
import { clients } from '../clients'
//COMPONENTS
import { ClientCard } from '../components/ClientCard'
import { ModalAddClient } from '../components/ModalAddClient'
import { ModalMoney } from '../components/ModalMoney'
//TYPES
import { IClient } from '../@types/Clients'

export function Home() {
  const [clientsList, setClientsList] = useState<IClient[]>(clients)
  const [isModalClient, setIsModalClient] = useState<boolean>(false)
  const [isModalMoney, setIsModalMoney] = useState<boolean>(false)

  const date = new Date().getHours()
  const Hour = () => {
    if (date >= 0 && date < 6) {
      return 'Boa Madruga'
    }
    if (date >= 6 && date < 12) {
      return 'Bom dia'
    }
    if (date >= 12 && date < 18) {
      return 'Boa Tarde'
    }
    if (date >= 18 && date < 24) {
      return 'Boa Noite'
    }
  }

  function onDecrementClient(clientId: string) {
    setClientsList(prevState =>
      prevState.filter(client => client.id !== clientId)
    )
  }

  return (
    <>
      <ContainerSafe>
        <Header>
          <Welcome>
            <Title>Bem vindo ao</Title>
            <Title variant='logo'>
              Barber<Title weight='bold'>APP</Title>
            </Title>
            <Title variant='hour'>{Hour()}</Title>
          </Welcome>

          <TotalRS onPress={() => setIsModalMoney(true)}>
            <Title variant='total'>Total R$</Title>
          </TotalRS>
        </Header>

        <Client>
          <Title>Clientes</Title>
          <IconClient onPress={() => setIsModalClient(true)}>
            <Ionicons name='person-add' size={24} color='white' />
          </IconClient>
        </Client>

        <ClientList
          data={clientsList}
          keyExtractor={item => item.id}
          renderItem={({ item: client }) => (
            <ClientCard
              name={client.name}
              services={client.service}
              clientId={client.id}
              onDecrement={onDecrementClient}
            />
          )}
        />

        <ModalAddClient
          visible={isModalClient}
          onClose={() => setIsModalClient(false)}
        />

        <ModalMoney
          visible={isModalMoney}
          onClose={() => setIsModalMoney(false)}
          onCleanValue={() => []}
        />
      </ContainerSafe>
    </>
  )
}
