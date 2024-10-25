import Content from 'pages/Content'
import Header from './layouts/client/header/index'
import Scammers from 'pages/Scammers'
import Warning from 'pages/Warning'
import ModalDetailScammer from 'pages/ModalDetailScammer'
function App() {
  return (
    <>
      <Header />
      <Content />
      <div className="container">
        <Scammers />
        <Warning />
        <ModalDetailScammer />
      </div>

    </>
  )
}

export default App
