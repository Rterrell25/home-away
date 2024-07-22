'use client'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
  className?: string
  text?: string
  size?: btnSize
}

export const SubmitButton = ({
  className,
  text = 'Submit',
  size = 'lg'
}: SubmitButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button
      type='submit'
      size={size}
      disabled={pending}
      className={`capitalize ${className}`}
    >
      {pending ? (
        <>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Loading...
        </>
      ) : (
        text
      )}
    </Button>
  )
}
