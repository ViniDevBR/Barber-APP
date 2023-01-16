import './styles/globalStyles.css'
import logo from './assets/logo.png'
import { useEffect, useState } from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import { WhatsApp } from './components/WhatsApp'
import { IClient, IServices } from './@types/Clients'
import { clientsTest, servicesTest } from './clients'
import { Input } from './components/Input'
import { Money, User, CheckCircle } from 'phosphor-react'
import { Select } from './components/Select'
import { Fidelity } from './components/Fidelity'
import { formatCoin } from './utils/formatCoin'
import { BounceLoader as Loading} from 'react-spinners'


export function App() {
  const [clients, setClients] = useState<IClient[]>([])
  const [name, setName] = useState<string>('')
  const [services, setServices] = useState<IServices[]>([])
  const [clientFinished, setClientFinished] = useState<boolean>(false)
  const [isFidelity, setIsFidelity] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const x = 5

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

  function handleFinishClient() {
    try {
      setIsLoading(true)

    } catch (error) {
      console.log(error)

    } finally {
      setClientFinished(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setClients(clientsTest)
    setServices(servicesTest)
  },[])

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
              <span className='text-xs font-thin'>{x} Pessoas na fila</span>

              {clients.map((client, index) => {
                const position = index + 1

                return(
                  <div key={client.id} className='flex items-center justify-between w-full bg-gray-350 py-2 px-4 rounded mb-2 mt-1'>
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
                        key={service.id}
                        service={service}
                        onSelectItem={() => []}
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
                      value={formatCoin(32)}
                    />
                  </div>

                  <button
                    className='flex items-center justify-center text-xl font-bold text-white bg-black rounded py-[6px] w-full mb-12  disabled:bg-gray-550'
                    onClick={handleFinishClient}
                    disabled={isLoading}
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
