import arrow_down from '../../../../assets/images/Vector.svg'
import './styles.scss'
import { useState } from 'react'

interface Warning {
  id: number
  title: string
  content: string
}

function Warning() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const warningData: Warning[] = [
    {
      id: 1,
      title: 'Giả mạo tên miền, website',
      content:
        'Bọn lừa đảo mua 1 tên miền gần giống (chỉ lệch 1 vài ký tự) sau đó gắn vào web fake có giao diện giống hệt để lừa đảo'
    },
    {
      id: 2,
      title: 'Giả mạo tên miền, website',
      content:
        'Bọn lừa đảo mua 1 tên miền gần giống (chỉ lệch 1 vài ký tự) sau đó gắn vào web fake có giao diện giống hệt để lừa đảo'
    },
    {
      id: 3,
      title: 'Giả mạo tên miền, website',
      content:
        'Bọn lừa đảo mua 1 tên miền gần giống (chỉ lệch 1 vài ký tự) sau đó gắn vào web fake có giao diện giống hệt để lừa đảo'
    }
  ]

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className='warning'>
      <h2 className='warning__title title'>Một số kiểu lừa đảo thường gặp</h2>
      <ul className='warning__list'>
        {warningData.map((item) => (
          <li key={item.id} className='warning__item' onClick={() => handleItemClick(item.id)}>
            <div className='warning__header'>
              <span className={`warning__header-icon ${activeIndex === item.id ? 'active' : ''}`}>
                <img
                  src={arrow_down}
                  alt='icon'
                  style={{
                    transform: activeIndex === item.id ? 'rotate(90deg)' : 'rotate(0)',
                    transition: 'tranform ease 0.2s'
                  }}
                />
              </span>
              <h4 className='warning-item__title'>{item.title}</h4>
            </div>
            <div
              className={`warning__content ${activeIndex === item.id ? 'active' : ''}`}
              style={{
                height: activeIndex === item.id ? 'auto' : '0',
                marginTop: activeIndex === item.id ? '8px' : '0',
                opacity: activeIndex === item.id ? 1 : 0,
                transition: 'all 0.2s ease'
              }}
            >
              {item.content}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Warning
