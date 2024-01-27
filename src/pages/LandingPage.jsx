import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Portfolio from '../components/Portfolio/Portfolio'
import ContactUS from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'

export const LandingPage = () => {
  return (
    <>
       <Navbar />
       <Hero />
       <Portfolio />
       <ContactUS />
       <Footer />
    </>
  )
}
