import { ComponentProps, FC } from 'react'

export const Input: FC<ComponentProps<'input'>> = ({ ...props }) => {
  return <input className='border rounded p-3' {...props} />
}
