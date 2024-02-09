import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface FormTextInputProps {
  label: string
  name: string
  placeholder?: string
  defaultValue?: string | number
  value?: string | number
  onChange?: (e: any) => void
}
export const FormTextInput = ({ label, name, placeholder, defaultValue, value, onChange }: FormTextInputProps) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <Label>{label}</Label>
      <Input name={name} placeholder={placeholder} defaultValue={defaultValue} value={value} onChange={onChange} />
    </div>
  )
}