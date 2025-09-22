import React from 'react'
import assets from '../assets/assets'
import { useState } from 'react';
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from 'framer-motion';






const Navbar = ({theme, setTheme}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
   

    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 '>
        {/* logo */}
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-40 cursor-pointer' alt="logo" />

        {/* nav links */}
         <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 max-sm:overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:pt-20 max-sm:text-white flex items-center gap-5 transition-all`}>

            <img src={assets.close_icon} alt="close icon" className='w-5 absolute top-4 right-4 cursor-pointer sm:hidden' onClick={() => setSidebarOpen(false)} />

            <a onClick={() => setSidebarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
            <a onClick={() => setSidebarOpen(false)} href="#services" className='sm:hover:border-b'>Services</a>
            <a onClick={() => setSidebarOpen(false)} href="#our-work" className='sm:hover:border-b'>Our Work</a>
            <a onClick={() => setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b'>Contact Us</a>

        </div>

        <div className='flex items-center gap-2 sm:gap-4'> 

            <ThemeToggleBtn theme={theme} setTheme={setTheme} />


            <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden'/>

 
            <motion.a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2  bg-primary text-white px-6 py-2 rounded-full cursor-pointer transition-all'  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> 
                Connect <img src={assets.arrow_icon} width={14} alt="arrow icon" />
            </motion.a>
        </div>
      
    </div>
    
  )
}

export default Navbar
