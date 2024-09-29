import React, { useState } from 'react';
import logo from "../Assests/rc logo.png";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { MdEmail, MdMenu, MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open
  const [servicesOpen, setServicesOpen] = useState(false); // State to track if the services dropdown is open
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track active submenu for services

  // Toggle main menu visibility (for mobile view)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle services dropdown visibility
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  // Handle submenu toggle
  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <div className='w-full'>
      {/* Top bar with phone and email */}
      <div className='flex justify-between items-center bg-black p-1 px-4'>
        <div className='text-white flex gap-2 md:gap-7'>
          <div className='flex justify-center items-center gap-2 hover:text-[#ffc4b3] '>
            <FaPhoneAlt /> 
            <p className='text-sm hidden md:block'>Call Now</p>
          </div>
          <div className='flex justify-center items-center gap-2 hover:text-[#ffc4b3]'>
            <MdEmail /> 
            <p className='text-sm hidden md:block'> Email us</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4 text-white'>
          <div className='hidden md:block'>Connect with us</div>
          <div><FaFacebook /></div>
          <div><FaInstagram /></div>
          <div><FaYoutube /></div>
          <div><FaTwitter /></div>
        </div>
      </div>

      {/* Navbar section */}
      <div className='flex items-center justify-between bg-[#1B263B] text-white p-5'>
        <div>
          <img src={logo} alt="Logo" className='h-10 md:h-12 w-auto' />
        </div>
        <div className='mx-4'>
          <ul className='flex'>
            {/* Menu icon for mobile */}
            <li className='block md:hidden text-3xl cursor-pointer' onClick={toggleMenu}>
              <MdMenu />
            </li>
            {/* Navbar items for desktop */}
            <li className='mx-2 hidden md:block hover:underline'>Home</li>
            <li className='mx-2 hidden md:block hover:underline'>About</li>
            {/* Services dropdown */}
            <li className='mx-2 hidden md:block relative'>
              <div className='flex items-center cursor-pointer hover:underline' onClick={toggleServices}>
                Services <MdArrowDropDown className='ml-1' />
              </div>
              {servicesOpen && (
                <div className='absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg'>
                  <div className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => toggleSubmenu('Approvals')}>
                    Approvals <MdArrowDropDown className='inline-block' />
                  </div>
                  {activeSubmenu === 'Approvals' && (
                    <div className='ml-4'>
                      <p className='hover:bg-gray-200 p-2'>NOC/LU</p>
                      <p className='hover:bg-gray-200 p-2'>PWD NOC</p>
                      <p className='hover:bg-gray-200 p-2'>FOREST NOC</p>
                      <p className='hover:bg-gray-200 p-2'>NHAI</p>
                      <p className='hover:bg-gray-200 p-2'>FIRE</p>
                      <p className='hover:bg-gray-200 p-2'>POLLUTION</p>
                    </div>
                  )}

                  <div className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => toggleSubmenu('Subsidies')}>
                    Subsidies <MdArrowDropDown className='inline-block' />
                  </div>
                  {activeSubmenu === 'Subsidies' && (
                    <div className='ml-4'>
                      <p className='hover:bg-gray-200 p-2'>PMEGP</p>
                      <p className='hover:bg-gray-200 p-2'>HGUVY</p>
                      <p className='hover:bg-gray-200 p-2'>PMFME</p>
                      <p className='hover:bg-gray-200 p-2'>AIF</p>
                      <p className='hover:bg-gray-200 p-2'>Interest subsidy</p>
                      <p className='hover:bg-gray-200 p-2'>Capital subsidy</p>
                    </div>
                  )}

                  <div className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => toggleSubmenu('Certification')}>
                    Certification <MdArrowDropDown className='inline-block' />
                  </div>
                  {activeSubmenu === 'Certification' && (
                    <div className='ml-4'>
                      <p className='hover:bg-gray-200 p-2'>ISO certification</p>
                      <p className='hover:bg-gray-200 p-2'>UDYAM</p>
                      <p className='hover:bg-gray-200 p-2'>IMPORT/EXPORT</p>
                      <p className='hover:bg-gray-200 p-2'>TRADE MARK</p>
                      <p className='hover:bg-gray-200 p-2'>HARYANA UDYAM</p>
                      <p className='hover:bg-gray-200 p-2'>LEIL</p>
                    </div>
                  )}

                  <div className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => toggleSubmenu('Insurance')}>
                    Insurance <MdArrowDropDown className='inline-block' />
                  </div>
                  {activeSubmenu === 'Insurance' && (
                    <div className='ml-4'>
                      <p className='hover:bg-gray-200 p-2'>Life insurance</p>
                      <p className='hover:bg-gray-200 p-2'>Crop insurance</p>
                      <p className='hover:bg-gray-200 p-2'>Health insurance</p>
                    </div>
                  )}
                </div>
              )}
            </li>
            <li className='mx-2 hidden md:block hover:underline'>Contact</li>
          </ul>
        </div>
      </div>

      {/* Mobile menu items */}
      {menuOpen && (
        <div className='flex flex-col md:hidden bg-gray-800 text-white'>
          <a href="#home" className='p-2 hover:bg-gray-600'>Home</a>
          <a href="#about" className='p-2 hover:bg-gray-600'>About</a>
          {/* Mobile dropdown for services */}
          <div className='relative'>
            <div className='p-2 hover:bg-gray-600 cursor-pointer' onClick={toggleServices}>
              Services <MdArrowDropDown className='inline-block' />
            </div>
            {servicesOpen && (
              <div className='ml-4'>
                <p className='hover:bg-gray-200 p-2' onClick={() => toggleSubmenu('Approvals')}>
                  Approvals <MdArrowDropDown className='inline-block' />
                </p>
                {activeSubmenu === 'Approvals' && (
                  <div className='ml-4'>
                    <p className='hover:bg-gray-200 p-2'>NOC/LU</p>
                    <p className='hover:bg-gray-200 p-2'>PWD NOC</p>
                    <p className='hover:bg-gray-200 p-2'>FOREST NOC</p>
                    <p className='hover:bg-gray-200 p-2'>NHAI</p>
                    <p className='hover:bg-gray-200 p-2'>FIRE</p>
                    <p className='hover:bg-gray-200 p-2'>POLLUTION</p>
                  </div>
                )}
                <p className='hover:bg-gray-200 p-2' onClick={() => toggleSubmenu('Subsidies')}>
                  Subsidies <MdArrowDropDown className='inline-block' />
                </p>
                {activeSubmenu === 'Subsidies' && (
                  <div className='ml-4'>
                    <p className='hover:bg-gray-200 p-2'>PMEGP</p>
                    <p className='hover:bg-gray-200 p-2'>HGUVY</p>
                    <p className='hover:bg-gray-200 p-2'>PMFME</p>
                    <p className='hover:bg-gray-200 p-2'>AIF</p>
                    <p className='hover:bg-gray-200 p-2'>Interest subsidy</p>
                    <p className='hover:bg-gray-200 p-2'>Capital subsidy</p>
                  </div>
                )}
                <p className='hover:bg-gray-200 p-2' onClick={() => toggleSubmenu('Certification')}>
                  Certification <MdArrowDropDown className='inline-block' />
                </p>
                {activeSubmenu === 'Certification' && (
                  <div className='ml-4'>
                    <p className='hover:bg-gray-200 p-2'>ISO certification</p>
                    <p className='hover:bg-gray-200 p-2'>UDYAM</p>
                    <p className='hover:bg-gray-200 p-2'>IMPORT/EXPORT</p>
                    <p className='hover:bg-gray-200 p-2'>TRADE MARK</p>
                    <p className='hover:bg-gray-200 p-2'>HARYANA UDYAM</p>
                    <p className='hover:bg-gray-200 p-2'>LEIL</p>
                  </div>
                )}
                <p className='hover:bg-gray-200 p-2' onClick={() => toggleSubmenu('Insurance')}>
                  Insurance <MdArrowDropDown className='inline-block' />
                </p>
                {activeSubmenu === 'Insurance' && (
                  <div className='ml-4'>
                    <p className='hover:bg-gray-200 p-2'>Life insurance</p>
                    <p className='hover:bg-gray-200 p-2'>Crop insurance</p>
                    <p className='hover:bg-gray-200 p-2'>Health insurance</p>
                  </div>
                )}
              </div>
            )}
          </div>
          <a href="#contact" className='p-2 hover:bg-gray-600'>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
