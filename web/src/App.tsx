import './styles/globalStyles.css'
import logo from './assets/logo.png'
import { useState } from 'react'
import { WhatsApp } from './components/WhatsApp'

export function App() {
  const [listOrNew, setListOrNew] = useState<boolean>(false)

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

  return (
    <div className='bg-gray-950 w-full h-screen'>
      <header className='flex items-center justify-between border-b border-b-gray-500 px-5 py-3'>
        <img src={logo} alt="Logo da barbearia" className='w-[105px]'/>
        <span className='text-white text-xl font-bold'>{Hour()}</span>
      </header>

      <main className='w-full px-5 py-4'>
        <div onClick={() => setListOrNew(!listOrNew)} className='bg-gray-350 w-full h-6 rounded-lg'>
          {listOrNew && (
            <div></div>
          )}
          {!listOrNew && (
            <div></div>
          )}
        </div>
      </main>

      <WhatsApp />
    </div>
  )
}
