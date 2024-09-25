'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined, FaMoneyBill, FaMapMarker } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const PropertyCard = ({ property, index }) => {
  const getRateDisplay = () => {
    const { rates } = property;
    if (rates.monthly) {
      return `৳ ${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `৳ ${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `৳ ${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <motion.div
      className='rounded-bl-3xl rounded-tr-3xl relative border border-border shadow-primary-100 shadow-xl cursor-pointer origin-center hover:outline-1 hover:outline-primary hover:outline-double hover:outline-offset-8'
      initial={ {
        opacity: 0,
        translateX: index % 2 === 0 ? -50 : 50,
        translateY: -50,
      } }
      animate={ { opacity: 1, translateX: 0, translateY: 0 } }
      transition={ { duration: 0.3, delay: index * 0.3 } }
    >
      <Image
        src={ property.images[0] }
        alt={ property.name }
        height={ 0 }
        width={ 0 }
        sizes='100vw'
        className='w-full h-auto rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72'
        priority={ true }
      />
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <div className='text-neutral-600'>{ property.type }</div>
          <h3 className='text-xl font-bold'>{ property.name }</h3>
        </div>
        <h3 className='absolute top-[10px] right-[10px] px-4 py-2 rounded-full text-primary font-bold text-right md:text-center lg:text-right bg-gradient-to-br from-white/80 to-white/0 uppercase backdrop-blur-lg text-lg'>
          { getRateDisplay() }
        </h3>

        <div className='flex justify-center flex-wrap gap-4 text-neutral-500 mb-4'>
          <p>
            <FaBed className='inline mr-2' /> { property.beds }
            <span className='inline'> Beds</span>
          </p>
          <p>
            <FaBath className='inline mr-2' /> { property.baths }
            <span className='inline'> Baths</span>
          </p>
          <p>
            <FaRulerCombined className='inline  mr-2' />{ ' ' }
            { property.square_feet }
            <span className='inline'> sqft</span>
          </p>
        </div>

        <div className='flex justify-center flex-wrap gap-4 text-accent text-sm mb-4'>
          { property.rates.nightly &&
            <p>
              <FaMoneyBill className='inline mr-2' /> Nightly
            </p>
          }
          { property.rates.weekly &&
            <p>
              <FaMoneyBill className='inline mr-2' /> Weekly
            </p>
          }
          { property.rates.monthly &&
            <p>
              <FaMoneyBill className='inline mr-2' /> Monthly
            </p>
          }
        </div>

        <div className='border border-border mb-6'></div>

        <div className='flex flex-col lg:flex-row items-center justify-between gap-4 mb-4 text-red-500'>
          <div className='flex items-center justify-center h-full gap-2 mb-8 lg:mb-0'>
            <FaMapMarker className='w-5 h-5' />
            <span>
              { ' ' }
              { property.location.street }, { property.location.city }
            </span>
          </div>
          {/* More info */}
          <Link
            href={ `/properties/${property._id}` }
            className='bg-primary hover:bg-secondary rounded-full text-center relative inline-flex items-center justify- flex-shrink-0 py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 group text-white'>
            <span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
              <FiArrowUpRight className='w-5 h-5' />
            </span>
            <span className='absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
              <FiArrowUpRight className='w-5 h-5' />
            </span>
            <span className='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white'>More info</span>
          </Link>
        </div>
      </div>
    </motion.div >
  );
};

export default PropertyCard;