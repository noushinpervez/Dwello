import Link from 'next/link';
import PropertyInfoBox from './PropertyInfoBox';

const PropertyInfoBoxes = () => {
  return (
    <section className='flex h-full items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <PropertyInfoBox
          heading='For Renters'
          textColor='text-inv-text'
          backgroundColor='bg-card'
          buttonInfo={ {
            text: 'Browse Properties',
            link: '/properties',
            backgroundColor: 'bg-inv-background',
          } }
        >
          Find your dream rental property. Bookmark properties and contact
          owners.
        </PropertyInfoBox>
        <PropertyInfoBox
          heading='For Property Owners'
          backgroundColor='bg-primary-50 dark:bg-primary-100'
          textColor='text-white'
          buttonInfo={ {
            text: 'List Property',
            link: '/properties/add',
            backgroundColor: 'bg-primary',
          } }
        >
          List your property on <Link href='/' className='underline text-primary decoration-[#a2c4f6] decoration-wavy decoration-[3px] underline-offset-4 font'>Dwello</Link> and open your door to rental income.
        </PropertyInfoBox>
      </div>
    </section>
  );
};

export default PropertyInfoBoxes;