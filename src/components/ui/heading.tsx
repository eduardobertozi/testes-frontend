import { ComponentProps, FC } from 'react'

export const H1: FC<ComponentProps<'h1'>> = ({ ...props }) => {
  return <h1 className='text-3xl font-bold' {...props} />
}
