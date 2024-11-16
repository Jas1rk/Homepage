import React from 'react'
import Banner from '../Components/Banner'
import Blog from '../Components/Blog'
import Service from '../Components/Service'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div id='home' className=''>
      <Navbar/>
      <div className='fixed  z-[999] top-[37rem] right-[4%]'>hello</div>
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
