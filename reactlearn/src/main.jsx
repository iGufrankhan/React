import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const aReactElement = React.createElement(
  'a',
  { href: "http://google.com", target: "_blank" },
  "Click to me for visit"
)

function Myapp()
{
   return (
    <div>
      <h1>google is google</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
 Myapp()
)
