import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Blog from '../Components/Blog'
import Service from '../Components/Service'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div id='home' className=''>
      <Navbar/>
      <Banner/>
      <Service/>
      <Blog/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
