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
import { useState } from 'react'
import { clients, IClient } from '../clients'
import { ClientCard } from '../components/ClientCard'

export function Home() {
  const [clientsList, setClientsList] = useState<IClient[]>(clients)

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

  return (
    <ContainerSafe>
      <Header>
        <Welcome>
          <Title>Bem vindo ao</Title>
          <Title variant='logo'>
            Barber<Title weight='bold'>APP</Title>
          </Title>
          <Title variant='hour'>{Hour()}</Title>
        </Welcome>

        <TotalRS>
          <Title variant='total'>Total R$</Title>
        </TotalRS>
      </Header>

      <Client>
        <Title>Clientes</Title>
        <IconClient>
          <Ionicons name='person-add' size={24} color='white' />
        </IconClient>
      </Client>

      <ClientList
        data={clientsList}
        keyExtractor={item => item.id}
        renderItem={({item: client}) => (
          <ClientCard
            key={client.id}
            name={client.name}
            services={client.service}
          />

        )}
      />
    </ContainerSafe>
  )
}
