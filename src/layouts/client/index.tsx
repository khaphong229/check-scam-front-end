import Header from './header'
import { Outlet } from 'react-router-dom'

function ClientLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default ClientLayout
