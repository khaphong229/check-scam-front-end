import { useEffect, useState } from 'react'
import './styles.scss'
import ScammerApi from 'api/Scammer'
import Scammers from '../Scammers'
import { useLocation } from 'react-router-dom'
import { useScammerContext } from 'contexts/ScammerContext'
import { MessageCustom } from 'components/UI/Message'

function Content() {
  const location = useLocation()
  const { setIsHome, setSearchResults } = useScammerContext()
  const [textSearch, setTextSearch] = useState<string>('')

  useEffect(() => {
    setIsHome(location.pathname === '/')
  }, [location, setIsHome])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value)
  }

  const handleSearch = async () => {
    try {
      const response = await ScammerApi.searchScammer(textSearch)
      if (response.data.length === 0) {
        MessageCustom({
          type: 'error',
          content: `Không tim thấy đơn tố cáo nào có cụm từ ${textSearch}`
        })
      }
      setSearchResults(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* CONTENT */}
      <section className='content'>
        <h1 className='content__heading'>KIỂM TRA & TỐ CÁO SCAMMER </h1>
        <p className='content__desc'>
          Website lưu trữ dữ liệu lừa đảo trên mxh mà không chịu bất kỳ hạn chế seach của một thuật toán nào trên
          Facebook
        </p>
        <div className='form-search'>
          <input
            type='text'
            className='form-search__input'
            placeholder='Kiểm tra số tài khoản ngân hàng...'
            onChange={handleChange}
            value={textSearch}
          />
          <button type='submit' className='btn form-search__btn' onClick={handleSearch}>
            Tìm kiếm
          </button>
        </div>
      </section>
      {/* end CONTENT */}
    </>
  )
}

export default Content
