import { ScammerProvider } from 'contexts/ScammerContext'
import Content from './components/Content'
import Scammers from './components/Scammers'
import Warning from './components/Warning'

function Home() {
  return (
    <>
      <ScammerProvider>
        <Content />
        <div className='container'>
          <Scammers />
          <Warning />
        </div>
      </ScammerProvider>
    </>
  )
}

export default Home
