import React from 'react'
import { ServicesData } from './ServicesData'

const Services = () => {
  return (
    <div>
      <div>
        <div className='flex justify-center my-10'>
          <div className='  bg-[#FF6F61] text-white font-bold text-center p-4 md:p-7 rounded-full'><h2>Our Services</h2></div></div>
        <div className='flex flex-wrap justify-center text-center -mt-14 md:-mt-16 bg-[#F0F0F0] p-3 md:p-6 mx-2 md:mx-28 my-4 md:my-8 rounded-xl shadow-xl shadow-[#BFBFBF]'>
          {ServicesData.map((service, index) => (
            <div key={index} className='flex flex-col items-center mx-3 md:mx-8 md:my-6 my-3 cursor-pointer '>
              <div className='my-2 h-8 md:h-10 w-8 md:w-10  '>{service.svg}</div>
              <div className=' w-16 md:w-36 '><p className='font-semibold text-wrap text-xs md:text-lg text-[#2D2D2D] hover:text-black'>{service.name}</p></div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services