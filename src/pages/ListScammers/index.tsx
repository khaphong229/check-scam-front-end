import Content from '../Home/components/Content'
import Scammers from '../Home/components/Scammers'

function ListScammers() {
  return (
    <>
      <Content />
      <div className='container'>
        <Scammers isHome={false} />
      </div>
    </>
  )
}

export default ListScammers
