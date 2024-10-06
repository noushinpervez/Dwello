'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaRegStar, FaStar } from 'react-icons/fa';

const PropertyBookmark = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkBookmarkStatus = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/bookmark/check', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            propertyId: property._id,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          setIsBookmarked(data.isBookmarked);
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to check bookmark status');
      } finally {
        setLoading(false);
      }
    };

    checkBookmarkStatus();
  }, [property._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error('You need to sign in to bookmark a property');
      return;
    }

    try {
      const res = await fetch('/api/bookmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId: property._id,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        toast.success(`Bookmark ${data.isBookmarked ? 'added' : 'removed'} successfully!`);
        setIsBookmarked(data.isBookmarked);
      } else {
        toast.error('Failed to update bookmark status');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong while updating bookmark');
    }
  };

  if (loading) {
    return <p className='text-edge font-medium'>Loading...</p>;
  }

  if (!session) {
    return null;
  }

  return (
    <button
      onClick={ handleClick }
      className={ `font-medium text-white py-3 px-4 rounded-full w-full focus:outline-none flex items-center justify-center transition-all scale-[0.98] ${isBookmarked ? 'bg-red-500 hover:opacity-90' : 'bg-primary hover:opacity-90'}` }
    >
      { isBookmarked ? <FaStar className='mr-2 mb-1' /> : <FaRegStar className='mr-2 mb-1' /> }
      { isBookmarked ? 'Remove Bookmark' : 'Bookmark Property' }
    </button>
  );
};

export default PropertyBookmark;