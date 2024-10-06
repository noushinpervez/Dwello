'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import { FaBed, FaBath, FaTimes, FaCheck, FaMapMarker } from 'react-icons/fa';
const PropertyMap = dynamic(() => import('./PropertyMap'), { ssr: false });

const PropertyDetails = ({ property }) => {
  const router = useRouter();

  const handleTypeClick = () => {
    router.push(`/properties/search-results?propertyType=${encodeURIComponent(property.type)}`);
  };

  return (
    <main>
      <div className='text-center lg:text-left'>
        <button className='text-primary font-medium w-full md:w-fit cursor-pointer mb-2 hover:underline hover:underline-offset-4' onClick={ handleTypeClick }>{ property.type }</button>
        <h1 className='text-4xl font-medium mb-4'>{ property.name }</h1>
        <div className='text-edge flex align-middle justify-center lg:justify-start'>
          <FaMapMarker className='text-lg text-red-500 mr-2' />
          <p className='text-red-500'>
            { property.location.street }, { property.location.city }, { property.location.state }
          </p>
        </div>

        <div className='flex gap-4 flex-nowrap justify-center lg:justify-start text-edge text-lg my-6 space-x-12'>
          <p>
            <FaBed className='inline-block mr-2 text-text opacity-80 mb-1' /> { property.beds }{ ' ' }
            <span className='hidden sm:inline'>Beds</span>
          </p>
          <p>
            <FaBath className='inline-block mr-2 text-text opacity-80 mb-1' /> { property.baths }{ ' ' }
            <span className='hidden sm:inline'>Baths</span>
          </p>
          <p>
            <svg className='inline-block mr-2 w-6 h-6 opacity-80 mb-1' viewBox='0 0 24 24' fill='var(--text)'><path d='M6 18h2l-3 3-3-3h2V6c0-1.1.9-2 2-2h12V2l3 3-3 3V6H6v12zm14-8v2h-2v-2h2zm0 8a2 2 0 0 1-2 2v-2h2zm0-4v2h-2v-2h2zm-4 4v2h-2v-2h2zm-4 0v2h-2v-2h2z'></path></svg>
            { property.square_feet }{ ' ' }
            <span className='hidden sm:inline'>sqft</span>
          </p>
        </div>

        <hr className='w-full my-8 mx-auto border-border border rounded-full' />
        <p className='text-2xl mb-6'>Rates & Options</p>
        <div className='md:flex items-center justify-between md:space-y-0 space-y-6'>
          <div className='flex items-center lg:justify-start justify-center'>
            <div className='text-edge mr-2'>Nightly</div>
            <div className='text-3xl font'>
              { property.rates.nightly ? (
                `৳ ${property.rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className='text-red-700' />
              ) }
            </div>
          </div>
          <div className='flex items-center lg:justify-start justify-center'>
            <div className='text-edge mr-2'>Weekly</div>
            <div className='text-3xl font'>
              { property.rates.weekly ? (
                `৳ ${property.rates.weekly.toLocaleString()}`
              ) : (
                <FaTimes className='text-red-700' />
              ) }
            </div>
          </div>
          <div className='flex items-center lg:justify-start justify-center'>
            <div className='text-edge mr-2'>Monthly</div>
            <div className='text-3xl font'>
              { property.rates.monthly ? (
                `৳ ${property.rates.monthly.toLocaleString()}`
              ) : (
                <FaTimes className='text-red-700' />
              ) }
            </div>
          </div>
        </div>
      </div>

      <hr className='w-full my-8 mx-auto border-border border rounded-full' />
      <p className='text-2xl mb-6'>Description</p>
      <p className='text-edge'>{ property.description }</p>

      <hr className='w-full my-8 mx-auto border-border border rounded-full' />
      <div>
        <p className='text-2xl mb-6'>Amenities</p>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-lg text-edge list-none space-y-2'>
          { property.amenities.map((amenity, index) => (
            <li key={ index }>
              <FaCheck className='inline-block text-green-600 bg-green-100 rounded-full p-1.5 w-5 h-5 mr-2 mb-0.5' /> { amenity }
            </li>
          )) }
        </ul>
      </div>

      <hr className='w-full my-8 mx-auto border-border border rounded-full' />
      <PropertyMap
        street={ property.location.street }
        city={ property.location.city }
        state={ property.location.state }
      />
    </main>
  );
};

export default PropertyDetails;