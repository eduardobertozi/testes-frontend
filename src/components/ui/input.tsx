import { cn } from '@/lib/utils'
import { ComponentProps, FC } from 'react'

export const Input: FC<ComponentProps<'input'>> = ({ className, ...props }) => {
  return (
    <input className={cn('w-full border rounded p-3', className)} {...props} />
  )
}
