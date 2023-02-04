import React from 'react'
import './style.css'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div  className='App'>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  )
}
