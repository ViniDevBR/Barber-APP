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
import { IClient } from './@types/Clients'
import { clientsTest } from './clients'

export function App() {
  const [clients, setClients] = useState<IClient[]>([])
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

  useEffect(() => {
    setClients(clientsTest)
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
            <TabPanel value='entrar'>
            OLA MUNDO 2
            </TabPanel>
          </TabsBody>
        </Tabs>
      </main>

      <WhatsApp />
    </div>
  )
}
