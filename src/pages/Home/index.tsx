import Content from './components/Content'
import Scammers from './components/Scammers'
import Warning from './components/Warning'

function Home() {
  return (
    <>
      <Content />
      <div className='container'>
        <Scammers isHome={true} />
        <Warning />
      </div>
    </>
  )
}

export default Home
