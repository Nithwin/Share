import React from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import Partners from './pages/Partners'
import Team from './pages/Team'
import Works from './pages/Works'
import Plans from './pages/Plans'
import ContactUs from './pages/ContactUs'
import Footer from './pages/Footer'
import GoTop from './components/GoTop'

const App = () => {
  return (
    <div className='relative'>
        <GoTop />
        <Header />
        <Home />
        <Partners />
        <Team />
        <Works />
        <Plans />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default App
