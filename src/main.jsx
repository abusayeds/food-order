import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './Components/Contexts/Context.jsx'
import Main from './layout/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 


    <Context>
    <App>
     
    </App>
    </Context>
  </React.StrictMode>,
)
