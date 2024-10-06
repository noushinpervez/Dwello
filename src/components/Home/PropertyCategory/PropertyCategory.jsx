'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';

const PropertyCategory = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section>
      <h2 className='font-medium mt-16 mb-6 text-3xl flex items-center'>Explore more properties to rent, including &#10230;</h2>
      <div ref={ targetRef } className='relative min-h-[150vh]'>
        <div className='sticky top-1/4 overflow-hidden h-[50.5vh] grid'>
          <motion.div style={ { x } } className='flex gap-4 -ml-[1%]'>
            { cards.map((card) => {
              return <Card card={ card } key={ card.id } />;
            }) }
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCategory;

const cards = [
  {
    url: 'https://images.unsplash.com/photo-1690987601363-83022d125159?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Apartment/Flat',
    id: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Duplex Home',
    id: 2,
  },
  {
    url: 'https://images.unsplash.com/photo-1610320022005-0e300dc23c92?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Studio Apartment',
    id: 3,
  },
  {
    url: 'https://images.unsplash.com/photo-1461175827210-5ceac3e39dd2?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Plot',
    id: 4,
  },
  {
    url: 'https://images.unsplash.com/photo-1706756601729-6dcba36e6ce1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Guest House',
    id: 5,
  },
  {
    url: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Office Space',
    id: 6,
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Showroom/Shop/Restaurant',
    id: 7,
  },
  {
    url: 'https://images.unsplash.com/photo-1720175369915-d941b2394228?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Agriculture/Farm Land',
    id: 8,
  },
  {
    url: 'https://images.unsplash.com/photo-1644619536996-2ca08e989c97?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Industrial Space',
    id: 9,
  },
];