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
    let isBookmarked = user && user.bookmarks.includes(propertyId);

    let message;

    if (isBookmarked) {
      user.bookmarks.pull(propertyId);
      message = 'Bookmark removed successfully';
      isBookmarked = false;
    } else {
      user.bookmarks.push(propertyId);
      message = 'Bookmark added successfully';
      isBookmarked = true;
    }

    await user.save();
    return new Response(JSON.stringify({ message, isBookmarked }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 });
  }
};