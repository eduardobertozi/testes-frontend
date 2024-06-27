import { ComponentProps, FC } from 'react'

export const Button: FC<ComponentProps<'button'>> = ({ ...props }) => {
  return (
    <button
      className='w-full mt-2 p-3 text-white rounded bg-purple-500'
      {...props}
    />
  )
}
