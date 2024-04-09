import React from 'react'
import Searchpage from './components/Searchpage'
import Nav from './components/Nav'
import Facilities from './components/Facilities'
import Categories from './pages/Categories'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const Homepage = () => {
  return (
    <>
      <Nav />
      <Searchpage />
      <Facilities facilities={"24hrs Wifi Avilability"} fitness={"Fitness facilities"} />
      <Categories />
      <About/>
      <Contact/>
      <Footer/>




    </>
  )
}

export default Homepage
