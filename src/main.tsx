import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/reset.scss'
import './assets/scss/base.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ClientLayout from '../src/layouts/client/index.tsx'
import Home from 'pages/Home/index.tsx'
import ListScammers from 'pages/ListScammers/index.tsx'
import SendScam from 'pages/SendScam/index.tsx'

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
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
