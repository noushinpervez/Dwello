import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async (request) => {
  try {
    console.log('Connecting to the database...');
    await connectDB();
    console.log('Database connected.');

    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.error('Error fetching properties:', error);
    return new Response('Error fetching properties', { status: 500 });
  }
};