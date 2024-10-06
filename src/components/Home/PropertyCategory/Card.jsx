import { useRouter } from 'next/navigation';

const Card = ({ card }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/properties/search-results?propertyType=${encodeURIComponent(card.title)}`);
  };

  return (
    <div
      key={ card.id }
      className='relative group h-[50vh] w-[80vw] md:w-[45vw] lg:w-[20vw] overflow-hidden rounded-2xl cursor-pointer'
      onClick={ handleCardClick }
    >
      {/* Background Image */ }
      <div
        style={ {
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } }
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>

      {/* Overlay */ }
      <div className='absolute inset-0 z-20 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-30'></div>

      {/* Content */ }
      <div className='absolute inset-0 z-30 flex items-center justify-center'>
        <h5 className='bg-gradient-to-br from-white/20 to-white/0 w-full p-3 lg:px-6 text-2xl text-center opacity-90 text-white backdrop-blur-lg font-medium'>
          { card.title }
        </h5>
      </div>
    </div>
  );
};

export default Card;