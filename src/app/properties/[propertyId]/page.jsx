'use client';

import mongoose from 'mongoose';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import PropertyBreadcrumb from '@/components/Property/PropertyBreadcrumb';
import Loading from '@/app/loading';
import PropertyBookmark from '@/components/Property/PropertyBookmark';
import PropertyContactForm from '@/components/Property/PropertyContactForm';
import PropertyDetails from '@/components/Property/PropertyDetails';
import PropertyHeader from '@/components/Property/PropertyHeader/PropertyHeader';
import PropertyShare from '@/components/Property/PropertyShare';
import RelatedPropertiesSlider from '@/components/Property/RelatedProperties';

const isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id) && id.length === 24;
};

const PropertyPage = () => {
  const { propertyId } = useParams();

  const [property, setProperty] = useState(null);
  const [relatedProperties, setRelatedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!propertyId || !isValidObjectId(propertyId)) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/properties/${propertyId}`);
        const data = await response.json();

        if (response.ok) {
          setProperty(data.property);
          setRelatedProperties(data.similarProperties);
        } else {
          setProperty(null);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    if (!property) {
      fetchPropertyData();
    }
  }, [propertyId, property]);

  if (!property && !loading) {
    return (
      <div className='min-h-[90vh] flex items-center justify-center text-center'>
        <p className='text-edge text-2xl font-medium'>Property Not found</p>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }
  

  return (
    <section>
      <div className='m-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24'>
        <PropertyBreadcrumb property={ property } />
        <PropertyHeader images={ property.images } />
        <div className='lg:grid grid-cols-12 w-full gap-16'>
          <div className='col-span-8 lg:mb-0 mb-16'>
            <PropertyDetails property={ property } />
          </div>
          <aside className='space-y-8 col-span-4 lg:sticky lg:top-4 lg:h-screen mb-24'>
            <PropertyBookmark property={ property } />
            <PropertyShare property={ property } />
            <PropertyContactForm property={ property } />
          </aside>
        </div>

        {/* Related Properties Section */ }
        { relatedProperties.length > 0 && (
          <RelatedPropertiesSlider relatedProperties={ relatedProperties } />
        ) }
      </div>
    </section>
  );
};

export default PropertyPage;