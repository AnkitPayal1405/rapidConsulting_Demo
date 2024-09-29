import React from 'react'
import businessPhotu from '../Assests/business photu.png'

const Tagline = () => {
  return (
    <div>
        <div className=' flex md:flex-row flex-col justify-center items-center py-20 gap-2'>
            <div className='mx-10'>
                <h1 className='font-bold text-[#121212] text-3xl md:text-6xl'>Meet the Strategist</h1> 
                <h1 className='font-bold text-[#121212] text-3xl md:text-6xl'>Fueling your Business growth</h1>
                <p className='font-semibold text-[#1B263B] text-sm md:text-xl my-5 underline'>Advancing Businesses with Precision</p>
            </div>
            <div className='mx-10'>
                <img src={businessPhotu} alt="Bussiness photu"/>
            </div>
        </div>
    </div>
  )
}

export default Tagline