import React, { useState } from 'react'
import FormField from '../FormField'
import * as Yup from 'yup'

interface ScammerData {
  nameScammer: string
  phoneScammer: string
  bankNumber: string
  bankName: string
  contentReport: string
}

interface ScammerInfoProps {
  data: ScammerData
  onChange: (data: Partial<ScammerData>) => void
}

const validationSchema = Yup.object().shape({
  nameScammer: Yup.string().required('Vui lòng nhập tên kẻ lừa đảo'),
  phoneScammer: Yup.string().required('Vui lòng nhập số điện thoại của kẻ lừa đảo'),
  bankNumber: Yup.string().required('Vui lòng nhập số tài khoản lừa đảo'),
  bankName: Yup.string().required('Vui lòng nhập ngân hàng mà kẻ lừa đảo sử dụng'),
  contentReport: Yup.string().required('Yêu cầu nhập nội tố cáo')
})

const ScammerInfo: React.FC<ScammerInfoProps> = ({ data, onChange }) => {
  const [errors, setErrors] = useState<Partial<ScammerData>>({})
  const handleChange = (field: keyof ScammerData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange({ [field]: e.target.value })
    validationSchema
      .validateAt(field, { [field]: e.target.value })
      .then(() =>
        setErrors((prev) => ({
          ...prev,
          [field]: undefined
        }))
      )
      .catch((error) =>
        setErrors((prev) => ({
          ...prev,
          [field]: error.message
        }))
      )
  }
  return (
    <>
      <h2 className='form__heading'>Thông tin kẻ lừa đảo</h2>
      <div className='form__group-wrap'>
        <FormField
          label='Tên kẻ lừa đảo'
          id='nameScammer'
          value={data.nameScammer}
          onChange={handleChange('nameScammer')}
          placeholder='Nhập tên kẻ lừa đảo'
          required
          error={errors.nameScammer}
        />
        <FormField
          label='Số điện thoại'
          id='phoneScammer'
          type='tel'
          value={data.phoneScammer}
          onChange={handleChange('phoneScammer')}
          placeholder='Nhập số điện thoại'
          required
          error={errors.phoneScammer}
        />
      </div>
      <div className='form__group-wrap'>
        <FormField
          label='Số tài khoản'
          id='bankNumber'
          value={data.bankNumber}
          onChange={handleChange('bankNumber')}
          placeholder='Nhập số tài khoản'
          required
          error={errors.bankNumber}
        />
        <FormField
          label='Ngân hàng'
          id='bankName'
          value={data.bankName}
          onChange={handleChange('bankName')}
          placeholder='Nhập tên ngân hàng'
          required
          error={errors.bankName}
        />
      </div>
      <div className='form__group'>
        <textarea
          id='contentReport'
          className='form_textarea'
          placeholder='Nội dung tố cáo...'
          value={data.contentReport}
          onChange={handleChange('contentReport')}
          required
        />
      </div>
    </>
  )
}

export default ScammerInfo
