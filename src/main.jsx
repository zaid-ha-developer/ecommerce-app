import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CardProvider from './components/context/CartContext'

// لاحظ التغيير هنا: basename أصبح يطابق الـ base في vite.config.js
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/ecommerce-app">
      <CardProvider>
        <App />
      </CardProvider>
    </BrowserRouter>
  </React.StrictMode>,
)