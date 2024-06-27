import { ComponentProps, FC } from 'react'

export const Container: FC<ComponentProps<'div'>> = ({ ...props }) => {
  return <div className='grid place-items-center space-y-12 p-6' {...props} />
}
