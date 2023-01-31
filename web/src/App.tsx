//REACT
import { useEffect, useState } from 'react'
//BACK END
import { API } from './utils/api'
//COMPONENTS
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import { WhatsApp } from './components/WhatsApp'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { Fidelity } from './components/Fidelity'
import { BounceLoader as Loading } from 'react-spinners'
//ICONS
import { Money, User, CheckCircle } from 'phosphor-react'
//@TYPES
import { IClient, IServices } from './@types/Clients'
//OTHERS
import './styles/globalStyles.css'
import logo from './assets/logo.png'
import { formatCoin } from './utils/formatCoin'


export function App() {
  const [clients, setClients] = useState<IClient[]>([])
  const [services, setServices] = useState<IServices[]>([])
  const [selectedItems, setSelectedItems] = useState<IServices[]>([])
  const [name, setName] = useState<string>('')
  const [clientFinished, setClientFinished] = useState<boolean>(false)
  const [isFidelity, setIsFidelity] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const finalValue = selectedItems.reduce((acc, ccr) => acc + ccr.price, 0)

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

  const quantityOfClients = () => {
    const quantity = clients.length
    if (quantity === 0) {
      return 'Seja o primeiro a entrar na fila'
    }
    if (quantity === 1) {
      return `${quantity} Pesooa na fila`
    }

    return `${quantity} Pessoas na fila`
  }

  function handleSelectedItems(service: IServices) {
    if (selectedItems.includes(service)) {
      return setSelectedItems(prev => prev.filter(oldService => oldService._id !== service._id))
    }

    setSelectedItems(prev => [...prev, service])
  }

  function valueOrFidelity() {
    const name = selectedItems.map(services => services.name)
    if (name.includes('Cabelo') && name.includes('Barba') && !name.includes('Sobrancelha')) {
      return 45
    }
    if (name.includes('Cabelo') && !name.includes('Barba') && name.includes('Sobrancelha')) {
      return 35
    }
    if (name.includes('Cabelo') && name.includes('Barba') && name.includes('Sobrancelha')) {
      return 50
    }
    return finalValue
  }

  async function handleFinishClient() {
    try {
      setIsLoading(true)

      const newClient = {
        name,
        services: selectedItems.map(service => ({
          service: service._id
        })),
        fidelity: isFidelity
      }
      API.post('/clients', newClient)

    } catch (error) {
      console.log(error)

    } finally {
      setName('')
      setSelectedItems([])
      setIsFidelity(false)
      setIsLoading(false)
      setClientFinished(true)
    }
  }

  async function getInfosFromServer() {
    try {
      const [clientsData, servicesData] = await Promise.all([
        API.get('/clients'),
        API.get('/services')
      ])

      setClients(clientsData.data)
      setServices(servicesData.data)

    } catch (error) {
      console.log(error)

    } finally {
      setTimeout(() => setClientFinished(false), 3000)
    }
  }

  useEffect(() => {
    getInfosFromServer()
  },[clientFinished])

  return (
    <div className='bg-gray-950 w-full min-h-screen'>
      <header className='flex items-center justify-between border-b border-b-gray-500 px-5 py-3'>
        <img src={logo} alt='Logo da barbearia' className='w-[105px]'/>
        <span className='text-white text-xl font-bold'>{Hour()}</span>
      </header>

      <main className='w-full px-5 py-4'>
        <Tabs value='fila'>
          <TabsHeader className='bg-gray-350 bg-opacity-100 p-0 rounded'>
            <Tab value='fila' >
              <span className='font-bold text-xs'>Fila de espera</span>
            </Tab>
            <Tab value='entrar'>
              <span className='font-bold text-xs'>Entrar na fila</span>
            </Tab>
          </TabsHeader>

          <TabsBody>
            <TabPanel value='fila' className='p-0 pt-4 text-blue-gray-200'>
              <span className='text-xs font-thin'>{quantityOfClients()}</span>

              {clients.map((client, index) => {
                const position = index + 1

                return(
                  <div key={client._id} className='flex items-center justify-between w-full bg-gray-350 py-2 px-4 rounded mb-2 mt-1'>
                    <span className='text-gray-950'>{position}°</span>
                    <p className='text-gray-950 '>{client.name}</p>
                  </div>
                )})}
            </TabPanel>

            <TabPanel value='entrar' className='p-0 pt-4 text-blue-gray-200'>
              {!clientFinished && (
                <>
                  <p className='text-xs font-thin border-b border-b-gray-500 pb-1 mb-5'>
                    Ao entrar na fila, somente o dono pode remove-lo da lista de espera. Em casos de não comparecimento ao local você sera removido automaticamente da lista.
                  </p>

                  <div className='mb-4'>
                    <label htmlFor='input' className='text-white font-semibold text-xl'>Nome</label>
                    <Input
                      id='input'
                      placeholder='Digite seu nome'
                      icon={<User size={24} color='#0a0b0a' weight='duotone'/>}
                      onChange={e => setName(e.target.value)}
                      value={name}
                    />
                  </div>

                  <div className='mb-4'>
                    <label className='text-white font-semibold text-xl'>Serviço</label>
                    {services.map(service =>
                      <Select
                        key={service._id}
                        service={service}
                        onSelectItem={handleSelectedItems}
                      />
                    )}
                  </div>

                  <div className='mb-4'>
                    <label className='text-white font-semibold text-xl'>Fidelidade</label>
                    <Fidelity
                      isFocused={isFidelity}
                      onClick={() => setIsFidelity(!isFidelity)}
                    />
                  </div>

                  <div className='mb-7'>
                    <label className='text-white font-semibold text-xl'>Valor</label>
                    <Input
                      disabled
                      icon={<Money size={24} color='#000' weight='duotone' />}
                      value={formatCoin(isFidelity ? 0 : valueOrFidelity())}
                    />
                  </div>

                  <button
                    className='flex items-center justify-center text-xl font-bold text-white bg-black rounded py-[6px] w-full mb-12 disabled:bg-gray-550'
                    onClick={handleFinishClient}
                    disabled={isLoading || !name || selectedItems.length === 0}
                  >
                    {isLoading ? (
                      <Loading
                        color='#D8D8D8'
                        size={28}
                      />
                    ) : (
                      'Adicionar'
                    )}
                  </button>
                </>
              )}

              {clientFinished && (
                <div className='w-full flex flex-col items-center justify-center mt-14'>
                  <CheckCircle size={70} color='#3A3A3A' weight='regular' />

                  <p className='text-center'>Adicionado a fila com sucesso. Navegue até a lista</p>
                </div>
              )}
            </TabPanel>
          </TabsBody>
        </Tabs>
      </main>

      <WhatsApp />
    </div>
  )
}
