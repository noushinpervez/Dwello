import Link from 'next/link';
import PropertyCard from '@/components/Properties/PropertyCard';
import connectDB from '/config/database';
import Property from '/models/Property';

const HomeProperties = async () => {
  await connectDB();

  // Get the 4 latest properties
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <>
      <section>
        <h2 className='font-semibold mt-16 mb-6 text-2xl'>Recent Properties</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          { recentProperties.length === 0 ? (
            <p>No Properties Found</p>
          ) : (
            recentProperties.map((property) => (
              <PropertyCard key={ property._id } property={ property } />
            ))
          ) }
        </div>
      </section>

      <section className='m-auto max-w-xs my-10 px-6 mb-24'>
        <Link
          href='/properties'
          className='block bg-primary text-white text-center rounded-full hover:opacity-90 px-8 py-4 md:text-xl transition-colors font-medium'
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;