import './styles.scss'
import logo from '../../../assets/images/logo.png'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [isFixed, setIsFixed] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* HEADER */}
      <header className={`header ${isFixed ? 'fixed' : ''}`}>
        <NavLink to='/' className='header__logo'>
          <img src={logo} alt='' className='header__logo-img' />
          <span className='header__logo-name'>Check Scam</span>
        </NavLink>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <NavLink to='/' className={({ isActive }) => `header__nav-link ${isActive ? 'active' : ''}`}>
              Trang chủ
            </NavLink>
          </li>
          <li className='header__nav-item'>
            <NavLink to='/scammers' className={({ isActive }) => `header__nav-link ${isActive ? 'active' : ''}`}>
              Scammer
            </NavLink>
          </li>
          <li className='header__nav-item'>
            <NavLink to='/' className={({ isActive }) => `header__nav-link ${isActive ? 'active' : ''}`}>
              Giới thiệu
            </NavLink>
          </li>
        </ul>
        <NavLink to='/send' className='header_btn btn'>
          Gửi tố cáo
        </NavLink>
      </header>
      {/* end HEADER */}
    </>
  )
}

export default Header
