import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HiPricePage from './pages/HiPricePage.tsx'
import CoursesPage from './pages/CoursesPage.tsx'
import { Elements } from '@stripe/react-stripe-js'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/hi-price", element: <HiPricePage />},
  {path: "/courses", element: <CoursesPage />}
])

const stripePromise = window.Stripe
  ? window.Stripe(import.meta.env.Publishable_Key!)
  : null;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
  </StrictMode>,
)
