import './styles.scss'
import user from '../../../../assets/images/avatar-1.png'
import { useEffect, useState } from 'react'
import ModalDetailScammer from 'pages/ModalDetailScammer'
import { formatTime, getDayNow } from 'utils/helpers'
import ScammerApi from 'api/Scammer'
import { Empty } from 'antd'
import { useScammerContext } from 'contexts/ScammerContext'

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
}

interface ScammerDetail extends ScammerData {
  indexNumber: number
}

// interface ScammersProps {
//   isHome: boolean
//   listScammers?: ScammerData[]
// }

const Scammers: React.FC = () => {
  const { searchResults, isHome } = useScammerContext()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedScammer, setSelectedScammer] = useState<ScammerDetail | null>(null)
  const [scammers, setScammers] = useState<ScammerData[]>([])

  useEffect(() => {
    const fetchScammers = async () => {
      try {
        const response = await ScammerApi.getAllScammer()
        setScammers(response.data)
      } catch (error) {
        console.error('Failed to fetch scammers:', error)
      }
    }

    if (searchResults.length === 0) {
      fetchScammers()
    }
  }, [searchResults])

  const handleScammerClick = (scammer: ScammerData, index: number) => {
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

  const displayedScammers = searchResults.length > 0 ? searchResults : scammers
  const filteredScammers = isHome
    ? displayedScammers.filter((scammer) => formatTime(scammer.createdAt) === dayNow)
    : displayedScammers

  return (
    <>
      <section className='alert-scam'>
        <div className='alert-scam__header'>
          <h2 className='alert-scam__title title'>{isHome ? `Hôm nay ${dayNow}` : 'Danh sách Scammer'}</h2>
          <p className='alert-scam__desc'>CÓ {filteredScammers.length} CẢNH BÁO</p>
        </div>

        <ul className='scammer__list'>
          {filteredScammers.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Không có dữ liệu' />
          ) : (
            filteredScammers.map((scammer, index) => (
              <li key={scammer.id} className='scammer__item' onClick={() => handleScammerClick(scammer, index)}>
                <img src={user} alt='avatar' />
                <div className='scammer__info'>
                  <h3 className='scammer__name'>{scammer.nameScammer}</h3>
                  <div className='scammer__date'>
                    #{index + 1} - {formatTime(scammer.createdAt)}
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </section>

      {isModalOpen && selectedScammer && <ModalDetailScammer scammer={selectedScammer} onClose={handleCloseModal} />}
    </>
  )
}

export default Scammers
