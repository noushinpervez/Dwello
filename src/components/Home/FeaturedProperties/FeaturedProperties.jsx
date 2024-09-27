import Link from 'next/link';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import Image from 'next/image';

const FeaturedProperties = async () => {
  await connectDB();

  // Fetch properties where `is_featured` is true
  const properties = await Property.find({ is_featured: true });

  // Randomly shuffle the properties array and select the first 3
  const shuffledProperties = properties.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <section className='mt-12'>
      <h2 className='font-medium mb-6 text-3xl'>Featured Properties</h2>
      { shuffledProperties.length >= 3 ? (
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

          {/* First Column (2 rows) */ }
          { shuffledProperties.slice(0, 2).map((property) => (
            <li key={ property._id } className='group relative block overflow-hidden rounded-3xl'>
              <Link href={ `/properties/${property._id}` }>
                <Image
                  src={ property.images[0] }
                  alt={ property.name }
                  width={ 0 }
                  height={ 0 }
                  sizes='100vw'
                  className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-30'></div>
                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>{ property.name }</h3>
                  <p className='text-white text-sm mt-1.5'>{ property.beds } Beds • { property.baths } Baths • { property.square_feet } Sq. Ft.</p>
                  <p className='mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase rounded-full tracking-wide text-white'>
                    View Property <span className='ml-1'>&rarr;</span>
                  </p>
                </div>
              </Link>
            </li>
          )) }

          {/* Second Column (spanning 2 rows) */ }
          <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
            <Link href={ `/properties/${shuffledProperties[2]._id}` } className='group relative block overflow-hidden rounded-3xl'>
              <Image
                src={ shuffledProperties[2].images[0] }
                alt={ shuffledProperties[2].name }
                width={ 0 }
                height={ 0 }
                sizes='100vw'
                className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-30'></div>
              <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                <h3 className='text-xl font-medium text-white'>{ shuffledProperties[2].name }</h3>
                <p className='text-white text-sm mt-1.5'>{ shuffledProperties[2].beds } Beds • { shuffledProperties[2].baths } Baths • { shuffledProperties[2].square_feet } Sq. Ft.</p>
                <p className='mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase rounded-full tracking-wide text-white'>
                  View Property <span className='ml-1'>&rarr;</span>
                </p>
              </div>
            </Link>
          </li>
        </ul>
      ) : (
        <div className='min-h-[50vh] flex items-center justify-center text-center'>
          <p className='text-edge text-2xl font-medium'>No featured properties available</p>
        </div>
      ) }
    </section>
  );
};

export default FeaturedProperties;