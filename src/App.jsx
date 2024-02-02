import { useState } from 'react'
import './App.css';
import { Header, Footer } from './components/index';
import { Outlet, ScrollRestoration } from 'react-router-dom';

function App() {

  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
