import React from 'react'

import Header from './components/Header'
import Social from './components/Social'
import '.././styles/index.sass'

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Social/>    
    </>
  )
}

export default App