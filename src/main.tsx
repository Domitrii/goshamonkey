import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HiPricePage from './pages/HiPricePage.tsx'
import CoursesPage from './pages/CoursesPage.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/hi-price", element: <HiPricePage />},
  {path: "/courses", element: <CoursesPage />}
])

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)
