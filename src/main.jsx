/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const DATA = [
  { id:"todo-0", name:"Eat", completed: true },
  { id:"todo-1", name:"Sleep", completed: false },
  { id:"todo-2", name:"Pray", completed: false },

]


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)
