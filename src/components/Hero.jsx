import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
       
        <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 rounded-full pr-4'>
            <img src={assets.group_profile} alt="group icon" className='w-20' />
            <p className='text-xs font-medium'>Trusted by 10k+ people</p>
        </div>

        <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning Imagination into <span className='bg-gradient-to-r from-primary to-[#42D6FF] bg-clip-text text-transparent'>Digital </span>Impact.</h1>
        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>

        <div className='relative'> 
            <img src={assets.hero_img} alt="hero image" className='w-full max-w-6xl ' />
            <img src={assets.bgImage1} alt="bg gradient" className='absolute -top-40 -right-40 sm:-top-100 -z-1 sm:-right-70 dark:hidden' />
        </div>


    </div>
  )
}

export default Hero
