'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Navigate from './Navigate';
import GradientEdges from './GradientEdges';

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const PropertyHeader = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => (pv === images.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [images, dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className='relative overflow-hidden py-6 -mx-4 sm:-mx-6 lg:-mx-8'>
      <motion.div
        drag='x'
        dragConstraints={ { left: 0, right: 0 } }
        style={ { x: dragX } }
        animate={ { translateX: `-${imgIndex * 100}%` } }
        transition={ SPRING_OPTIONS }
        onDragEnd={ onDragEnd }
        className='flex cursor-grab items-center active:cursor-grabbing h-[87vh]'
      >
        <Images imgIndex={ imgIndex } images={ images } />
      </motion.div>

      <Navigate imgIndex={ imgIndex } setImgIndex={ setImgIndex } images={ images } />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex, images }) => {
  return (
    <>
      { images.map((imgSrc, idx) => (
        <motion.div
          key={ idx }
          style={ {
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } }
          animate={ {
            scale: imgIndex === idx ? 0.95 : 0.85,
          } }
          transition={ SPRING_OPTIONS }
          className='h-full w-full shrink-0 rounded-3xl bg-edge'
        />
      )) }
    </>
  );
};

export default PropertyHeader;