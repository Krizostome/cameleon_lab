import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App'
import { ThemeProvider } from './src/context/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
