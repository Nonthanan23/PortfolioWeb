import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'

import 'aos/dist/aos.css'
AOS.init()

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
