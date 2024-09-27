'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Loading from '@/app/loading';

const PropertyBookmark = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const checkBookmarkStatus = async () => {
      try {
        const res = await fetch('/api/bookmarks/check', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            propertyId: property._id,
          }),
        });

        if (res.status === 200) {
          const data = await res.json();
          setIsBookmarked(data.isBookmarked);
        }
      } catch (error) {
        console.log(error);
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
      const res = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId: property._id,
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        toast.success(data.message);
        setIsBookmarked(data.isBookmarked);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  };

  if (!session) {
    return null;
  }

  return (
    isBookmarked ? (
      <button
        onClick={ handleClick }
        className='bg-red-500 hover:opacity-90 font-medium text-white py-3 px-4 rounded-full w-full focus:outline-none flex items-center justify-center ring-1 ring-red-500 ring-offset-background ring-offset-2 transition-all scale-[0.98] hover:scale-[1] hover:ring-transparent active:scale-[0.96] active:ring-primary'
      >
        <FaStar className='mr-2' /> Remove Bookmark
      </button>
    ) : (
      <button
        onClick={ handleClick }
        className='bg-primary hover:opacity-90 font-medium text-white py-3 px-4 rounded-full w-full focus:outline-none flex items-center justify-center ring-1 ring-primary ring-offset-background ring-offset-2 transition-all scale-[0.98] hover:scale-[1] hover:ring-transparent active:scale-[0.96] active:ring-primary'
      >
        <FaRegStar className='mr-2' /><span>Bookmark Property</span>
      </button>
    )
  );
};

export default PropertyBookmark;