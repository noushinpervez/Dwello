'use client';
import PropertyCategory from '../PropertyCategory/PropertyCategory';
import PropertyInfoBoxes from './PropertyInfoBoxes';
import { SiHomeassistant } from 'react-icons/si';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Blog from '../Blog/Blog';
import { HiArrowLongRight } from 'react-icons/hi2';

const PropertyInfo = () => {
  return (
    <section className='px-4 max-w-7xl mx-auto'>
      {/* Sign In */ }
      <div className='flex md:items-center justify-center bg-dark rounded-2xl p-6 mt-6 mb-12 text-white'>
        <SiHomeassistant className='w-10 h-10 md:mr-8 mr-4' />
        <div className='flex flex-wrap justify-between items-center w-full text-xl gap-4 lg:text-2xl'>
          <p>Members always get our best prices when signed in</p>
          <motion.button
            className='rounded-full px-6 md:px-8 py-4 relative radial-gradient font'
            initial={ { '-x': '100%' } }
            animate={ { '--x': '-100%' } }
            whileTap={ { scale: 0.97 } }
            transition={ {
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 1,
              type: 'spring',
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: 'spring',
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              }
            } }
          >
            <span className='tracking-wide font-medium h-full w-full block relative linear-mask'>
              Sign in<FiArrowUpRight className='inline w-6 h-6 ml-1' />
            </span>
            <span className='block absolute inset-0 rounded-full p-px linear-overlay' />
          </motion.button>
        </div>
      </div>

      {/* Property Info Cards */ }
      <div className='flex h-full items-center justify-center'>
        <PropertyInfoBoxes />
      </div>

      {/* Property Category */ }
      <p className='font-semibold mt-16 mb-6 text-2xl flex items-center'>Explore more properties to rent, including<HiArrowLongRight className='ml-2 w-8 h-8' /></p>
      <PropertyCategory />

      <div className='flex h-full items-center justify-center'>
        <Blog />
      </div>
    </section >
  );
};

export default PropertyInfo;