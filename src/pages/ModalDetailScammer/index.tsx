import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import fjGallery from 'flickr-justified-gallery'
import closeIcon from '../../assets/images/close.svg'
import avt from '../../assets/images/avatar-1.png'
import { formatTime } from 'utils/helpers'
import './styles.scss'

interface Scammer {
  id: string
  nameScammer: string
  phoneScammer: string
  bankNumber: string
  bankName: string
  contentReport: string
  nameSender: string
  phoneSender: string
  option: 'victim' | 'helper'
  images?: string[]
  indexNumber?: number
  createdAt: string
}

interface ModalDetailScammerProps {
  scammer: Scammer
  onClose: () => void
}

const ModalDetailScammer: FC<ModalDetailScammerProps> = ({ scammer, onClose }) => {
  useEffect(() => {
    fjGallery(document.querySelectorAll('.modal__preview-images'), {
      itemSelector: '.gallery__item',
      rowHeight: 180,
      lastRow: 'start',
      gutter: 2,
      rowHeightTolerance: 0.1,
      calculateItemsHeight: false
    })
  }, [])

  return (
    <section className='modal'>
      <div className='modal__overlay' onClick={onClose}></div>
      <div className='modal__content'>
        <div className='modal__header'>
          <div className='modal__header-title'>Chi tiết tố cáo</div>
          <div className='modal__header-close' onClick={onClose}>
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
                <div className='modal__info-name'>{scammer.nameScammer}</div>
                <p className='modal__info-desc'>
                  #{scammer.indexNumber} - Tố cáo vào ngày {formatTime(scammer.createdAt)}
                </p>
              </div>
            </div>
            <div className='modal__detail'>
              <span className='modal__detail-title'>Số điện thoại</span>
              <span className='modal__detail-text'>{scammer.phoneScammer}</span>
            </div>
            <div className='modal__detail'>
              <span className='modal__detail-title'>Số tài khoản</span>
              <span className='modal__detail-text'>{scammer.bankNumber}</span>
            </div>
            <div className='modal__detail'>
              <span className='modal__detail-title'>Ngân hàng</span>
              <span className='modal__detail-text'>{scammer.bankName}</span>
            </div>
          </div>

          <div className='modal__group'>
            <div className='modal__profile'>
              <div className='modal__profile-image'>
                <img src={avt} alt='avatar' />
              </div>
              <div className='modal__info'>
                <div className='modal__info-name'>{scammer.nameSender}</div>
                <p className='modal__info-desc'>Người tố cáo</p>
              </div>
            </div>
            <div className='modal__detail'>
              <span className='modal__detail-title'>Trạng thái</span>
              <span className='modal__detail-text'>{scammer.option === 'victim' ? 'Nạn nhân' : 'Đăng hộ'}</span>
            </div>
            <div className='modal__detail'>
              <span className='modal__detail-title'>Liên hệ</span>
              <span className='modal__detail-text'>{scammer.phoneSender}</span>
            </div>
            <div className='modal__textarea'>
              <span className='modal__detail-title'>Nội dung tố cáo</span>
              <p className='modal__textarea-content'>{scammer.contentReport}</p>
            </div>
            {scammer.images && scammer.images.length > 0 && (
              <div className='modal__images'>
                <span className='modal__detail-title'>Hình ảnh</span>
                <div className='modal__preview-images'>
                  <LightGallery
                    plugins={[lgZoom, lgVideo]}
                    mode='lg-fade'
                    pager={false}
                    thumbnail={true}
                    // elementClassNames='modal__preview-images'
                    mobileSettings={{
                      controls: false,
                      showCloseIcon: false,
                      download: false,
                      rotate: false
                    }}
                  >
                    {scammer.images.map((imageItem, index) => (
                      <a
                        key={index}
                        data-pinterest-text='Pin it2'
                        data-tweet-text='lightGallery slide 2'
                        className='gallery__item'
                        data-src={imageItem}
                      >
                        <img src={imageItem} alt={`image ${index + 1}`} />
                      </a>
                    ))}
                  </LightGallery>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModalDetailScammer
