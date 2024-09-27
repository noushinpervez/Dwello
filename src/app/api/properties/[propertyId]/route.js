import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/:propertyId
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.propertyId);
    console.log('Property Fetched:', params.propertyId);

    if (!property) {
      return new Response('Property Not Found', { status: 404 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};