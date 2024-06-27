import { ComponentProps, FC } from 'react'

export const Form: FC<ComponentProps<'form'>> = ({ ...props }) => {
  return <form className='flex flex-col w-full gap-2' {...props} />
}
