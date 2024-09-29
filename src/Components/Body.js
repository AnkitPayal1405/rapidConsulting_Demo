import React from 'react'
import Tagline from './Tagline'
import Services from './Services'
import Achievment from './Achievment'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='bg-[#FFF8E7]'>
        <Tagline/>
        <Services/>
        <Achievment/>
    </div>
  )
}

export default Body