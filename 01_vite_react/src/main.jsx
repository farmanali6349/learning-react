import React from 'react'
import ReactDOM from 'react-dom/client'

// My React Components
import App from './App.jsx' // App
import Chai from './Chai.jsx' // Chai

const customReactComponent = React.createElement(
  'a',
  {href: 'https://farmanali.com', target:'_blank'},
  "Visit to FARMANALI Website"
   )

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Chai />
  </>
)
