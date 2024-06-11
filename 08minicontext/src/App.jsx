import { useState } from 'react'

import UserContextProvider from './context/UserContextProvider.jsx'
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
function App() {


  return (
    <UserContextProvider>
      <h1>React with Chai aur code</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    
    
  )
}

export default App
