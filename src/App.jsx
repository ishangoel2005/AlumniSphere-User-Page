import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import './App.css'

function App() {

  return (
      <>
      <div className='App'>
        <Navbar/>
        <Profile/>
      </div>
      </>
    
  )
}

export default App
