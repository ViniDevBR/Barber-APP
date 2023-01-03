//REACT
import { useState, useEffect } from 'react'
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
//COMPONENTS
import { ClientCard } from '../components/ClientCard'
import { ModalAddClient } from '../components/ModalAddClient'
import { ModalMoney } from '../components/ModalMoney'
//TYPES
import { IClient } from '../@types/Clients'

export function Home() {
  const [totalDay, setTotalDay] = useState<number>(100)
  const [totalMonth, setTotalMonth] = useState<number>(0)
  const [clientsList, setClientsList] = useState<IClient[]>([])
  const [isModalClient, setIsModalClient] = useState<boolean>(false)
  const [isModalMoney, setIsModalMoney] = useState<boolean>(false)

  const hour = new Date().getHours()
  const Hour = () => {
    if (hour >= 0 && hour < 6) {
      return 'Boa Madruga'
    }
    if (hour >= 6 && hour < 12) {
      return 'Bom dia'
    }
    if (hour >= 12 && hour < 18) {
      return 'Boa Tarde'
    }
    if (hour >= 18 && hour < 24) {
      return 'Boa Noite'
    }
  }

  function onDecrementClient(Client: IClient) {
    setClientsList(prevState =>
      prevState.filter(client => client.id !== Client.id)
    )

    handleAddToTotal(Client)
  }

  function handleAddToTotal(Client: IClient) {
    const findClient = clientsList.filter(client => client.id === Client.id)
    const findServices = findClient.map(atribute => atribute.service).flat()
    const addToTotal = findServices.reduce((acc, ccr) => acc + ccr.price, 0)
    setTotalDay(prevState => prevState + addToTotal)
    setTotalMonth(prevState => prevState + addToTotal)
  }

  const date = new Date()
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const lastDayDate = lastDay.toLocaleDateString()

  const time = Date.now()
  const today = new Date(time).toLocaleDateString()

  useEffect(() => {
    today === lastDayDate && setTotalMonth(0)
    hour === 0 && setTotalDay(0)
  },[today, hour])

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
              client={client}
              services={client.service}
              onDecrement={onDecrementClient}
            />
          )}
        />

        <ModalAddClient
          visible={isModalClient}
          onClose={() => setIsModalClient(false)}
          onAddClient={setClientsList}
        />

        <ModalMoney
          visible={isModalMoney}
          onClose={() => setIsModalMoney(false)}
          onCleanValue={() => []}
          valueDay={totalDay}
          valueMonth={totalMonth}
        />
      </ContainerSafe>
    </>
  )
}
