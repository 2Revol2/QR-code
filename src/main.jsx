import  React  from 'react'
import  ReactDom  from 'react-dom/client'
import { Layout } from './Layout'
import { Routes, Outlet } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
ReactDom.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter> 
  </div>
)
