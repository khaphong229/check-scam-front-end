import './styles.scss'
import user from '../../../../assets/images/avatar-1.png'
import { useEffect, useState } from 'react'
import ModalDetailScammer from 'pages/ModalDetailScammer'
import { formatTime, getDayNow } from 'utils/helpers'
import ScammerApi from 'api/Scammer'
import moment from 'moment'
import { Empty } from 'antd'

interface Scammer {
  id: number
  name: string
  date: string
  avatar: string
  reportNumber: number
}

interface ScammerData {
  nameScammer: string
  phoneScammer: string
  bankNumber: string
  bankName: string
  contentReport: string
  nameSender: string
  phoneSender: string
  option: 'victim' | 'helper'
  images?: string[]
}

interface ScammerDetail extends ScammerData {
  id: string
  indexNumber: number
  images: string[]
}

interface ScammersProps {
  isHome: boolean
}

const Scammers: React.FC<ScammersProps> = ({ isHome }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedScammer, setSelectedScammer] = useState<ScammerDetail | null>(null)
  const [scammers, setScammers] = useState<ScammerDetail[]>([])

  useEffect(() => {
    const fetchScammers = async () => {
      try {
        const response = await ScammerApi.getAllScammer()
        setScammers(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchScammers()
  }, [])

  const handleScammerClick = (scammer: Scammer, index: number) => {
    setSelectedScammer({
      ...scammer,
      indexNumber: index + 1
    })
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedScammer(null)
  }
  const dayNow = getDayNow()

  const countScammer = () => {
    if (isHome) {
      return scammers.filter((scammer) => formatTime(scammer.createdAt) === dayNow)
    } else {
      return scammers
    }
  }

  return (
    <>
      <section className='alert-scam'>
        <div className='alert-scam__header'>
          <h2 className='alert-scam__title title'>{`${isHome ? `Hôm nay ${dayNow}` : 'Danh sách Scam'}`}</h2>
          <p className='alert-scam__desc'>CÓ {countScammer().length} CẢNH BÁO</p>
        </div>

        <ul className='scammer__list'>
          {countScammer().length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Không có dữ liệu' />}
          {countScammer().map((scammer, index) => (
            <li key={scammer.id} className='scammer__item' onClick={() => handleScammerClick(scammer, index)}>
              <img src={user} alt='avatar' />
              <div className='scammer__info'>
                <h3 className='scammer__name'>{scammer.nameScammer}</h3>
                <div className='scammer__date'>
                  #{index + 1} - {formatTime(scammer.createdAt)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {isModalOpen && selectedScammer && <ModalDetailScammer scammer={selectedScammer} onClose={handleCloseModal} />}
    </>
  )
}

export default Scammers
