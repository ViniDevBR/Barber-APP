import { WhatsappLogo } from 'phosphor-react'

export function WhatsApp() {
  const linkWhatsApp = 'https://wa.me/5513996871913?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+tenho+algumas+duvidas.'

  return (
    <a href={linkWhatsApp} className='bg-green-450 rounded-full w-12 h-12 flex items-center justify-center fixed bottom-0 right-0' >
      <WhatsappLogo size={24} color='#00a303' weight='duotone' />
    </a>
  )
}