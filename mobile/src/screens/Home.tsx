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
import { IClient, IMoney } from '../@types/Clients'
//BACK END
import { API } from '../utils/api'

export function Home() {
  const [totalDay, setTotalDay] = useState<number>(0)
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
    try {
      handleAddToTotal(Client)
      onRemoveClient(Client)

    } catch (error) {
      console.log(error)
    }
  }

  async function onRemoveClient(Client: IClient) {
    try {
      setClientsList(prevState => prevState.filter(client => client._id !== Client._id))
      API.delete(`/clients/${Client._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleAddToTotal(Client: IClient) {
    const findClient = clientsList.filter(client => client._id === Client._id)
    const findServices = findClient.map(atribute => atribute.services).flat()
    const addToTotal = findServices.reduce((acc, ccr) => acc + ccr.service.price, 0)

    if (findClient[0].fidelity === true) {
      return
    }

    const name = findServices.map(services => services.service.name)
    if (name.includes('Cabelo') && name.includes('Barba') && !name.includes('Sobrancelha')) {
      return (
        setTotalDay(prevState => prevState + 45),
        setTotalMonth(prevState => prevState + 45)
      )
    }
    if (name.includes('Cabelo') && !name.includes('Barba') && name.includes('Sobrancelha')) {
      return (
        setTotalDay(prevState => prevState + 35),
        setTotalMonth(prevState => prevState + 35)
      )
    }
    if (name.includes('Cabelo') && name.includes('Barba') && name.includes('Sobrancelha')) {
      return (
        setTotalDay(prevState => prevState + 50),
        setTotalMonth(prevState => prevState + 50)
      )
    }

    setTotalDay(prevState => prevState + addToTotal)
    setTotalMonth(prevState => prevState + addToTotal)
  }

  async function updateMoney() {
    try {
      await API.put('/money', {
        totalOfDay: totalDay,
        totalOfMonth: totalMonth
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function handleCleanValues() {
    try {
      const infos = {
        totalOfDay: 0,
        totalOfMonth: 0
      }
      await API.put('/money', infos)

      setTotalDay(0)
      setTotalMonth(0)

    } catch (error) {
      console.log(error)
    }
  }

  const date = new Date()
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const lastDayDate = lastDay.toLocaleDateString()

  const time = Date.now()
  const today = new Date(time).toLocaleDateString()

  async function getInfosFromServer() {
    try {
      const [clientsData, moneyData] = await Promise.all([
        API.get('/clients'),
        API.get('/money')
      ])

      setClientsList(clientsData.data)


      //https://www.mongodb.com/docs/atlas/triggers/#scheduled-triggers
      const moneyInfos: Array<IMoney> = moneyData.data
      moneyInfos.map(info => (
        setTotalDay(info.totalOfDay),
        setTotalMonth(info.totalOfMonth))
      )

    } catch (error) {
      console.log(error)
    }
  }

  async function clearValues() {
    today === lastDayDate && await API.put('/money', {
      totalOfMonth: 0,
      totalOfDay: 0
    })
    hour === 0 && await API.put('/money', {
      totalOfMonth: totalMonth,
      totalOfDay: 0
    })
  }

  useEffect(() => {
    clearValues()
  }, [today, hour])

  useEffect(() => {
    getInfosFromServer()
  },[isModalClient])

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
        keyExtractor={item => item._id}
        renderItem={({ item: client }) => (
          <ClientCard
            client={client}
            services={client.services}
            onDecrement={onDecrementClient}
            onRemove={onRemoveClient}
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
        onCleanValue={handleCleanValues}
        onSyncMoney={updateMoney}
        valueDay={totalDay}
        valueMonth={totalMonth}
      />
    </ContainerSafe>
  )
}
