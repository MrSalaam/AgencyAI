import React from 'react';
import Title from './Title';
import assets from '../assets/assets';

const OurWork = () => {
    const workData = [
        {
            title: 'Mobile App Marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect...',
            image:assets.work_mobile_app
        },
        {
            title: 'Dashboard Management',
            description: 'We turn bold ideas into powerful digital solutions that connect...',
            image:assets.work_dashboard_management
        },
        {
            title: 'Mobile App Marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect...',
            image:assets.work_fitness_app
        },

    ]


  return (
    <div id='our-work' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white'>
      <Title 
        title='See our best work' 
        desc='We don’t just create digital products, we create digital experiences that build relationships and get results.'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl'>
       {workData.map((work, index) => (
            <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer' >
                <img src={work.image} alt="" className='w-full rounded-xl' />
                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;