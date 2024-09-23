import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropertySearchForm from './PropertySearchForm';

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={ { y, opacity } }
      ref={ targetRef }
      className='p-4 absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'
    >
      <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl'>
        { subheading }
      </p>
      <h1 className='text-center text-4xl md:text-6xl mb-6 font-bold lg:text-7xl'>
        { heading }
      </h1>
      <PropertySearchForm />
    </motion.div>
  );
};

export default OverlayCopy;