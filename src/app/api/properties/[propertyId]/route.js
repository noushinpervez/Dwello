import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/:propertyId
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    // Fetch the target property by ID
    const property = await Property.findById(params.propertyId);

    if (!property) {
      return new Response('Property Not Found', { status: 404 });
    }

    // Fetch properties from the same city
    let potentialMatches = await Property.find({
      _id: { $ne: property._id }, // Exclude the current property
      'location.city': property.location.city,
    });

    // Scoring logic: assign a score to each potential match based on how many conditions it matches
    const scoredMatches = potentialMatches.map((match) => {
      let score = 0;

      if (match.type === property.type) score += 1;
      
      if (Math.abs(match.beds - property.beds) <= 1) score += 1;
      if (Math.abs(match.baths - property.baths) <= 1) score += 1;
      if (Math.abs(match.square_feet - property.square_feet) <= 500) score += 1;

      if (Math.abs(match.rates.nightly - property.rates.nightly) <= 1000) score += 1;
      if (Math.abs(match.rates.weekly - property.rates.weekly) <= 3000) score += 1;
      if (Math.abs(match.rates.monthly - property.rates.monthly) <= 5000) score += 1;

      return { ...match._doc, score };
    });

    // Sort matches by score in descending order (most similar first)
    scoredMatches.sort((a, b) => b.score - a.score);

    // Limit to top 3 matches
    const similarProperties = scoredMatches.slice(0, 6);
    
    // Return the property and similar properties
    const responsePayload = {
      property,
      similarProperties,
    };

    return new Response(JSON.stringify(responsePayload), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};