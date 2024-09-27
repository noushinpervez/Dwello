'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PropertyTypeList from './PropertyTypeList';
import { FaSearch } from 'react-icons/fa';

const PropertySearchForm = () => {
  const [location, setLocation] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);

  const router = useRouter();
  const dropdownRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyTypeQuery = selectedPropertyTypes.length ? selectedPropertyTypes.join(',') : 'All';

    router.push(`/properties/search-results?location=${location}&propertyType=${propertyTypeQuery}`);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  // Function to handle checkbox selection
  const handlePropertyTypeChange = (propertyType) => {
    setSelectedPropertyTypes((prevSelected) =>
      prevSelected.includes(propertyType)
        ? prevSelected.filter((type) => type !== propertyType) // Uncheck
        : [...prevSelected, propertyType] // Check
    );
  };

  // List of property types
  const propertyTypes = [
    'Apartment/Flat',
    'Duplex Home',
    'Studio Apartment',
    'Sublet/Room',
    'Plot',
    'Guest House',
    'Office Space',
    'Showroom/Shop/Restaurant',
    'Agriculture/Farm Land',
    'Industrial Space',
  ];

  return (
    <form
      ref={ formRef }
      className='mt-4 mx-auto max-w-3xl w-full flex flex-col md:flex-row items-center rounded-2xl p-4 bg-background'
      onSubmit={ handleSubmit }
    >
      {/* Proper Keywords or Location */ }
      <div className='w-full md:w-3/5 md:pr-1.5 mb-4 md:mb-0'>
        <label htmlFor='location' className='sr-only'>
          Location
        </label>
        <input
          type='text'
          id='location'
          placeholder='Enter Keywords or Location'
          className='w-full px-6 py-4 text-text rounded-lg placeholder:text-edge border border-edge focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 dark:border-slate-700 bg-background'
          value={ location }
          onChange={ (e) => setLocation(e.target.value) }
        />
      </div>

      {/* Proper Category */ }
      <div className='relative w-full md:w-2/5 md:pl-1.5' ref={ dropdownRef }>
        <div
          className='flex cursor-pointer items-center justify-between transition w-full px-6 py-4 rounded-lg text-edge border border-edge focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:outline-none bg-background dark:border-slate-700'
          onClick={ () => setDropdownOpen(!dropdownOpen) }
          tabIndex='0'
        >
          <span>Property Category</span>
          <span className={ `transition ${dropdownOpen ? '-rotate-180' : ''}` }>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </span>
        </div>

        { dropdownOpen && (
          <div className='absolute z-50 top-auto mt-2 w-full text-sm text-text'>
            <div className='w-64 rounded-2xl border border-border bg-background'>
              <header className='flex items-center justify-between p-4 text-edge'>
                <span>{ selectedPropertyTypes.length } Selected</span>
                <button
                  type='button'
                  className='underline underline-offset-4 hover:text-primary'
                  onClick={ () => setSelectedPropertyTypes([]) } // Reset selected types
                >
                  Reset
                </button>
              </header>
              <hr className='border border-border mx-4 rounded-full' />

              {/* Pass property types and the handler to PropertyTypeList */ }
              <PropertyTypeList
                propertyTypes={ propertyTypes }
                selectedPropertyTypes={ selectedPropertyTypes }
                onPropertyTypeChange={ handlePropertyTypeChange }
              />
            </div>
          </div>
        ) }
      </div>

      <button
        type='submit'
        className='md:ml-3 mt-4 md:mt-0 md:w-auto px-8 py-4 text-xl gap-3 bg-primary hover:opacity-90 font-medium text-white rounded-full w-full focus:outline-none flex items-center justify-center ring-1 ring-primary ring-offset-background ring-offset-2 transition-all scale-[0.99] hover:scale-[1] hover:ring-transparent active:scale-[0.96] active:ring-primary'
      >
        <FaSearch />Search
      </button>
    </form>
  );
};

export default PropertySearchForm;