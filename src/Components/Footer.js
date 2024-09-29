import React from 'react'

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#1B263B] p-8 text-white'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className=''>
                    <h3 className='text-2xl font-bold text-[#FF6F61] text-center'>About us</h3>
                    <p className='text-wrap text-sm text-center'>At Rapid Consulting, we envision being the premier catalyst in transforming the Indian MSME landscape.
                    Our tagline, "Advancing Businesses with Precision," encapsulates our commitment to seamlessly integrating innovation and precision, propelling businesses toward unparalleled success.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold text-[#FF6F61] text-center'>Connect with us</h3>
                    <form className='flex flex-col text-black gap-3 w-1/2 mx-auto my-8'>
                        <input type='text' placeholder="Name" className='p-1 rounded-md'/>
                        <input type='Email' placeholder="Email" className='p-1 rounded-md'/>
                        <input type='Contact' placeholder="Contact" className='p-1 rounded-md'/>
                        <button className='w-1/2 mx-auto bg-[#FF6F61] text-white p-1 rounded-md'>Submit</button>
                    </form>
                    <div className='flex justify-center items-center gap-8'>
                    <div className='hover:text-[#ffc4b3] scale-150'><FaFacebook /></div>
                    <div className='hover:text-[#ffc4b3] scale-150'><FaInstagram /></div>
                     <div className='hover:text-[#ffc4b3] scale-150'><FaYoutube /></div>
                     <div className='hover:text-[#ffc4b3] scale-150'><FaTwitter /></div>
                    </div>
                </div>
                <div>
                    <div><h3 className='font-bold text-2xl py-2 text-[#FF6F61] '>Visit us now!!</h3>
                        <p className='text-sm'>Rapid Consulting,</p>
                        <p className='text-sm'>First Floor, Plot #134,</p>
                        <p className='text-sm'>Old Courts Commercial Complex,</p>
                        <p className='text-sm'> Hisar, Haryana 125001</p></div>
                    <div className="w-auto h-52 my-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6969.309588470338!2d75.71771146081632!3d29.145370800000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d6785c2e3d%3A0x84cef73c556785b2!2sRapid%20Consulting%20(Best%20Msme%20Services%20in%20India%2C%20Best%20Iso%20Certification%20in%20Haryana%2C%20Msme%20subsidies%20in%20India)!5e0!3m2!1sen!2sin!4v1727361780353!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Rapid consulting"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer