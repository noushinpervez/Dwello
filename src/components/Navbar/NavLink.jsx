import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NavLink = ({ href, children, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='relative flex flex-col md:items-center w-fit overflow-hidden gap-3 md:gap-0 mb-1'
      onHoverStart={ () => setIsHovered(true) }
      onHoverEnd={ () => setIsHovered(false) }
      transition={ { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
    >
      { isActive && (
        <motion.div
          className='absolute top-0 left-[45%] w-2 h-2 bg-primary rounded-full'
          layoutId='activeCircle'
          initial={ { scale: 0 } }
          animate={ { scale: 1 } }
          exit={ { scale: 0 } }
          transition={ { duration: 0.5, ease: 'easeInOut' } }
        />
      ) }
      <Link href={ href } className={ `hover:text-primary font-semibold px-2 pt-2.5 pb-0.5 text-2xl md:text-base ${isActive ? 'text-primary' : ''}` }>
        { children }
      </Link>
      <div
        className={ `border-t-[3px] border-primary rounded-full transition-all ease-in-out ${isHovered ? 'w-full' : 'w-0'}` }
      ></div>
    </motion.div>
  );
};

export default NavLink;