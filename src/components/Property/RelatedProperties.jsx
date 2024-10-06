'use client';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PropertyCard from '@/components/Properties/PropertyCard';
import { useState, useEffect } from 'react';

const RelatedPropertiesSlider = ({ relatedProperties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default to 3 cards for large screens

  // Show cards based on the window size
  const updateCardsToShow = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setCardsToShow(1);
    } else if (width >= 768 && width < 1024) {
      setCardsToShow(2);
    } else {
      setCardsToShow(3);
    }
  };

  useEffect(() => {
    // Set the initial value based on the window size
    updateCardsToShow();

    // Adding event listener to update cards on resize
    window.addEventListener('resize', updateCardsToShow);

    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return Math.max(0, relatedProperties.length - cardsToShow); // Wrap to the end if at the start
      }

      return Math.max(prevIndex - 1, 0); // Move one card back
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= relatedProperties.length - cardsToShow) {
        return 0; // Wrap around to the start if at the end
      }

      return Math.min(prevIndex + 1, relatedProperties.length - cardsToShow); // Move one card forward
    });
  };

  // Show properties based on the current index and number of cards to show
  const displayedProperties = relatedProperties.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className='mt-24'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-3xl font-medium'>Related Properties</h2>
        <div className='flex items-center gap-2'>
          { relatedProperties.length > cardsToShow && (
            <>
              <button
                className='p-2.5 bg-primary-100 rounded-full hover:bg-primary hover:text-white disabled:bg-border text-primary disabled:text-text'
                onClick={ handlePrev }
                disabled={ currentIndex === 0 } // Disable if already at the first set of properties
              >
                <IoIosArrowBack className='w-6 h-6' />
              </button>
              <button
                className='p-2.5 bg-primary-100 rounded-full hover:bg-primary hover:text-white disabled:bg-border text-primary disabled:text-text'
                onClick={ handleNext }
                disabled={ currentIndex >= relatedProperties.length - cardsToShow } // Disable if already at the last set of properties
              >
                <IoIosArrowForward className='w-6 h-6' />
              </button>
            </>
          ) }
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
        { displayedProperties.map((relatedProperty) => (
          <PropertyCard key={ relatedProperty._id } property={ relatedProperty } />
        )) }
      </div>
    </div>
  );
};

export default RelatedPropertiesSlider;