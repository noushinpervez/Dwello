'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaMoneyBill, FaMapMarker } from 'react-icons/fa';
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
      className='group rounded-bl-3xl rounded-tr-3xl relative border border-border shadow-primary-100 shadow-md origin-center hover:outline-1 hover:outline-primary hover:outline-double hover:outline-offset-8'
      initial={ {
        opacity: 0,
        translateX: index % 2 === 0 ? -50 : 50,
        translateY: -50,
      } }
      animate={ { opacity: 1, translateX: 0, translateY: 0 } }
      transition={ { duration: 0.3, delay: index * 0.3 } }
    >
      <div className='relative w-full group'>
        <Image
          src={ property.images[0] }
          alt={ property.name }
          height={ 0 }
          width={ 0 }
          sizes='100vw'
          className='w-full h-auto rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72 transition duration-500 group-hover:opacity-90'
          priority={ true }
        />
        <div className='absolute inset-0 bg-black opacity-15 transition-opacity duration-300 group-hover:opacity-25 rounded-bl-3xl rounded-tr-3xl'></div>
      </div>
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <div className='text-edge text-sm'>{ property.type }</div>
          <h3 className='text-xl font-semibold'>{ property.name }</h3>
        </div>
        <h3 className='absolute top-[10px] right-[10px] px-4 py-2 rounded-full text-primary font-semibold text-right md:text-center lg:text-right bg-gradient-to-br from-white/80 to-white/0 uppercase backdrop-blur-lg text-lg'>
          { getRateDisplay() }
        </h3>

        <div className='flex justify-center flex-wrap gap-4 text-edge mb-4'>
          <p>
            <FaBed className='inline mr-2 text-text opacity-80 mb-0.5' /> { property.beds }
            <span className='inline'> Beds</span>
          </p>
          <p>
            <FaBath className='inline mr-2 text-text opacity-80 mb-0.5' /> { property.baths }
            <span className='inline'> Baths</span>
          </p>
          <p>
            <svg className='inline-block mr-2 w-6 h-6 opacity-80 mb-0.5' viewBox='0 0 24 24' fill='var(--text)'><path d='M6 18h2l-3 3-3-3h2V6c0-1.1.9-2 2-2h12V2l3 3-3 3V6H6v12zm14-8v2h-2v-2h2zm0 8a2 2 0 0 1-2 2v-2h2zm0-4v2h-2v-2h2zm-4 4v2h-2v-2h2zm-4 0v2h-2v-2h2z'></path></svg>{ ' ' }
            { property.square_feet }
            <span className='inline'> sqft</span>
          </p>
        </div>

        <div className='flex justify-center flex-wrap gap-4 text-accent text-sm mb-5'>
          { property.rates.nightly &&
            <p>
              <FaMoneyBill className='inline mr-2 mb-0.5' /> Nightly
            </p>
          }
          { property.rates.weekly &&
            <p>
              <FaMoneyBill className='inline mr-2 mb-0.5' /> Weekly
            </p>
          }
          { property.rates.monthly &&
            <p>
              <FaMoneyBill className='inline mr-2 mb-0.5' /> Monthly
            </p>
          }
        </div>

        <div className='border border-border mb-6'></div>

        <div className='flex flex-row items-center justify-between gap-4 mb-4 text-red-500'>
          <div className='flex items-center justify-center h-full gap-2'>
            <FaMapMarker className='w-5 h-5' />
            <span>
              { ' ' }
              { property.location.street }, { property.location.city }
            </span>
          </div>
          {/* More info */ }
          <Link
            href={ `/properties/${property._id}` }
            className='bg-primary group-hover:bg-secondary rounded-full text-center relative inline-flex items-center justify-center flex-shrink-0 py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out group-hover:pl-10 group-hover:pr-6 group text-white'>
            <span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
              <FiArrowUpRight className='w-5 h-5 mb-0.5' />
            </span>
            <span className='absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
              <FiArrowUpRight className='w-5 h-5 mb-0.5' />
            </span>
            <span className='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white'>More info</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;