import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Blog from '../Components/Blog'
import Service from '../Components/Service'
import About from '../Components/About'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Banner/>
      <Service/>
      <Blog/>
      <About/>
    </div>
  )
}

export default Home
