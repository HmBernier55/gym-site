import { useState } from 'react'
import './App.css';
import { Header, Footer } from './components/index';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
