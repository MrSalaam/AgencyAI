import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'


const Services = () => {
    const ServicesData = [

        {
        title: 'Advertising',
        description: 'We turn bold ideas into powerful digtal solutions that connect, engage...',
        icon: assets.ads_icon
        },

        {
            title: 'Content marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage and...',
            icon: assets.marketing_icon
        },
        {
            title: 'Content writing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage and...',
            icon: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage and...',
            icon: assets.social_icon
        },

    ]

  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="background" className='absolute top-0 -left-40 -z-10 dark:hidden' />
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
        <div className='grid grid-cols-1 md:grid-cols-2 items-stretch gap-6'>
            {ServicesData.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index}/>
           ))}
        </div>
    </div>
  ) 
}

export default Services
