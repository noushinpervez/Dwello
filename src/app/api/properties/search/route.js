import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/search
export const GET = async (request) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');

    const locationPattern = new RegExp(location, 'i'); // Case-insensitive

    // Match location pattern against database fields
    let query = {
      $or: [
        { name: locationPattern },
        { 'location.street': locationPattern },
        { 'location.city': locationPattern },
        { 'location.state': locationPattern },
      ],
    };

    // Only check for propertyType if it's not 'All'
    if (propertyType && propertyType != 'All') {
      const propertyTypeArray = propertyType.split(',');
      query.type = { $in: propertyTypeArray };
    }

    const properties = await Property.find(query);

    return new Response(JSON.stringify(properties, { status: 200 }));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify('Something went wrong', { status: 500 }));
  }
}