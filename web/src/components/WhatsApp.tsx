import { WhatsappLogo } from 'phosphor-react'

export function WhatsApp() {
  const linkWhatsApp = 'https://wa.me/5513996871913?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+tenho+algumas+duvidas.'

  return (
    <a href={linkWhatsApp} className='bg-blue-gray-100 rounded-full w-12 h-12 flex items-center justify-center fixed bottom-4 right-4 z-10' >
      <WhatsappLogo size={35} color='#00B929' weight='duotone' />
    </a>
  )
}