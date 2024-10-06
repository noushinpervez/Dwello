'use client';

import PropertySearchForm from '@/components/Home/Hero/PropertySearchForm';
import PropertyCard from '@/components/Properties/PropertyCard';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const SearchResultsPage = () => {
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the location and propertyType from URL search parameters
  const location = searchParams.get('location') || '';
  const propertyType = searchParams.get('propertyType') || 'All'; // Default to 'All' if not provided

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        // Fetch properties based on location and propertyType
        const res = await fetch(`/api/properties/search?location=${encodeURIComponent(location)}&propertyType=${encodeURIComponent(propertyType)}`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          setProperties([]); // Set empty array if no properties found or bad response
        }
      } catch (error) {
        console.error(error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch data if location or propertyType exists
    if (location || propertyType) {
      fetchSearchResults();
    }
  }, [location, propertyType]);

  return (
    <>
      <section className='py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24'>
        <PropertySearchForm />
        <Link href='/properties' className='text-primary hover:underline hover:underline-offset-4 my-6 flex items-center'><FaArrowLeftLong className='mr-2 mb-1' />Back to properties</Link>
        { properties.length === 0 ? (
          <div className='min-h-[80vh] flex items-center justify-center text-center'>
            <p className='text-edge text-2xl font-medium'>No properties found</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            { properties.map((property, i) => (
              <PropertyCard property={ property } key={ property._id } index={ i } />
            )) }
          </div>
        ) }
      </section>
    </>
  );
};

export default SearchResultsPage;