import { ScammerProvider } from 'contexts/ScammerContext'
import Content from '../Home/components/Content'
import Scammers from '../Home/components/Scammers'

function ListScammers() {
  return (
    <>
      <ScammerProvider>
        <Content />
        <div className='container'>
          <Scammers />
        </div>
      </ScammerProvider>
    </>
  )
}

export default ListScammers
