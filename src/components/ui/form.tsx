import { cn } from '@/lib/utils'
import { ComponentProps, FC } from 'react'

export const Form: FC<ComponentProps<'form'>> = ({ className, ...props }) => {
  return (
    <form
      className={cn(
        'flex flex-col items-center w-full gap-4 py-12 px-6 border rounded',
        className
      )}
      {...props}
    />
  )
}
