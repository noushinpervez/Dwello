import Link from 'next/link';
import PropertyCard from '@/components/Properties/PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';

const HomeProperties = async () => {
  await connectDB();

  // Get the 6 latest properties
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(6)
    .lean();

  // Function to format the date into a readable format
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // Function to get the date range
  const getDateRange = (properties) => {
    if (properties.length === 0) return '';

    const dates = properties.map(prop => new Date(prop.createdAt));
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));

    return `${formatDate(minDate)} - ${formatDate(maxDate)}`;
  };

  const dateRange = getDateRange(recentProperties);

  return (
    <>
      <section className='mt-12'>
        <h2 className='font-medium mb-2 text-3xl'>
          Recent Properties
        </h2>
        { recentProperties.length === 0 ? (
          <div className='min-h-[50vh] flex items-center justify-center text-center'>
            <p className='text-edge text-2xl font-medium'>No properties found</p>
          </div>
        ) : (
          <>
            <p className='text-edge mb-6 text-sm'>
              Showing properties for: <span className='font-medium text-text'>{ dateRange }</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              { recentProperties.map((property, i) => (
                <PropertyCard property={ property } key={ property._id } index={ i } />
              )) }
            </div>
          </>
        ) }
      </section>

      <section className='m-auto w-fit mt-10 mb-20'>
        <Link
          href='/properties'
          className='px-8 py-4 md:text-lg font-medium bg-inv-background hover:opacity-90 text-inv-text rounded-full w-full focus:outline-none flex items-center justify-center ring-1 ring-inv-background ring-offset-background ring-offset-2 transition-all scale-[0.98] hover:scale-[1] hover:ring-transparent active:scale-[0.96] active:ring-inv-background'
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;