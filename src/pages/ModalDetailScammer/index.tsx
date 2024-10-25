import closeIcon from '../../assets/images/close.svg'
import avt from '../../assets/images/avatar-1.png'
import './styles.scss'

function ModalDetailScammer() {
  return (
    <>
      <section className='modal'>
        <div className='modal__overlay'></div>
        <div className='modal__content'>
          <div className='modal__header'>
            <div className='modal__header-title'>Chi tiết tố cáo</div>
            <div className='modal__header-close'>
              <img src={closeIcon} alt='close-icon' />
            </div>
          </div>
          <div className='modal__body'>
            <div className='modal__group'>
              <div className='modal__profile'>
                <div className='modal__profile-image'>
                  <img src={avt} alt='avatar' />
                </div>
                <div className='modal__info'>
                  <div className='modal__info-name'>Nguyễn Khả Phong</div>
                  <p className='modal__info-desc'>#50 - Tố vào ngày 12/02/2024</p>
                </div>
              </div>
              <div className='modal__detail'>
                <span className='modal__detail-title'>Số điện thoại</span>
                <span className='modal__detail-text'>0333990859</span>
              </div>
              <div className='modal__detail'>
                <span className='modal__detail-title'>Số tài khoản</span>
                <span className='modal__detail-text'>342423443</span>
              </div>
              <div className='modal__detail'>
                <span className='modal__detail-title'>Ngân hàng</span>
                <span className='modal__detail-text'>ACB</span>
              </div>
            </div>
            <div className='modal__group'>
              <div className='modal__profile'>
                <div className='modal__profile-image'>
                  <img src={avt} alt='avatar' />
                </div>
                <div className='modal__info'>
                  <div className='modal__info-name'>Đỗ Văn Minh</div>
                  <p className='modal__info-desc'>Người tố cáo</p>
                </div>
              </div>
              <div className='modal__detail'>
                <span className='modal__detail-title'>Trạng thái</span>
                <span className='modal__detail-text'>Nạn nhân</span>
              </div>
              <div className='modal__detail'>
                <span className='modal__detail-title'>Liên hệ</span>
                <span className='modal__detail-text'>0356655665</span>
              </div>
              <div className='modal__textarea'>
                <span className='modal__detail-title'>Nội dung tố cáo</span>
                <p className='modal__textarea-content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in{' '}
                </p>
              </div>
              <div className='modal__images'>
                <span className='modal__detail-title'>Hình ảnh</span>
                <div className='modal__preview-images'>
                  <img
                    src='https://images.unsplash.com/photo-1729731322001-40b726d476ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'
                    alt='preview-image'
                  />
                  <img
                    src='https://images.unsplash.com/photo-1729731322001-40b726d476ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'
                    alt='preview-image'
                  />
                  <img
                    src='https://images.unsplash.com/photo-1729731322001-40b726d476ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'
                    alt='preview-image'
                  />
                  <img
                    src='https://images.unsplash.com/photo-1729731322001-40b726d476ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'
                    alt='preview-image'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ModalDetailScammer
