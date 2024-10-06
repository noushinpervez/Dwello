import connectDB from '@/config/database';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

export const POST = async (request) => {
  try {
    await connectDB(); 

    const { propertyId } = await request.json(); 
    const sessionUser = await getSessionUser(request); 

    if (!sessionUser) {
      return new Response('Unauthorized', { status: 401 });
    }

    const { userId } = sessionUser; 

    // Find the user in the database
    const user = await User.findById(userId).select('bookmarks'); 

    // Check if the property ID is in the user's bookmarks
    const isBookmarked = user && user.bookmarks.includes(propertyId);

    return new Response(JSON.stringify({ isBookmarked }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 });
  }
};