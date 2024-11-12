import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Blog from '../Components/Blog'
import Service from '../Components/Service'
import About from '../Components/About'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div id='home' className=''>
      <Navbar/>
      <Banner/>
      <Service/>
      <Blog/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home
