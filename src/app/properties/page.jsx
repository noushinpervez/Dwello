import PropertySearchForm from '@/components/Home/Hero/PropertySearchForm';
import PropertyCard from '@/components/Properties/PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';

const PropertiesPage = async () => {
  await connectDB();

  const properties = await Property.find({})
    .sort({ createdAt: -1 })
    .lean();

  return (
    <>
      <section className='py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24'>
        <p className='text-3xl font-medium mb-6 text-center'>Browse Properties</p>
        <PropertySearchForm />
        { properties.length === 0 ? (
          <div className='min-h-[80vh] flex items-center justify-center text-center'>
            <p className='text-edge text-2xl font-medium'>No properties found</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            { properties.map((property, i) => (
              <PropertyCard property={ property } key={ property._id } index={ i } />
            )) }
          </div>
        ) }
      </section>
    </>
  );
};

export default PropertiesPage;