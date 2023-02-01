import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'


export default function App(): JSX.Element {
  return (
    <>      
      <Header />
      <Home />
      <Footer />
    </>
  )
}