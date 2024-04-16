import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero';
import FAQs from './components/FAQs';
import { Footer } from './components/Footer';
import Services from './components/Services';

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <Services/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default App;
