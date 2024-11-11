import React, { useState } from 'react'
import Breadcrumb from './components/BreadCrumb'
import ScammerInfo from './components/ScammerInfo'
import ImageUpload from './components/ImageUpload'
import SenderInfo from './components/SenderInfo'
import './styles.scss'
import ScammerApi from '../../api/Scammer'
import { MessageCustom } from '../../components/UI/Message'
interface ScammerData {
  nameScammer: string
  phoneScammer: string
  bankNumber: string
  bankName: string
  contentReport: string
}

interface SenderData {
  nameSender: string
  phoneSender: string
  option: 'victim' | 'helper'
}

const initialScammerData: ScammerData = {
  nameScammer: '',
  phoneScammer: '',
  bankNumber: '',
  bankName: '',
  contentReport: ''
}

const initialSenderData: SenderData = {
  nameSender: '',
  phoneSender: '',
  option: 'victim'
}

const SendScam: React.FC = () => {
  const [scammerData, setScammerData] = useState<ScammerData>(initialScammerData)
  const [senderData, setSenderData] = useState<SenderData>(initialSenderData)
  const [images, setImages] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const bigData = {
      ...scammerData,
      ...senderData,
      images: ['1', '2']
    }
    try {
      const response = await ScammerApi.createScammer(bigData)
      if (response.success == true) {
        MessageCustom({
          type: 'success',
          content: 'Chúc mừng bạn đã gửi đơn tố cáo thành công!'
        })
        setScammerData(initialScammerData)
        setSenderData(initialSenderData)
        setImages([])
      } else {
        MessageCustom({
          type: 'error',
          content: 'Gửi đơn tố cáo thất bại'
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      <Breadcrumb
        links={[
          { text: 'Trang chủ', href: '/' },
          { text: 'Gửi tố cáo', href: '/send-scam', active: true }
        ]}
      />
      <form className='form-report' onSubmit={handleSubmit}>
        <ScammerInfo data={scammerData} onChange={(data) => setScammerData((prev) => ({ ...prev, ...data }))} />
        <ImageUpload onImagesChange={setImages} />
        <SenderInfo data={senderData} onChange={(data) => setSenderData((prev) => ({ ...prev, ...data }))} />
        <button type='submit' className='btn form-report__btn'>
          Gửi tố cáo
        </button>
      </form>
    </>
  )
}

export default SendScam
