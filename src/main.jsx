import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create a root element in the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // Render the App component in strict mode (helps identify potential issues)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)