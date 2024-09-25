import PropertyCard from '@/components/Properties/PropertyCard';
import connectDB from '/config/database';
import Property from '/models/Property';

const PropertiesPage = async () => {
  await connectDB();

  const properties = await Property.find({})
    .sort({ createdAt: -1 });

  return (
    <>
      <section className='py-6 mb-24'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <h1 className='text-2xl mb-4'>Browse Properties</h1>
          { properties.length === 0 ? (
            <div className='min-h-[80vh] flex items-center justify-center text-center'>
              <p className='text-neutral-600 text-2xl font-medium'>No properties found</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
              { properties.map((property, i) => (
                <PropertyCard property={ property } key={ property._id } index={ i } />
              )) }
            </div>
          ) }
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;