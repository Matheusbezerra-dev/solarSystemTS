import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SolarProvider from './context/SolarProvider'
import GlobalStyle from './style/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SolarProvider>
      <GlobalStyle />    
      <App />
    </SolarProvider>
  </React.StrictMode>,
)
