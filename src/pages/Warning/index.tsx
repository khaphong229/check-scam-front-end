import arrow_down from '../../assets/images/Vector.svg'
import './styles.scss'
import { useEffect } from 'react'

function Warning() {
  useEffect(() => {
    const warningHeader = document.querySelectorAll('.warning__header')
    warningHeader.forEach((item) => item.addEventListener('click', handleShowDropdown))

    function handleShowDropdown(e) {
      const warningContent = e.currentTarget.nextElementSibling
      const warningContentAll = document.querySelectorAll('.warning__content')
      const warningIcon = e.currentTarget.querySelector('.warning__header-icon')
      const warningIconAll = document.querySelectorAll('.warning__header-icon')

      // Remove active class from other icons
      warningIconAll.forEach((item) => {
        if (item !== warningIcon) {
          item.classList.remove('active')
        }
      })

      // Close other content sections
      warningContentAll.forEach((item) => {
        if (item !== warningContent) {
          item.style.height = 0
          item.classList.remove('active')
        }
      })

      // Toggle active state for the clicked content section
      warningContent.classList.toggle('active')
      if (warningContent.classList.contains('active')) {
        warningContent.style.height = `${warningContent.scrollHeight}px`
      } else {
        warningContent.style.height = 0
      }

      // Toggle active class for the clicked icon
      warningIcon.classList.toggle('active')
    }

    return () => {
      warningHeader.forEach((item) => item.removeEventListener('click', handleShowDropdown))
    }
  }, [])

  return (
    <section className='warning'>
      <h2 className='warning__title title'>Một số kiểu lừa đảo thường gặp</h2>
      <ul className='warning__list'>
        <li className='warning__item'>
          <div className='warning__header'>
            <span className='warning__header-icon'>
              <img src={arrow_down} alt='icon' />
            </span>
            <h4 className='warning-item__title'>Giả mạo tên miền, website</h4>
          </div>
          <div className='warning__content'>
            Bọn lừa đảo mua 1 tên miền gần giống (chỉ lệch 1 vài ký tự) sau đó gắn vào web fake có giao diện giống hệt
            để lừa đảo
          </div>
        </li>
        <li className='warning__item'>
          <div className='warning__header'>
            <span className='warning__header-icon'>
              <img src={arrow_down} alt='icon' />
            </span>
            <h4 className='warning-item__title'>Giả mạo tên miền, website</h4>
          </div>
          <div className='warning__content'>
            Bọn lừa đảo mua 1 tên miền gần giống (chỉ lệch 1 vài ký tự) sau đó gắn vào web fake có giao diện giống hệt
            để lừa đảo
          </div>
        </li>
        <li className='warning__item'>
          <div className='warning__header'>
            <span className='warning__header-icon'>
              <img src={arrow_down} alt='icon' />
            </span>
            <h4 className='warning-item__title'>Giả mạo tên miền, website</h4>
          </div>
          <div className='warning__content'>
            Bọn lừa đảo mua 1 tên miền gần giống (chỉ lệch 1 vài ký tự) sau đó gắn vào web fake có giao diện giống hệt
            để lừa đảo
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Warning
