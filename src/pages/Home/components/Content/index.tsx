import './styles.scss'
function Content() {
  return (
    <>
      {/* CONTENT */}
      <section className='content'>
        <h1 className='content__heading'>KIỂM TRA & TỐ CÁO SCAMMER </h1>
        <p className='content__desc'>
          Website lưu trữ dữ liệu lừa đảo trên mxh mà không chịu bất kỳ hạn chế seach của một thuật toán nào trên
          Facebook
        </p>
        <form className='form-search'>
          <input type='text' className='form-search__input' placeholder='Kiểm tra số tài khoản ngân hàng...' />
          <button type='submit' className='btn form-search__btn'>
            Tìm kiếm
          </button>
        </form>
      </section>
      {/* end CONTENT */}
    </>
  )
}

export default Content
