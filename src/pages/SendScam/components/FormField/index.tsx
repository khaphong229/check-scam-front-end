import React from 'react'

interface FormFieldProps {
  label: string
  id: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'
  placeholder?: string
  required?: boolean
  value?: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  required = true,
  value,
  onChange,
  error
}) => {
  return (
    <div className='form__group'>
      <div className='form__group-top'>
        <label htmlFor='' className='form__title'>
          {label}
          {required && <span> * </span>}
        </label>
        {error && <span className='form__error'>{error}</span>}
      </div>
      <input type={type} id={id} className='form__input' placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default FormField
