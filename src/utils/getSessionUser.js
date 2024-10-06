import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';

export const getSessionUser = async (req) => {
  const session = await getServerSession({ req, ...authOptions });

  if (!session || !session.user) {
    return null;
  }

  return {
    user: session.user,
    userId: session.user.id,
  };
};