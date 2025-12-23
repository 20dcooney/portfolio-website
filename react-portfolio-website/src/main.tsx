import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Style.css'
import Home from './Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
