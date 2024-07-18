'use client'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'

type SubmitButtonProps = {
  className?: string
  text?: string
}

export const SubmitButon = ({
  className,
  text = 'Submit'
}: SubmitButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button
      type='submit'
      size='lg'
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
