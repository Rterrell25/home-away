import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type FormInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
}

export const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  placeholder
}: FormInputProps) => {
  return (
    <div className='mb-2'>
      <Label className='capitalize' htmlFor={name}>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  )
}
