import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/reset.scss'
import './assets/scss/base.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ClientLayout from '../src/layouts/client/index.tsx'
import Home from 'pages/Home/index.tsx'
import ListScammers from 'pages/ListScammers/index.tsx'
import SendScam from 'pages/SendScam/index.tsx'
import AdminLayout from 'layouts/admin/index.tsx'
import Scammers from './pages/Admin/Scammers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'scammers',
        element: <ListScammers />
      },
      {
        path: 'send',
        element: <SendScam />
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <Scammers />
      },
      {
        path: 'pending',
        element: <Scammers />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
