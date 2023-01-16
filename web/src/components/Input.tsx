import { InputHTMLAttributes, ReactNode } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
}

export function Input({ icon, ...props }: IProps) {
  return(
    <div className='flex items-center justify-between bg-white w-full py-1 px-4 rounded mt-1'>
      <input type="text" className='w-full outline-none bg-transparent text-gray-950 placeholder:text-gray-850' {...props} />
      <div>
        {icon}
      </div>
    </div>
  )
}