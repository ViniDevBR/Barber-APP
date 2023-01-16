import { CheckCircle, Circle } from 'phosphor-react'
import { useState } from 'react'
import { IServices } from '../@types/Clients'

interface IProps {
  service: IServices
  onSelectItem: (service: IServices) => void
}

export function Select({ onSelectItem, service }: IProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  function handleAddPrice(service: IServices) {
    setIsFocused(!isFocused)
    onSelectItem(service)
  }

  return(
    <div
      className={`
        flex items-center justify-between w-full py-1 px-4 rounded mt-1 cursor-pointer
        ${isFocused ? 'bg-white text-gray-950' : 'bg-gray-350 text-gray-850'}
      `}
      onClick={() => handleAddPrice(service)}
    >
      <span>{service.name}</span>

      {isFocused ? (
        <CheckCircle size={24} color="#004A10" weight="regular" />
      ) : (
        <Circle size={24} color="#004A10" weight="regular" />
      )}
    </div>
  )
}
