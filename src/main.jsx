import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDom from 'react-dom/client'
// ★★★ أهم تغيير: استخدم HashRouter بدلاً من BrowserRouter ★★★
import { HashRouter } from 'react-router-dom' 
import CardProvider from './components/context/CartContext'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> 
      <CardProvider>
        <App />
      </CardProvider>
    </HashRouter>
  </React.StrictMode>,
)