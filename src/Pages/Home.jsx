import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Blog from '../Components/Blog'
import Service from '../Components/Service'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Banner/>
      <Service/>
      <Blog/>
    </div>
  )
}

export default Home
