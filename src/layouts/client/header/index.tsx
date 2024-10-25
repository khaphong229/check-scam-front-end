import './styles.scss'
import logo from '../../../assets/images/logo.png'

function index() {
  return (
    <>
      {/* HEADER */}
      <header className='header'>
        <a href='' className='header__logo'>
          <img src={logo} alt='' className='header__logo-img' />
          <span className='header__logo-name'>Check Scam</span>
        </a>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <a href='' className='header__nav-link'>
              {' '}
              Trang chủ{' '}
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='' className='header__nav-link'>
              {' '}
              Scammer{' '}
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='' className='header__nav-link'>
              Giới thiệu
            </a>
          </li>
        </ul>
        <a href='#' className='header_btn btn'>
          Gửi tố cáo
        </a>
      </header>
      {/* end HEADER */}
    </>
  )
}

export default index
