import React, { useEffect, useState } from 'react'
import ScammerApi from 'api/Scammer'
import './styles.scss'
import { useLocation } from 'react-router-dom'
import TableCustom from '../../../components/UI/Table'
import ModalDetailScammer from 'pages/ModalDetailScammer'

interface ScammerData {
  id: string
  nameScammer: string
  phoneScammer: string
  bankNumber: string
  bankName: string
  contentReport: string
  nameSender: string
  phoneSender: string
  option: 'victim' | 'helper'
  images: string[]
  createdAt: string
  status: 'pending' | 'approved'
}

interface ScammerDetail extends ScammerData {
  indexNumber: number
}

const Scammers: React.FC = () => {
  const location = useLocation()
  const [scammers, setScammers] = useState<ScammerDetail[]>([])
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState<string>('Danh sách scammer')
  const [nameStatus, setNameStatus] = useState<string>('approved')
  const [isPend, setIsPend] = useState<boolean>(false)
  const [selectedScammer, setSelectedScammer] = useState<ScammerDetail | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const isPending = location.pathname === '/admin/pending'
    setIsPend(isPending ? true : false)
    setTitle(isPending ? 'Danh sách chờ duyệt' : 'Danh sách scammer')
    setNameStatus(isPending ? 'pending' : 'approved')
  }, [location.pathname])

  const fetchScammers = async () => {
    setLoading(true)
    try {
      const response = await ScammerApi.getAllScammer()
      const scammersFilterStatus = response.data.filter((scammer: ScammerData) => scammer.status == nameStatus)
      const scammersWithIndex = scammersFilterStatus.map((scammer: ScammerDetail, index: number) => ({
        ...scammer,
        indexNumber: index + 1,
        key: scammer.id
      }))

      setScammers(scammersWithIndex)
    } catch (error) {
      console.error('Failed to fetch scammers:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchScammers()
  }, [nameStatus])

  const handleViewDetail = (record: ScammerDetail) => {
    setSelectedScammer(record)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedScammer(null)
  }

  const tableProps = {
    title,
    data: scammers,
    loading,
    onDataChange: fetchScammers,
    isPend,
    onViewDetail: handleViewDetail
  }

  return (
    <>
      <TableCustom {...tableProps} />
      {isModalOpen && selectedScammer && <ModalDetailScammer scammer={selectedScammer} onClose={handleCloseModal} />}
    </>
  )
}

export default Scammers
