import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/reset.scss'
import './assets/scss/base.scss'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import ClientLayout from '../src/layouts/client/index.tsx'
import Home from 'pages/Home/index.tsx'
import ListScammers from 'pages/ListScammers/index.tsx'
import SendScam from 'pages/SendScam/index.tsx'
import AdminLayout from 'layouts/admin/index.tsx'
import Scammers from './pages/Admin/Scammers'
import Login from 'pages/Admin/Login/index.tsx'
import { getAuthToken } from 'utils/helpers.ts'

const protectAdminLoader = () => {
  const token = getAuthToken()
  if (!token) {
    return redirect('/admin/login')
  }
  return null
}

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
    path: '/admin/login',
    element: <Login />,
    loader: async () => {
      const token = getAuthToken()
      if (token) {
        return redirect('/admin')
      }
      return null
    }
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    loader: protectAdminLoader,
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
