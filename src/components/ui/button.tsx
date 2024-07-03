import { cn } from '@/lib/utils'
import { ComponentProps, FC } from 'react'

export const Button: FC<ComponentProps<'button'>> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={cn('w-full p-3 text-white rounded bg-purple-500', className)}
      {...props}
    />
  )
}
