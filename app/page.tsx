import About from '@/components/about'
import Contact from '@/components/conctact'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Services from '@/components/services'
import React from 'react'

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
