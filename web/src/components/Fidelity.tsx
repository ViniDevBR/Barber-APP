import { CheckCircle, XCircle } from 'phosphor-react'

interface IProps {
  isFocused: boolean
  onClick: VoidFunction
}

export function Fidelity({ isFocused, onClick }: IProps) {
  return(
    <div
      className={`
        flex items-center justify-between w-full py-1 px-4 rounded mt-1 cursor-pointer
        ${isFocused ? 'bg-green-150 text-gray-950' : 'bg-gray-350 text-gray-850'}
      `}
      onClick={onClick}
    >
      <span>{isFocused ? 'Sim' : 'Não'}</span>

      {isFocused ? (
        <CheckCircle size={24} color="#004A10" weight="regular" />
      ) : (
        <XCircle size={24} color="#FF0000" weight="regular" />
      )}
    </div>
  )
}