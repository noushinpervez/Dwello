'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';
import PropertyInfoBoxes from '../PropertyInfo/PropertyInfoBoxes';

const PropertyCategory = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={ targetRef } className='relative min-h-[200vh]'>
      <div className='sticky top-1/4 overflow-hidden h-[60vh] grid'>
        <motion.div style={ { x } } className='flex gap-4 -ml-8'>
          { cards.map((card) => {
            return <Card card={ card } key={ card.id } />;
          }) }
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyCategory;

const cards = [
  {
    url: 'https://forever.travel-assets.com/flex/flexmanager/images/2024/03/06/VRBO_OOH_TRUST_LISBON_HOUSE_NATACHA_WIDE_BACKDOOR_HUMM_0004.jpg?impolicy=resizecrop&rh=590&cw=448&cx=-20&quot',
    title: 'House',
    id: 1,
  },
  {
    url: 'https://forever.travel-assets.com/flex/flexmanager/images/2024/03/06/PARTNER_Historic_Chicago_Townhouse.jpg?impolicy=resizecrop&rh=590&cw=448&cx=-20&quot',
    title: 'Apartment',
    id: 2,
  },
  {
    url: 'https://forever.travel-assets.com/flex/flexmanager/images/2023/11/24/VRBO_APFT2_BARCELONA_THERIN_HOUSE_1_1460.jpg?impolicy=resizecrop&rh=590&cw=448&cx=-10&quot',
    title: 'Cabin',
    id: 3,
  },
  {
    url: 'https://forever.travel-assets.com/flex/flexmanager/images/2024/03/08/PARTNER_Letterbox_Cottage_Cotswolds_v2.jpg?impolicy=resizecrop&rh=590&cw=448&cx=-50&quot',
    title: 'Cottage',
    id: 4,
  },
  {
    url: 'https://forever.travel-assets.com/flex/flexmanager/images/2024/03/08/6981bbd6_R3.jpg?impolicy=resizecrop&rh=590&cw=448&cx=-60&quot',
    title: 'Villa',
    id: 5,
  },
  {
    url: 'https://forever.travel-assets.com/flex/flexmanager/images/2024/03/04/PARTNER_Chalet_Rochefort_R2.jpg?impolicy=resizecrop&rh=590&cw=448&cx=-25&quot',
    title: 'Chalot',
    id: 6,
  },
];