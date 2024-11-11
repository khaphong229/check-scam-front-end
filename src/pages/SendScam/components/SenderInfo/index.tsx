import React, { useState } from 'react'
import FormField from '../FormField'
import * as Yup from 'yup'

interface SenderData {
  nameSender: string
  phoneSender: string
  option: 'victim' | 'helper'
}

interface SenderInfoProps {
  data: SenderData
  onChange: (data: Partial<SenderData>) => void
}

const validattionSchema = Yup.object().shape({
  nameSender: Yup.string().required('Vui lòng nhập tên người tố cáo'),
  phoneSender: Yup.string().required('Vui lòng nhập số điện thoại')
})

const SenderInfo: React.FC<SenderInfoProps> = ({ data, onChange }) => {
  const [errors, setErrors] = useState<Partial<SenderData>>({})
  const handleChange = (field: keyof SenderData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ [field]: e.target.value })
    validattionSchema
      .validateAt(field, { [field]: e.target.value })
      .then(() =>
        setErrors((prev) => ({
          ...prev,
          [field]: undefined
        }))
      )
      .catch((errors) =>
        setErrors((prev) => ({
          ...prev,
          [field]: errors.message
        }))
      )
  }
  return (
    <>
      <h2 className='form__heading'>Xác thực người tố cáo</h2>
      <div className='form__group-wrap'>
        <FormField
          label='Họ và tên'
          id='nameSender'
          value={data.nameSender}
          onChange={handleChange('nameSender')}
          placeholder='Nhập họ và tên...'
          required
          error={errors.nameSender}
        />
        <FormField
          label='Liên hệ (Zalo - Sđt)'
          id='phoneSender'
          type='tel'
          value={data.phoneSender}
          onChange={handleChange('phoneSender')}
          placeholder='Nhập sđt...'
          required
          error={errors.phoneSender}
        />
      </div>
      <div className='form__action-group'>
        <div className='form__action-item'>
          <input
            type='radio'
            name='option'
            id='victim'
            value='victim'
            checked={data.option === 'victim'}
            onChange={() => onChange({ option: 'victim' })}
            className='form__radio-input'
          />
          <label htmlFor='victim' className='form__title-radio'>
            Tôi là nạn nhân
          </label>
        </div>
        <div className='form__action-item'>
          <input
            type='radio'
            name='option'
            id='helper'
            value='helper'
            checked={data.option === 'helper'}
            onChange={() => onChange({ option: 'helper' })}
            className='form__radio-input'
          />
          <label htmlFor='helper' className='form__title-radio'>
            Tôi chỉ đăng hộ
          </label>
        </div>
      </div>
    </>
  )
}

export default SenderInfo
